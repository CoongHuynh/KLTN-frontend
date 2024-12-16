import React from "react";
import {
    SuccessContainer,
    SuccessMessage,
    OrderDetails,
    BackToHomeButton,
} from "./styles";
import {useNavigate} from "react-router-dom";

const SuccessPage = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate("/");
    };

    return (
        <SuccessContainer>
            <SuccessMessage>Order Placed Successfully!</SuccessMessage>
            <OrderDetails>
                Your order has been placed and is being processed.
            </OrderDetails>
            <BackToHomeButton onClick={handleBackToHome}>
                Back to Home
            </BackToHomeButton>
        </SuccessContainer>
    );
};

export default SuccessPage;