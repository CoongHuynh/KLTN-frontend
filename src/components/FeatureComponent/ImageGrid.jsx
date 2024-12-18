import React from "react";
import styled from "styled-components";

// General Reset
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

const GridLayout = styled.div`
  display: grid;
  height: 600px;
  grid-template-columns: repeat(4, 1fr); /* 4 cột */
  grid-template-rows: repeat(2, 1fr); /* 2 hàng */
  grid-gap: 20px;
`;

const GridItem = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: black;

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    max-width: 25em;
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 6px 12px;
  border-radius: 5px;
  font-weight: bold;
`;

// Custom Grid Areas
const Large = styled(GridItem)`
  grid-column: span 2;
  grid-row: span 2;
`;

const Medium = styled(GridItem)`
  grid-column: span 2;
  grid-row: span 1;
`;

const Small = styled(GridItem)`
  grid-column: span 1;
  grid-row: span 1;
`;

// Component chính
const ImageGrid = () => {
  return (
    <Container>
      <GridLayout>
        {/* PlayStation 5 */}
        <Large>
          <img
            src="/images/Screenshot_2024-12-15_193233-removebg-preview.png"
            alt="PlayStation 5"
          />

          <Content>
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <Button href="#">Shop Now</Button>
          </Content>
        </Large>

        {/* Women's Collections */}
        <Medium>
          <img
            src="/images/Screenshot_2024-12-15_193330-removebg-preview.png"
            alt="Women's Collections"
          />
          <Content>
            <h2>Women’s Collections</h2>
            <p>Featured woman collections that give you another vibe.</p>
            <Button href="#">Shop Now</Button>
          </Content>
        </Medium>

        {/* Speakers */}
        <Small>
          <img
            src="/images/Screenshot_2024-12-15_193215-removebg-preview.png"
            alt="Speakers"
          />
          <Content>
            <h2>Speakers</h2>
            <p>Amazon wireless speakers.</p>
            <Button href="#">Shop Now</Button>
          </Content>
        </Small>

        {/* Perfume */}
        <Small>
          <img
            src="/images/Screenshot_2024-12-15_193248-removebg-preview.png"
            alt="Perfume"
          />
          <Content>
            <h2>Perfume</h2>
            <p>GUCCI INTENSE OUD EDP</p>
            <Button href="#">Shop Now</Button>
          </Content>
        </Small>
      </GridLayout>
    </Container>
  );
};

export default ImageGrid;
