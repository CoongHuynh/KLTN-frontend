import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  addToCart,
  getCart,
  openCartSidebar,
} from "../../redux/slices/cartSlice";
import CartSidebar from "../../pages/CartPage/CartSidebar";

const ProductContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

const ProductContent = styled.div`
  display: flex;
  gap: 40px;
`;

const ImageGallery = styled.div`
  flex: 1;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px 0;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 4px;
  &:hover {
    border-color: #000;
  }
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h1`
  font-size: 24px;
  margin: 0 0 10px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Stars = styled.div`
  font-size: 16px;
  color: #f8e825;
`;

const ReviewsCount = styled.span`
  font-size: 14px;
  color: #555;
`;

const Price = styled.div`
  font-size: 28px;
  color: #000;
  margin: 10px 0;
`;

const StockStatus = styled.div`
  font-size: 16px;
  color: green;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Options = styled.div`
  margin-bottom: 20px;
`;

const Option = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  button {
    background: #ddd;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background: #ccc;
    }
  }
  span {
    font-size: 16px;
  }
`;

const AddToCartButton = styled.button`
  background: #ff4b4b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #e04343;
  }
`;

const AdditionalInfo = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
`;

const InfoBlock = styled.div`
  flex: 1;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  strong {
    display: block;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: #555;
  }
`;

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const { name, description, price, stock, images } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cartLoading = useSelector((state) => state.cart.fulfilled);
  const cartItems = useSelector((state) => state.cart.items);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (cartItems.length === 0 && !cartLoading) {
      dispatch(getCart());
    }
  }, [dispatch, cartItems.length, cartLoading]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    if (user) {
      await dispatch(addToCart({ productId: id, quantity: 1 }));
      await dispatch(getCart()); // Load lại giỏ hàng sau khi thêm sản phẩm
      dispatch(openCartSidebar()); // Mở sidebar
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please login",
        text: "You need to login to view your cart.",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const handleImageClick = (image) => {
    setCurrentImageIndex(images.indexOf(image));
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <ProductContainer>
      {/* Breadcrumb */}
      {/* Product Content */}
      <ProductContent>
        {/* Image Gallery */}
        <ImageGallery>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
          <MainImage src={images[currentImageIndex]} alt="Main Product" />
        </ImageGallery>

        {/* Product Info */}
        <ProductInfo>
          <ProductTitle>{name}</ProductTitle>
          <RatingContainer>
            <Stars>
              {Array.from({ length: Math.floor(4.5) }, (_, index) => (
                <span key={index}>⭐</span>
              ))}
              {4.5 % 1 !== 0 && <span style={{ width: "50%" }}>⭐</span>}
            </Stars>
            <ReviewsCount>(150 Reviews)</ReviewsCount>
          </RatingContainer>
          <Price>${price.toFixed(2)}</Price>
          <StockStatus>{stock > 0 ? "In Stock" : "Out of Stock"}</StockStatus>
          <Description>{description}</Description>
          <Options>
            {/* Colors */}
            <div>
              Colours:
              <Option style={{ backgroundColor: "#FFFFFF" }} />
              <Option style={{ backgroundColor: "#FF4B4B" }} />
            </div>
            {/* Sizes */}
            <div>
              Size:
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </div>
          </Options>

          {/* Quantity Selector */}
          <QuantitySelector>
            <button onClick={() => handleQuantityChange("decrement")}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange("increment")}>+</button>
          </QuantitySelector>

          {/* Add to Cart */}
          <AddToCartButton disabled={stock <= 0} onClick={handleAddToCart}>
            {stock > 0 ? "Add to Cart" : "Out of Stock"}
          </AddToCartButton>
        </ProductInfo>
      </ProductContent>

      {/* Additional Info */}
      <AdditionalInfo>
        <InfoBlock>
          <strong>Free Delivery</strong>
          <p>Enter your postal code for Delivery Availability</p>
        </InfoBlock>
        <InfoBlock>
          <strong>Return Delivery</strong>
          <p>Free 30 Days Delivery Returns. Details</p>
        </InfoBlock>
      </AdditionalInfo>
      <CartSidebar />
    </ProductContainer>
  );
};

export default ProductDetail;
