import React from "react";
import {
  Container,
  ContentWrapper,
  Title,
  SubTitle,
  Description,
  Button,
  SvgWrapper,
} from "./styles"; // Assuming styles.js contains the necessary styled-components
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
const NotFoundPage = () => {
  return (
    <div>
      <HeaderComponent />
      <Container>
        <ContentWrapper>
          {/* SVG Section */}
          <SvgWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
              <g id="robot">
                <rect
                  x="300"
                  y="200"
                  width="200"
                  height="200"
                  rx="20"
                  ry="20"
                  fill="#2ccf6d"
                  stroke="#0e0620"
                  strokeWidth="4"
                />
                <circle
                  cx="370"
                  cy="250"
                  r="20"
                  fill="#fff"
                  stroke="#0e0620"
                  strokeWidth="4"
                />
                <circle
                  cx="430"
                  cy="250"
                  r="20"
                  fill="#fff"
                  stroke="#0e0620"
                  strokeWidth="4"
                />
                <rect x="360" y="300" width="80" height="40" fill="#0e0620" />
                <line
                  x1="300"
                  y1="350"
                  x2="280"
                  y2="400"
                  stroke="#0e0620"
                  strokeWidth="4"
                />
                <line
                  x1="500"
                  y1="350"
                  x2="520"
                  y2="400"
                  stroke="#0e0620"
                  strokeWidth="4"
                />
              </g>
            </svg>
          </SvgWrapper>

          {/* Text Section */}
          <Title>404</Title>
          <SubTitle>Oops! Page Not Found</SubTitle>
          <Description>
            The page you're looking for doesn't exist. It might have been
            removed or the link is broken.
          </Description>
          <Button href="/">Go to Homepage</Button>
        </ContentWrapper>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default NotFoundPage;
