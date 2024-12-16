import React, { useState } from "react";
import { Form, Formik } from "formik";
import RegisterInput from "./RegisterInput/RegisterInput";
import * as Yup from "yup";
import DotLoader from "react-spinners/DotLoader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/slices/authSlice"; // Import thunk register
import Swal from "sweetalert2";

import {
  FormWrapper,
  LogoWrapper,
  Title,
  RegisterCol,
  RegisterLineHead,
  RegGrid,
  Label,
  Button,
  Link,
} from "../../pages/LoginPage/styles";

const userInfos = {
  name: "",
  email: "",
  password: "",
  address: {
    street: "",
    city: "",
  },
  phone: "",
  gender: "",
};

const RegisterPage = ({ setVisible }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(userInfos);
  const { name, email, password, address, phone, gender } = user;
  const { loading, error, success } = useSelector((state) => state.auth);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");
    if (nameParts.length > 1) {
      setUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [nameParts[1]]: value,
        },
      }));
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const registerValidation = Yup.object({
    name: Yup.string()
      .required("What's your First name ?")
      .min(2, "First name must be between 2 and 16 characters.")
      .max(16, "First name must be between 2 and 16 characters.")
      .matches(
        /^[a-zA-ZÀ-ỹ\s]+$/,
        "Numbers and special characters are not allowed."
      ),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)."
      )
      .min(6, "Password must be at least 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
    address: Yup.object({
      street: Yup.string()
        .required("Street is required.")
        .min(5, "Street must be at least 5 characters.")
        .max(100, "Street can't be more than 100 characters."),
      city: Yup.string()
        .required("City is required.")
        .min(2, "City must be at least 2 characters.")
        .max(50, "City can't be more than 50 characters."),
    }),
    phone: Yup.string()
      .required("Phone number is required.")
      .matches(/^[0-9]+$/, "Phone number is not valid.")
      .min(10, "Phone number must be at least 10 digits.")
      .max(15, "Phone number can't be more than 15 digits."),
  });

  const [genderError, setGenderError] = useState("");

  const registerSubmit = async () => {
    if (gender === "") {
      setGenderError(
        "Please choose a gender. You can change who can see this later."
      );
    } else {
      setGenderError("");
      dispatch(register({ name, email, password, address, phone, gender }))
        .unwrap()
        .then((data) => {
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "You have successfully registered!",
            confirmButtonText: "OK",
          }).then(() => {
            setVisible(false); // Hide the register form and show the login form
          });
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        });
    }
  };

  return (
    <FormWrapper onClick={() => setVisible(true)}>
      {/* Logo */}
      <LogoWrapper>
        <img src="/logo.png" alt="TechStore Logo" />
      </LogoWrapper>

      {/* Registration Form */}
      <Formik
        enableReinitialize
        initialValues={{
          name,
          email,
          password,
          address: {
            street: user.address.street,
            city: user.address.city,
          },
          phone,
          gender,
        }}
        validationSchema={registerValidation}
        onSubmit={registerSubmit}
      >
        {(formik) => (
          <Form>
            <Title>Register New Account</Title>
            <RegisterInput
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleRegisterChange}
            />
            <RegisterInput
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleRegisterChange}
            />
            <RegisterInput
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleRegisterChange}
            />
            <RegisterInput
              type="text"
              placeholder="Street"
              name="address.street"
              onChange={handleRegisterChange}
            />
            <RegisterInput
              type="text"
              placeholder="City"
              name="address.city"
              onChange={handleRegisterChange}
            />
            <RegisterInput
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleRegisterChange}
            />
            <RegisterCol>
              <RegisterLineHead>Gender</RegisterLineHead>
              <RegGrid>
                <Label htmlFor="male">
                  Male
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={handleRegisterChange}
                  />
                </Label>
                <Label htmlFor="female">
                  Female
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleRegisterChange}
                  />
                </Label>
              </RegGrid>
            </RegisterCol>
            <Button type="submit">Register</Button>

            {/* Additional Links */}
            <Link href="/login">Đã có tài khoản? Đăng nhập ngay</Link>
            <DotLoader color="#1876f2" loading={loading} size={30} />
            {error && <div style={{ color: "#b94a48" }}>{error}</div>}
            {success && (
              <div style={{ color: "var(--green-color)" }}>{success}</div>
            )}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default RegisterPage;
