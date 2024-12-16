import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: transparent;
  color: #333;
  padding: 15px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  border-radius: 20px;
  border
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    text-decoration: none;
  }
`;

export const Logo = styled(Link)`
  font-size: 24px;
  color: #666;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #999;
  }
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  input {
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-right: 10px;
  }

  button {
    padding: 8px 16px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #218838;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ShoppingCart = styled.div`
  position: relative;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;

    i {
      font-size: 24px;
    }
  }

  .cart-count {
    background-color: #ff4136;
    color: #fff;
    font-size: 14px;
    border-radius: 50%;
    padding: 1px 6px;
    position: absolute;
    top: -5px;
    right: 0px;
  }
`;

export const ProfileMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const UserIconWrapper = styled.div`
  font-size: 1.2em;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background: linear-gradient(135deg, #ffffff, #e0e0e0);
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 15px 0;
  margin-top: 10px;
  display: ${({ visible }) => (visible ? "block" : "none")};
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
  }
`;

export const NavButton = styled.div`
  display: flex;

  @media (max-width: 320px) {
    display: inline;
  }
`;

export const NavItem = styled.div`
  margin: 0;
  padding-left: 20px;
  list-style-type: none;
  display: flex;
  align-items: center;

  a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 100%;

    &:hover {
      color: #e74c3c;
    }
  }

  .icon {
    margin-right: 10px;
    font-size: 20px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  display: block;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

export const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductName = styled.span`
  font-size: 14px;
  color: #333;
`;

export const ShowMore = styled.div`
  margin-top: 8px;
  color: #1e88e5;
  cursor: pointer;
  font-size: 14px;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;
