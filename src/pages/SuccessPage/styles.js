import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const SuccessMessage = styled.h1`
  font-size: 2rem;
  color: green;
`;

export const OrderDetails = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

export const BackToHomeButton = styled.button`
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