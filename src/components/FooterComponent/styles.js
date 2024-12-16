import styled from "styled-components";

// Styled components for the footer and its elements
export const FooterContainer = styled.footer`
  background-color: rgba(51, 51, 51, 0.4);
  color: #fff;
  padding: 40px 0;
  text-align: center;
`;

export const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const FooterSection = styled.div`
  margin: 20px 0;

  @media (min-width: 768px) {
    margin: 0 20px;
  }
`;

export const SectionTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 15px;
  color: #ffcc00;
`;

export const SectionLinks = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 10px;

    a {
      color: #000;
      text-decoration: none;
      font-size: 16px;

      &:hover {
        color: #fff;
      }
    }
  }
`;

export const SocialIcons = styled.div`
  margin-top: 20px;

  a {
    color: #000;
    font-size: 24px;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

export const CopyRight = styled.div`
  margin-top: 40px;
  font-size: 14px;
  color: #aaa;
`;
