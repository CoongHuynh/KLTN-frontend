import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchResults,
  SearchResultItem,
  ProductImage,
  ProductName,
  ShowMore,
} from "./styles";
import { fetchProducts } from "../../redux/slices/productSlice";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const typingTimeoutRef = useRef(null);

  const products = useSelector((state) => state.products.products);
  const loadingProducts = useSelector((state) => state.products.pending);
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    if (products.length === 0 && !loadingProducts) {
      dispatch(fetchProducts());
    }
    const value = e.target.value;
    setValue(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    if (value.trim() === "") {
      setSearchedProducts([]);
      return;
    }

    typingTimeoutRef.current = setTimeout(() => {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchedProducts(results);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedProducts(results);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200); // Đợi 200ms để đảm bảo không bị mất focus trước khi chọn sản phẩm
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Điều hướng đến trang chi tiết sản phẩm
  };

  const maxResults = 8; // Số lượng sản phẩm tối đa hiển thị

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search for tech products..."
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <SearchButton type="submit">
          <IoSearch />
        </SearchButton>
      </form>
      {isFocused && searchedProducts.length > 0 && (
        <SearchResults>
          {searchedProducts.slice(0, maxResults).map((product) => (
            <SearchResultItem
              key={product._id}
              onClick={() => handleProductClick(product._id)}
            >
              <ProductImage src={product.images[0]} alt={product.name} />
              <ProductName>{product.name}</ProductName>
            </SearchResultItem>
          ))}
          {searchedProducts.length > maxResults && (
            <ShowMore>
              {`Show more (${
                searchedProducts.length - maxResults
              } more products)`}
            </ShowMore>
          )}
        </SearchResults>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
