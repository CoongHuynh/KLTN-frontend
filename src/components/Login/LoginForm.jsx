import LoginInput from "./LoginInput/index";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import {
  FormWrapper,
  Title,
  Button,
  LogoWrapper,
  ForgotPasswordLink,
} from "../../pages/LoginPage/styles";

export default function LoginForm({ setVisible }) {
  const loginInfos = {
    email: "",
    password: "",
  };
  const [loginValues, setLoginValues] = useState(loginInfos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = loginValues;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("Password is required"),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const loginSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      setLoading(true);
      console.log("Dispatching login action with values: ", values);
      await dispatch(login(values)).unwrap();
      setSuccess("Login successful!");
      navigate("/");
    } catch (error) {
      const errorMessage = error.message || "An error occurred";
      setError(errorMessage);
      setErrors({ server: errorMessage });
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    navigate("/forgot");
  };

  return (
    <FormWrapper>
      {/* Logo */}
      <LogoWrapper>
        <img src="/logo.png" alt="TechStore Logo" />
      </LogoWrapper>

      {/* Login Form */}
      <Formik
        enableReinitialize
        initialValues={{
          email,
          password,
        }}
        validationSchema={loginValidation}
        onSubmit={loginSubmit}
      >
        {(formik) => (
          <Form>
            <Title>Login Account</Title>
            <LoginInput
              type="text"
              name="email"
              placeholder="Email address or phone number"
              onChange={(e) => {
                handleLoginChange(e);
                formik.handleChange(e);
              }}
              value={formik.values.email}
            />
            <LoginInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                handleLoginChange(e);
                formik.handleChange(e);
              }}
              value={formik.values.password}
              bottom
            />
            <Button type="submit" disabled={formik.isSubmitting || loading}>
              Login
            </Button>
            <Button
              type="button"
              style={{ backgroundColor: "orange" }}
              onClick={() => setVisible(true)}
            >
              Register now
            </Button>
            <ForgotPasswordLink
              to="/forgot"
              onClick={handleForgotPasswordClick}
            >
              Forgotten password?
            </ForgotPasswordLink>
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
