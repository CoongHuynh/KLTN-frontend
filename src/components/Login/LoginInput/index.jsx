import React from "react";
import { useField, ErrorMessage } from "formik";
import { useMediaQuery } from "react-responsive";
import {
  InputWrap,
  Input,
  ErrorIcon,
  InputError,
  ErrorArrowTop,
  ErrorArrowBottom,
  ErrorArrowLeft,
} from "./styles";

export default function LoginInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);
  return (
    <InputWrap>
      {meta.touched && meta.error && !bottom && (
        <InputError style={{ transform: "translateY(3px)" }}>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && <ErrorArrowTop></ErrorArrowTop>}
        </InputError>
      )}
      <Input
        style={{ borderColor: meta.touched && meta.error ? "#b94a48" : "" }}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <InputError style={{ transform: "translateY(2px)" }}>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && <ErrorArrowBottom></ErrorArrowBottom>}
        </InputError>
      )}
      {/* {meta.touched && meta.error && (
        <ErrorIcon style={{ top: `${!bottom && "63%"}` }}></ErrorIcon>
      )} */}
    </InputWrap>
  );
}
