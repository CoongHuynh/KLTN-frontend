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
import { getReviewsByProductId } from "../../redux/slices/reviewSlice"; // Import action để lấy review

const ProductContainer = styled.div`
  position: relative;
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
  gap: 30px;
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
  border-radius: 10px;
  background: #fff;
  padding: 30px;
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
  display: block;
  gap: 20px;
`;

const InfoBlock = styled.div`
  flex: 1;
  background: #f9f9f9;
  padding: 20px;
  margin: 10px 0;
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
const ReviewContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > div:first-child {
    flex: 0 0 32%;
    height: 17em;
  }

  & > div:last-child {
    flex: 0 0 66%;
  }

  @media (max-width: 768px) {
    & > div {
      flex: 0 0 100%;
    }
  }
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReviewItem = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ReviewAuthor = styled.span`
  font-weight: bold;
`;

const ReviewDate = styled.span`
  font-size: 14px;
  color: #555;
`;

const ReviewContent = styled.p`
  font-size: 14px;
  color: #555;
`;

const ReviewStars = styled.div`
  font-size: 16px;
  color: #f8e825;
`;

const ReviewSummary = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ReviewSummaryTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ReviewSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BarLabel = styled.span`
  width: 50px;
  text-align: right;
`;

const BarBackground = styled.div`
  flex: 1;
  background: #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 20px;
  background: ${({ color }) => color};
  width: ${({ width }) => width}%;
`;

const Star = styled.img`
  width: 15px;
  height: 15px;
`;

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const {
    name,
    description,
    price,
    stock,
    images,
    discount,
    discountStartDate,
    discountEndDate,
    numberOfReviews,
    ratings,
  } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cartLoading = useSelector((state) => state.cart.fulfilled);
  const cartItems = useSelector((state) => state.cart.items);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { reviews } = useSelector((state) => state.reviews);
  console.log("Product: ", product);
  useEffect(() => {
    if (cartItems.length === 0 && !cartLoading) {
      dispatch(getCart());
    }
  }, [dispatch, cartItems.length, cartLoading]);

  useEffect(() => {
    dispatch(getReviewsByProductId(id));
  }, [dispatch, id]);

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
      setIsLoading(true);
      await dispatch(addToCart({ productId: id, quantity: 1 }));
      await dispatch(getCart()); // Load lại giỏ hàng sau khi thêm sản phẩm
      setIsLoading(false);
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
    if (type === "increment" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
      : 0;

  const ratingCounts =
    reviews.length > 0
      ? [5, 4, 3, 2, 1].map(
          (rating) =>
            reviews.filter((review) => review.rating === rating).length
        )
      : [0, 0, 0, 0, 0];
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2aT4hXVRTHz5hmm8x/zTvnN5MSiKFWCxMRAt0IBW6SUIhMhLSFCtZGiRZBIUSLwoWCEFSCG5EiEgX/MMw75/ebUQZcaKGBLgo1cFGiWb93TnPjzk+Hnzgzv/f03fd7D/rC2d57P/ece+69516A/9VZbmDhUyY0ZExnnIMeqKosprdMyHlL6rgaqioTPHkfRJm+hirKDff1q5CNgwjdccNzZ0HVZIIf34dos61QJTkHPSp05SEQxgZUScq1tRN4Y8xcjEuhKlLBw5OBKNPnUAW5kTnPKONfU4D87kZgBpRdxtGOySDGYWJ6A8ouExrpBGKMP0CZ1Wz0vtQRorWnqBucT1BWKeO+NCD3bDeUUe7i0idV8GZaEBW8XMqDpHG0MYM3WgfJmF6FssmETmQFUcGvCh2kG1g42x8C3RAuSRrRSr9zq+CbJtEWY9ppgh+1HxDTg9BtY9pjMW43xs3KtN63nQiucFJ7wTX6+1IfNE1omwodMsHvTPCUT5/KeEkZrynTrayDC2XK9Kcy/qZMPxvTubGxMh1VoW+McQP443W3B/nYkEJXQGN83dN2ezCP5ak6vdZaA43+RSr0U/U8gb/4dfvggpZ5T5vg990enKW34z4JTZydHPT4LKJM/5Y4lEZV8DPnYFrnTMa4oYxJQAX/NsFNkEXNuO9lFbpaIohfE6ZXMkGMh9rZ2jxjPN1tCGOMXT3qfSSIcZgBmO5jsnueoIO53ihN6G1lvFtgKP1jTO9CCDUHabmP1QK8cD3h3lUQUk6eq7XOOqHWA53zfUARUsEvg3mD6QsoSiZ0MaBHLhQC4QaeRb+7BvTIaCGFCX8BCr3YLcZ3goO0LmFhQVTo2yKq7NcLALkRtMLSrEcvBg8raVmTo2XBQIzp/aJAjGlXSJBjmUKEKVHGvS2jJCPIsYCVRLqdfiB4vv3YPVYXZjqbYZ3ccccXzcwdJIlxTTov4F1/y3RH4ImHJsPBNGN6L+2EJCGetFXo0xThMOji2uJObbnB6Pn2p+spvPJJ7iAmNDx5h/iHn+msKbN1pZ6y8D2UK4SvVkxREv3RlzYfue2h3miyTVaFzPGCObmB+JrsBJ3c8PXf3PqoR+smuuvk+kynTAfaUuqon0HX6J8LYR5S97WXo1Rof24dmKDcWwuXi/gck9Rxte8r908GvmFj+tB/W4JCv0jhBz7tF9VnKfQfFFqnRXm5TeMAAAAASUVORK5CYII="
          alt="star--v1"
        />
      );
    }

    if (halfStar) {
      stars.push(
        <Star
          key="half"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEpUlEQVR4nO2aXYhbVRDHT9X6UUVqa3tnsrGLUD9BBBUrFFFRtBQE0QetoC3ICn6A+qB9qIg+iF8PCqJSFC36oqv2QdiCn2nuTNJdScVqqdWHilKxgqyuirqZ0x6Zc+9tdrOJSdZ7szfgHy4bsueec36ZzJyZuTHmf3WWc2aRJfzEEn6sr82gSii40jI6veohXGEGVUL4RgIijK+bQZQrDS8Vgj89BOFhfa3vmUGTJbw3sYZl+ND/peAeM2iyBJ8dBSG8NQbaYwZJdYZLGtZA50rDJwrDpHd6wovNoEgIX5oJ4t9jfCH2lxfNIMhViycJwy/NIImVhPBXV8MlJu+yBBtnQiQg/n8Mn0c+A7ebvMsShG1BCO+Pnb9s8iwXFs4WwiPtQNxEYbkw/O0DwC44z+RVQvh0M8RMEJUlfDvyFXjK5FGuZI4Txh87gQjD+tjpD7maWWzyJmG4qRVEM4hz5hhh+D62yo0mb7KMO7oBUQnB47HTj/V1k640vNSNDxXVQevV4FKhwjWRBYJNUU4FW4TRdgviqsXVGhSie2BLNEewSefUuXUNXcuv2W2iaRlHNMW2DNvj5K4mBPuF4AchnGq3uV6uNuvu7GUOIZyK9gT7dY/RXmF7tHcc0dTh9zQ22yuIq8CwED4mDM8JwyuWcdQyfGAZd1nGvcLwneZnrcL5HEiGv4yEsE7Thn6D9CJXWnGKK5+Oek5p0mkJ70gMoBA2xA3RwJ1DZwnhvryCzFQ9xLUauuOod1D9adYAN77sVMvwXp5BrPozwbSfl6DiSiug5UA3ao4VhifzBuL8YdvYl/YCtMbpTB7ihqTeXmgQVy0uswQfRf6AYgk39zTBdBkvSk7ghQJxXDgnDrfqDz9LWLh6nhOdUbCEEwsBIgzrG9EU9rhycOa8II7C7Fh9gjBu6xeIi7qTm7WFFN8/6t4PTjZpyRLe929pSBogzjcp/EmtDn1EHVyTTJO2Zps7XRDNq6xPPZJ0pHB96gCzFqzgucLwddogwvhWFJngm75Vj72eNd3Nic/EIE+Yfsky7E4dJIR1fjzhp9kTJA2ERkRJz0dquEQbExpQHK06LXMQy4Wbs4palrDsv14h3pAtRVSmvpwZCMMjsZ88ny1F5JQHsgKph7g2Dr/7MoXQumWep/uonhMd56+ZxUL4m97jqsWhzEBsCHfPE0Qz1z809eh0UlvCMX9PCLdlB8L4bk+b1zSD8DUheLVRewPpodp+DXggBt+WCURcdE32YIEDwnhtcn+d8XIh+CoGrPs8au/5xzevM01DF0Zj4GAmIHVaeVmXVjgsjFu1YdAyKSR8tFGu4pf1MFgza4wzi5KaXJsNqYNYgoc7ghB+MacZ0ELT1ZUXWMbxduBC8Gb8NbwrA5DosGpjhbZflXZSp7eEdyZRSgi/lQpe59diHIk/mHdShdDCJnmuMfcC/i/Zqq9CfZezEarrYbAmPhgn1TdTA0keBTRZYUpNn1bhYyuFWxr9KvzJNxrSfgosDM82+cKYI1xlsvi1BOPWpjbpQ6ktoLE//qQOadJoMpZwcJUWWKn7iWaj3pknCstNHx9zWw4eVKh+rZkL/QP5SXKq32gu9AAAAABJRU5ErkJggg=="
          alt="star-half-empty"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFXElEQVR4nO1aa4hVVRTe5mRllo06c9Y6Mz6IHjJFP6KiBz1+BJU/kh4G/dDKol9lUkR/CvuX9IJeSCXYC4RJghpSzOp6z9pnHjHYA7OpkCQ0S0lLIb13bWfH2mefO5fxztxrnnu9F/rgwOWcvb+11n6svdbaV6n/UR3WqtOMxq2GMC+/VauCKbzZaLTyyG/VqmCC9WOGwHrVirD93bNYwxHWaJIHjtqhcLZqNZgYV/jZ2Gg0bnK/Y1yhWg2G4Gu3pDTcxTHc7Qwh/E61EooarvBG7LcbLzjDbu+ZxoR/yDv5ploFTLgmMQRfLHv3UrLpcY1qBdj+7rNYw0FR2kbQU3of40ImHGXCv+wwTlfNDkOwLNkPEFf41u+/LVPNDkOYT5QNl1f49qDf9HnVzLBReJFbPhoPWz37nOO+5zpmMOEht+xiXKiaFaxhtT/F356kzVrv0Z5TzQibU21MsMe5WOq8eqJ2RR1e473X73ZYna6aDaxxsZ+NH2po+30yK+HtqtlgNHyShCTweNW2BE947/WxaiTsME63EXRY6jy/kMfLizHcwBoWGYIlhvBho4MnWSMzQUHaVeWLoEPaSh/p6zgIlgincIsMkeVk1nrmmAiWssZ3DOEGo2GLIRySqWfCXazhABMeS0PxGp7eWgfHEH5YKy8THvO67HLLknDI67rB6R7BUlmv+6oSuXAc9rPGnYZgmyGIfFTbywRvMeHLRsMqm5+DtRpi9dxQ+khf4RAuI5zCTbBNZCUy4Uh1/XCf4ghulbDBW37IUHBPIQ4utQPBAkvz2m2vmqpOMWyvmup0GQgWiG6iY3oeie5iQ9Jwa9eFTLgjjViZgptUk6IYh9eyxr3eQ/5cHs852MFZ56aex21CwkdUk8FofEichPd4m2WWJpzC9HT2Br3ZDIeWlcN2vF451Va1o4nwXib4x1se2TjoVKcw9zcEn/tlf9TE4QMnRCC+nDX86kdgp2wy1WBYHV7MBCNeh98mC31qcJE46IkOM+EdqkFgDYtSbyru2BLOOylCybmZcJ13daOyVutZNbRWTTGET6UHsdTDMs0oJYxIQorkBLebg7NVxrC5+Wcy4ft+BRgxSNUDTHBbmo9Lucfmw7lZcQuXGSshHRRZWXFX34CE67LidTGTdktpRGRkxVtFKLzmQ/ZVWXEKl0kMeVU1CpI8uUwwwuuy4hQuk8zyDtUIeJfsAswsT/0kVca/XWFisKtb1RuG4D7vufoy59bY17C6F2t8z9emVmbNbQhXetf7rqo3mGC3CKtHyFKQXCPZ8HvkYFT1gsT+fsT21iJI3Ki/G9lUS0HOWjVFYqrxdeO6Xd7I6TupQjnV5sKMsjSVCYsuvNneM22yvkzwge/zqKoXpHyT3DxNHEoX+4OrjIZvy2Kzte4hHE0ve6TNhDJ0cH9dS0XePbpotFJo4q8TVrsYyYf+5Te5RY3Xp+dPUhWR5KhjRgWernq49wqlThg57lsEN7KGn9I0mQleqRRUOmMJn03TVSb8hWO8ZXw71vBjtdLrf4YheMYr+npJsdz882RkS8tGwzfFGK6sxlWIui4zhF+V18NsDueMGYJv+OX1dPaGyD8YklF0yZWrDPp7QUmLZaRPZCl4h/CYJGye409JFZwhBHd6A3OZGiGJjeTLsv4LFFxiNHxUGk3J6U8iWpXSqNHw2Rgffioz5u7mpQSbZd4jBbCykU8KYxoOyK1UFgdXkhWGyx2n3+hp8aNUfMsCrPGFcWXKPvEuKmPYgc6gFAKNnT/PZybAEH7pZ2S33IOoOoM1Lk5DIUP4RWbE4l7Fg9jh9pmqQbDD7TNFpshulMymwL+ugzavawxtAAAAAABJRU5ErkJggg=="
          alt="star--v1"
        />
      );
    }

    return stars;
  };

  const now = new Date();
  const isDiscountValid =
    discount &&
    new Date(discountStartDate) <= now &&
    new Date(discountEndDate) >= now;

  const discountedPrice = isDiscountValid
    ? price - (price * discount) / 100
    : price;
  return (
    <ProductContainer>
      {isLoading && (
        <div className="loading">
          <div></div>
        </div>
      )}
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
            <Stars>{renderStars(ratings)}</Stars>
            <ReviewsCount>({numberOfReviews} Reviews)</ReviewsCount>
          </RatingContainer>
          <Price>
            {isDiscountValid ? (
              <>
                <span style={{ textDecoration: "line-through", color: "#999" }}>
                  ${price.toFixed(2)}
                </span>{" "}
                <span style={{ color: "#e91e63" }}>
                  ${discountedPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span>${price.toFixed(2)}</span>
            )}
          </Price>
          <div style={{ display: "flex", gap: "10px" }}>
            <StockStatus>{stock > 0 ? "In Stock" : "Out of Stock"}</StockStatus>
            <p>({stock})</p>
          </div>
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
        </ProductInfo>
      </ProductContent>

      {/* Review Section */}
      <ReviewContainer>
        <ReviewSummary>
          <ReviewSummaryTitle>Review Summary</ReviewSummaryTitle>
          <ReviewSummaryItem>
            <span>Average Rating</span>
            <span>{averageRating.toFixed(1)} ⭐</span>
          </ReviewSummaryItem>
          <BarChartContainer>
            {ratingCounts.map((count, index) => (
              <Bar key={index}>
                <BarLabel>{5 - index}⭐</BarLabel>
                <BarBackground>
                  <BarFill
                    color={
                      reviews.length > 0
                        ? [
                            "#4caf50",
                            "#8bc34a",
                            "#cddc39",
                            "#ffeb3b",
                            "#f44336",
                          ][index]
                        : "#fff"
                    }
                    width={
                      reviews.length > 0 ? (count / reviews.length) * 100 : 100
                    }
                  />
                </BarBackground>
                <span>{count}</span>
              </Bar>
            ))}
          </BarChartContainer>
        </ReviewSummary>

        <ReviewList>
          {reviews.map((review) => (
            <ReviewItem key={review._id}>
              <ReviewHeader>
                <ReviewAuthor>{review.user_id.name}</ReviewAuthor>
                <ReviewDate>
                  {new Date(review.createdAt).toLocaleDateString()}
                </ReviewDate>
              </ReviewHeader>
              <ReviewStars>
                {Array.from({ length: review.rating }, (_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </ReviewStars>
              <ReviewContent>{review.comment}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewList>
      </ReviewContainer>

      <CartSidebar />
    </ProductContainer>
  );
};

export default ProductDetail;
