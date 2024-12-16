import styled from "styled-components";

export const FlashSaleContainer = styled.div`
  padding: 40px;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: #ff0000;
    font-size: 1.2em;
    margin: 0;
  }
  h1 {
    font-size: 2.5em;
    margin: 0;
  }
`;

export const Countdown = styled.div`
  display: flex;
  gap: 15px;
`;

export const CountdownItem = styled.div`
  text-align: center;
  span {
    font-size: 2em;
    color: #ff0000;
  }
  small {
    display: block;
    font-size: 0.75em;
  }
`;

export const ProductList = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  overflow-x: auto;
`;

export const ProductCard = styled.div`
  position: relative;
  width: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  background: #fff;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff0000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
`;

export const ProductActionIcons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;

  svg {
    color: #ff0000;
    cursor: pointer;
    font-size: 1.2em;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

export const ProductDetails = styled.div`
  margin-top: 10px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
  color: #333;
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;

  span {
    font-size: 1.5em;
    color: #ff0000;
  }

  small {
    font-size: 1em;
    text-decoration: line-through;
    color: #aaa;
  }
`;

export const CartButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #ff0000;
  }
`;

export const ViewAllButton = styled.button`
  display: block;
  width: fit-content;
  margin: 40px auto 0;
  padding: 15px 30px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;
