import React from "react";
import {
  FlashSaleContainer,
  Header,
  Countdown,
  CountdownItem,
  ProductList,
  ProductCard,
  ProductImage,
  ProductDetails,
  DiscountBadge,
  ProductTitle,
  ProductPrice,
  ViewAllButton,
  CartButton,
  ProductActionIcons,
} from "./styles";
import { FaHeart, FaEye } from "react-icons/fa";

const QuickView = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      image: "/images/gamepad.png",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      image: "/images/keyboard.png",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4.0,
      reviews: 75,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      image: "/images/monitor.png",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.8,
      reviews: 99,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      image: "/images/chair.png",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4.9,
      reviews: 99,
    },
  ];

  return (
    <FlashSaleContainer>
      <Header>
        <div>
          <h3>Today's</h3>
          <h1>Quick View</h1>
        </div>
        <Countdown>
          <CountdownItem>
            <span>03</span>
            <small>Days</small>
          </CountdownItem>
          <CountdownItem>
            <span>23</span>
            <small>Hours</small>
          </CountdownItem>
          <CountdownItem>
            <span>19</span>
            <small>Minutes</small>
          </CountdownItem>
          <CountdownItem>
            <span>56</span>
            <small>Seconds</small>
          </CountdownItem>
        </Countdown>
      </Header>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <DiscountBadge>{`-${product.discount}%`}</DiscountBadge>
            <ProductActionIcons>
              <FaHeart />
              <FaEye />
            </ProductActionIcons>
            <ProductImage src={product.image} alt={product.name} />
            <ProductDetails>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>
                <span>${product.price}</span>
                <small>${product.originalPrice}</small>
              </ProductPrice>
              <CartButton>Add To Cart</CartButton>
            </ProductDetails>
          </ProductCard>
        ))}
      </ProductList>
      <ViewAllButton>View All Products</ViewAllButton>
    </FlashSaleContainer>
  );
};

export default QuickView;
