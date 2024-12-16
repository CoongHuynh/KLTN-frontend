import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ChatBox from "./ChatBox"; // Import ChatBox component

// Styled component cho nút ChatButton
const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  background-color: #007bff;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;
const ChatBoxContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40vw;
  height: 70vh;
  z-index: 20;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease;
`;

const ChatBotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <>
      {!isOpen && (
        <ChatButton onClick={handleClick}>
          <img
            src="/gif/chat.gif"
            alt="Chat Icon"
            style={{ width: "5em", height: "5em" }}
          />
        </ChatButton>
      )}
      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          <ChatBoxContainer>
            <ChatBox onClose={handleClick} />
          </ChatBoxContainer>
        </Overlay>
      )}
    </>
  );
};

export default ChatBotButton;
