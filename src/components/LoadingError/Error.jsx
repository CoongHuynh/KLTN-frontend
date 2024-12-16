import React from "react";
import { Alert } from "./styles";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
