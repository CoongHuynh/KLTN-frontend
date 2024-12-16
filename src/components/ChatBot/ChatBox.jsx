import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState(() => {
    // Tải lịch sử trò chuyện từ localStorage khi component được mount
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const saveMessages = (messages) => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  };

  const sendMessage = async () => {
    if (text.trim() === "") return;

    const newMessage = { text, sender: "user" };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setText("");
    setLoading(true);
    saveMessages(updatedMessages);

    try {
      const response = await fetch("http://localhost:5000/pred", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        body: JSON.stringify({
          body: text,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const prediction = await response.text();
      const botMessage = { text: prediction, sender: "bot" };
      const updatedMessagesWithBot = [...updatedMessages, botMessage];
      setMessages(updatedMessagesWithBot);
      saveMessages(updatedMessagesWithBot);
    } catch (error) {
      const errorMessage = { text: "No response received", sender: "bot" };
      const updatedMessagesWithError = [...updatedMessages, errorMessage];
      setMessages(updatedMessagesWithError);
      saveMessages(updatedMessagesWithError);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ChatContainer>
      <Header>
        <Title>Assistant</Title>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Header>
      <MessageContainer>
        {messages.map((message, index) => (
          <Message key={index} isOwnMessage={message.sender === "user"}>
            <MessageText isOwnMessage={message.sender === "user"}>
              {message.text}
            </MessageText>
          </Message>
        ))}
        {loading && (
          <LoadingContainer>
            <div className="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </LoadingContainer>
        )}
        <div ref={messagesEndRef} />
      </MessageContainer>
      <InputContainer>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatBox;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f0f2f5;
  border-radius: 10px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
`;

const Title = styled.h3`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.isOwnMessage ? "flex-end" : "flex-start"};
  margin-bottom: 10px;
`;

const MessageText = styled.div`
  background-color: ${(props) => (props.isOwnMessage ? "#1876f2" : "#e4e6eb")};
  color: ${(props) => (props.isOwnMessage ? "#fff" : "#000")};
  padding: 10px;
  border-radius: 20px;
  max-width: 60%;
  text-align: ${(props) => (props.isOwnMessage ? "right" : "left")};
  word-wrap: break-word;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.isOwnMessage ? "flex-end" : "flex-start"};
  align-items: center;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #ffffff;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #1876f2;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #165cdb;
  }
`;
