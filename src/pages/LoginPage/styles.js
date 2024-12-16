import styled from "styled-components";

/*  ------    Login Page  ----------*/
// Container for the entire page
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: transparent;
`;

// Wrapper for the form and content
export const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Logo styling
export const LogoWrapper = styled.div`
  margin-bottom: 20px;

  img {
    width: 100px;
  }
`;

// Form title
export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #0e0620;
  margin-bottom: 20px;
`;

// Submit button
export const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  background-color: var(--orange-color);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #28b35d;
  }
`;

// Additional links (forgot password, sign up)
export const Link = styled.a`
  display: block;
  margin: 15px 0;
  color: #0e0620;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #2ccf6d;
  }
`;
export const ForgotPasswordLink = styled(Link)`
  color: var(--blue-color);
  font-size: 14px;
  cursor: pointer;
`;

/*  ------    Login Page  ----------*/

/* ------- RegisterForm-----*/
export const RegisterCol = styled.div`
  position: relative;
  align-self: flex-start;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const RegisterLineHead = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 13px;
  color: var(--color-secondary);

  .reg_line_header i {
    margin-top: 3px;
  }
`;

export const RegGrid = styled.div`
  margin-top: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  height: 35px;
  width: 100%;
`;

export const Select = styled.select`
  width: 90px;
  font-size: 16px;
  color: var(--color-primary);
  background: var(--bg-primary);
  border-radius: 5px;
  cursor: pointer;
`;

export const Label = styled.label`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: var(--color-primary);
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid var(--color-secondary);
  padding: 0 10px;
`;

export const RegBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px 0;
`;
/* ------- RegisterForm-----*/
