import styled from "styled-components";

export const Box = styled.div`
  width: 28%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #eaeaea;
  background-color: ${(props) => (props.isExpanded ? "#e0e0e0" : "#f9f9f9")};
  transition: background-color 0.3s ease;
`;

export const IconWrapper = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

export const ExpandIcon = styled.span`
  font-size: 16px;
`;

export const CategoryName = styled.span`
  font-size: 16px;
  font-weight: 500;
  flex-grow: 1;
  text-align: left;
`;

export const Catalog = styled.div`
  display: flex;
  padding: 13px;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: var(--smooth);
  z-index: 6;
`;
export const MenuIcon = styled.div`
  width: 35px;
  height: 5px;
  background-color: var(--gray);
  border-radius: 5px;
  transition: var(--smooth);
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 35px;
    height: 5px;
    background-color: var(--gray);
    border-radius: 5px;
    transition: var(--smooth);
    margin-left: -17px;
  }
  &:before {
    transform: translateY(-12px);
  }

  &:after {
    transform: translateY(12px);
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  background-color: white;
  z-index: 20;
  width: 1140px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const CategoryList = styled.div`
  width: 20%;
  padding: 10px;
  background-color: #f5f5f5;
  border-right: 1px solid #e0e0e0;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }

  & span {
    margin-right: 10px;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  width: 60%;
  padding: 10px;
`;

export const BrandItem = styled.div`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const BestSellingContainer = styled.div`
  width: 20%;
  padding: 10px;
  background-color: #f5f5f5;
`;

export const BestSellingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  text-align: center;

  & img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 5px;
  }

  & div {
    margin-bottom: 3px;
  }
`;

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionHeader = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const FilterGroup = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .options {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .view-more {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    color: #007bff;
    cursor: pointer;
  }
`;

export const FilterOption = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 8px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    border-color: #007bff;
  }
`;

export const PriceInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  input {
    width: 100px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
  }

  span {
    margin: 0 5px;
  }
`;

export const PriceRange = styled.div`
  input[type="range"] {
    width: 100%;
  }
`;
