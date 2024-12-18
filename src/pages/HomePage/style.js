import styled from "styled-components";

export const TopBanner = styled.div`
  display: block;
  gap: 20px;
`;

export const ProductGrid = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 auto;
  }
`;
export const ProductLists = styled.div``;

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.maxItemsPerRow || 4}, 1fr);
  gap: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    background-color: #ff0000;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PaginationInfo = styled.span`
  font-size: 1.2em;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: #ff0000;
    font-size: 1.2em;
    margin: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 17px;
      height: 30px;
      background-color: #ff0000;
      margin-right: 8px;
      border-radius: 5px;
    }
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
export const ArrowButton = styled.button`
  padding-left: 40px;
  padding-top: 30px;
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: rgba(255, 255, 255, 0);
`;
// Nút điều hướng trái
export const LeftArrowButton = styled.button`
  transform: translateY(-50%);
  background-color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    font-size: 1.2em;
  }
`;

// Nút điều hướng phải
export const RightArrowButton = styled.button`
  transform: translateY(-50%);
  background-color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    font-size: 1.2em;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 50px 0;
`;

export const CategoryContainer = styled.div`
  display: block;
  margin: 40px auto;
`;
export const CategoryList = styled.div`
  gap: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 0 auto;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 150px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  & svg {
    font-size: 32px;
    margin-bottom: 8px;
  }

  & span {
    font-size: 16px;
    font-weight: 500;
  }
`;
