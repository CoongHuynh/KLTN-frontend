import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const SuccessMessage = styled.h1`
  font-size: 2rem;
  color: green;
`;

const OrderDetails = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const BackToHomeButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;
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
