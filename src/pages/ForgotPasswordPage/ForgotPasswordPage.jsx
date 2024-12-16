import React, { useState } from "react";
import ForgotPasswordForm from "../../components/ForgotPassword/ForgotPasswordForm";
import { Container } from "./styles";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const ForgotPasswordPage = () => {
    return (
        <div className="forgot-password">
            <Container>
                <ForgotPasswordForm />
            </Container>
        </div>
    );
};

export default ForgotPasswordPage;