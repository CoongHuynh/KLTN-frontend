import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import RegisterForm from "../../components/Login/RegisterForm";
import { Container } from "./styles";

const LoginPage = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("register")) {
      setVisible(true);
    }
  }, [location]);
  return (
    <div className="login">
      <Container>
        {visible ? (
          <RegisterForm setVisible={setVisible} />
        ) : (
          <LoginForm setVisible={setVisible} />
        )}
      </Container>
    </div>
  );
};

export default LoginPage;
