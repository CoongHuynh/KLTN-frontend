import React from "react";
import { StyledNotiContainer } from "./styles";
import { ToastContainer } from "react-toastify";

const Noti = () => {
  return (
    <div>
      <StyledNotiContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      {/* Same as */}
      <StyledNotiContainer />
    </div>
  );
};

export default Noti;
