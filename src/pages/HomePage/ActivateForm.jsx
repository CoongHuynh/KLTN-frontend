import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormWrapper,
  Title,
  Button,
  Container,
} from "../../pages/LoginPage/styles";
import PropagateLoader from "react-spinners/PropagateLoader";
import { activateAccount } from "../../redux/slices/verifySlice";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ActivateForm = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.verify);
  const user = JSON.parse(Cookies.get("user"));

  useEffect(() => {
    if (token && user.token) {
      dispatch(activateAccount({ token, userToken: user.token }));
    }
  }, [token, user.token, dispatch]);

  useEffect(() => {
    if (success) {
      Cookies.set("user", JSON.stringify({ ...user, verified: true }));
      setTimeout(() => {
        navigate("/");
      }, 2700);
    }
  }, [success, navigate, user]);

  useEffect(() => {
    if (error) {
      if (error === "This email is already activated") {
        alert("Your account is already activated.");
      } else if (
        error === "Token expired. A new activation email has been sent."
      ) {
        alert(
          "Token has expired. A new activation email has been sent to your email."
        );
      } else {
        console.log(error);
      }
    }
  }, [error]);

  return (
    <Container>
      <FormWrapper>
        <Title>Activate Your Account</Title>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PropagateLoader
              color={"#2ccf6d"}
              loading={loading}
              size={20}
              style={{ marginLeft: "-16%" }}
            />
          </div>
        )}
        {error && <div style={{ color: "#b94a48" }}>{error}</div>}
        {success && (
          <div style={{ color: "var(--green-color)" }}>
            <div style={{ color: "var(--green-color)" }}>{success}</div>
            <p>Redirecting to home page...</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PropagateLoader
                color={"#2ccf6d"}
                size={20}
                style={{ marginLeft: "-16%" }}
              />
            </div>
          </div>
        )}
      </FormWrapper>
    </Container>
  );
};

export default ActivateForm;
