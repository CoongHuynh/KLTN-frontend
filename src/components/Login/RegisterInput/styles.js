import styled from "styled-components";

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid var(--bg-third);
  background: var(--bg-primary);
  width: 100%;
  height: 50px;
  font-size: 17px;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
  color: var(--color-primary);

  &:focus {
    border-color: var(--blue-color);
  }

  &.input_error_border {
    border-color: #b94a48 !important;
  }
`;

export const ErrorArrowRight = styled.div`
  border-right: 10px solid #b94a48;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  left: -10px;
  top: 14px;
`;

export const ErrorIcon = styled.i`
  position: absolute;
  right: 5px;
  top: 15px;
  transform: scale(0.8);
`;

export const InputError = styled.div`
  position: absolute;
  padding: 15px 10px;
  background: #b94a48;
  width: 100%;
  color: #fff;
  font-size: 13px;
  border-radius: 5px;
  margin-bottom: 15px;

  &.input_error_desktop {
    width: 300px;
    left: -19.5rem;
    top: -3px;
  }
`;

export const ErrorArrowTop = styled.div`
  border-top: 10px solid #b94a48;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  position: absolute;
  bottom: -10px;
`;

export const ErrorArrowBottom = styled.div`
  border-bottom: 10px solid #b94a48;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  position: absolute;
  top: -10px;
`;

export const ErrorArrowLeft = styled.div`
  border-left: 10px solid #b94a48;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  right: -10px;
  top: 13px;
`;
export const OpenSignup = styled.div`
  background: var(--green-color);
  width: 70% !important;
  font-weight: 600 !important;
  font-size: 17px !important;
  margin-top: 1rem;
`;
