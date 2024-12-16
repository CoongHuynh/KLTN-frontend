import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DotLoader from "react-spinners/DotLoader";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "../../redux/slices/authSlice"; // Adjust the import path as needed
import {
    FormWrapper,
    Title,
    Button,
    LogoWrapper,
    Input,
} from "../../pages/ForgotPasswordPage/styles"; // Adjust the import path as needed

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object({
        email: Yup.string()
            .required("Email address is required.")
            .email("Must be a valid email.")
            .max(100),
    });

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await dispatch(sendPasswordResetEmail(email)).unwrap();
            setSuccess("Password reset email sent successfully!");
        } catch (error) {
            const errorMessage = error.message || "An error occurred";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleBackToLogin = () => {
        navigate("/login");
    };

    return (
        <FormWrapper>
            <LogoWrapper>
                <img src="/logo.png" alt="TechStore Logo" />
            </LogoWrapper>
            <Formik
                initialValues={{ email }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Title>Forgot Password</Title>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Button type="button" onClick={handleSubmit} disabled={isSubmitting || loading}>
                            Send Reset Link
                        </Button>
                        <div style={{ marginTop: "10px" }}>
                            <Button type="button" onClick={handleBackToLogin}>
                                Back to Login
                            </Button>
                        </div>
                        <DotLoader
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "10px",
                            }}
                            color="#1876f2"
                            loading={loading}
                            size={30}
                        />
                        {error && <div style={{ color: "#b94a48" }}>{error}</div>}
                        {success && (
                            <div style={{ color: "var(--green-color)" }}>{success}</div>
                        )}
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
}