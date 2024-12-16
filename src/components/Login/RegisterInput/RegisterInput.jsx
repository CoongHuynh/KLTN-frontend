import React from "react";
import { useField, ErrorMessage } from "formik";
import { useMediaQuery } from "react-responsive";

import { InputWrap, Input, InputError, ErrorArrowLeft } from "./styles";

export default function RegisterInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);
  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });
  const test1 = view3 && field.name === "first_name";
  const test2 = view3 && field.name === "last_name";

  return (
    <InputWrap>
      <Input
        style={{ borderColor: meta.touched && meta.error ? "#b94a48" : "" }}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <InputError style={{ transform: "translateY(2px)", left: "-110%" }}>
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && <ErrorArrowLeft></ErrorArrowLeft>}
        </InputError>
      )}
      {/* {meta.touched && meta.error && (
        <ErrorIcon style={{ top: `${!bottom && "63%"}` }}></ErrorIcon>
      )} */}
    </InputWrap>
  );
}
