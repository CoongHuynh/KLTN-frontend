import styled from "styled-components";
import { ToastContainer } from "react-toastify";
export const Loading = styled.div`
display: flex;
justify-content: center;`;
export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Alert = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  ${(props) => {
    switch (props.variant) {
      case "alert-danger":
        return `
          color: #721c24;
          background-color: #f8d7da;
          border-color: #f5c6cb;
        `;
      case "alert-success":
        return `
          color: #155724;
          background-color: #d4edda;
          border-color: #c3e6cb;
        `;
      case "alert-warning":
        return `
          color: #856404;
          background-color: #fff3cd;
          border-color: #ffeeba;
        `;
      default:
        return `
          color: #004085;
          background-color: #cce5ff;
          border-color: #b8daff;
        `;
    }
  }}
`;

export const StyledNotiContainer = styled(ToastContainer)`
  .Toastify__toast--info {
    background: #3498db;
  }
  .Toastify__toast--success {
    background: #2ecc71;
  }
  .Toastify__toast--warning {
    background: #f1c40f;
  }
  .Toastify__toast--error {
    background: #e74c3c;
  }
`;
