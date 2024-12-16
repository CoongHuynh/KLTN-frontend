import styled from "styled-components";

// Main container
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f4f4f4;
`;

// Wrapper for content (SVG + Text)
export const ContentWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 20px;
`;

// Title for the 404 number
export const Title = styled.h1`
  font-size: 120px;
  margin: 0;
  color: #0e0620;
  font-weight: 900;
`;

// Subtitle for "Oops!"
export const SubTitle = styled.h2`
  font-size: 36px;
  color: #2ccf6d;
  margin-bottom: 20px;
  font-weight: 700;
`;

// Description text for the 404 message
export const Description = styled.p`
  font-size: 18px;
  color: #0e0620;
  margin-bottom: 30px;
  line-height: 1.6;
`;

// Button to go back to the homepage
export const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #2ccf6d;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #28b35d;
  }
`;

// Wrapper for the SVG
export const SvgWrapper = styled.div`
  svg {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    svg {
      width: 300px;
    }
  }
`;
