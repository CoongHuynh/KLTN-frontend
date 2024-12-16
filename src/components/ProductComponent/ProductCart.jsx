import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/slices/productSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { addFavorite, removeFavorite } from "../../redux/slices/favoriteSlice";

import {
  ProductCardContainer,
  ProductImage,
  Image,
  DiscountBadge,
  ProductActionIcons,
  ProductDetails,
  ProductName,
  ProductPrice,
  AddToCartButton,
  ProductRating,
  ActionIcon,
  AlertContainer,
  Alert,
  StarsContainer,
  Star,
} from "./styles";

const ProductCart = ({ product, favorited }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isFavorited, setIsFavorited] = useState(favorited);
  const [showAlert, setShowAlert] = useState(false);
  console.log("favorited", favorited);
  useEffect(() => {
    if (!product) {
      dispatch(fetchProductById(product));
    }
  }, [dispatch, product]);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorited) {
      dispatch(removeFavorite(product._id));
    } else {
      dispatch(addFavorite(product._id));
    }
    setIsFavorited(!isFavorited);
  };

  const {
    _id,
    name,
    price,
    originalPrice,
    images,
    ratings,
    numberOfReviews,
    discount,
    discountStartDate,
    discountEndDate,
  } = product;

  const now = new Date();
  const isDiscountValid =
    discount &&
    new Date(discountStartDate) <= now &&
    new Date(discountEndDate) >= now;

  const discountedPrice = isDiscountValid
    ? price - (price * discount) / 100
    : price;

  const handleCardClick = () => {
    navigate(`/product/${_id}`);
  };

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

  return (
    <>
      {showAlert && (
        <AlertContainer>
          <Alert severity="success">
            <IoMdCheckmarkCircleOutline />
            <p>Product added to cart successfully!</p>
          </Alert>
        </AlertContainer>
      )}
      <ProductCardContainer onClick={handleCardClick}>
        <ProductImage>
          {isDiscountValid && <DiscountBadge>{`-${discount}%`}</DiscountBadge>}

          <ProductActionIcons>
            <ActionIcon onClick={handleFavoriteClick}>
              {!isFavorited ? (
                <FaRegHeart />
              ) : (
                <>
                  <img
                    src="/gif/heart.gif"
                    alt="heart animation"
                    style={{ width: "24px", height: "24px" }}
                  />
                </>
              )}
            </ActionIcon>
          </ProductActionIcons>

          <Image
            src={
              images && images.length > 0
                ? images[0]
                : `https://via.placeholder.com/150?text=${name}`
            }
            alt={name}
          />
        </ProductImage>

        <ProductDetails>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            <span>${discountedPrice.toFixed(2)}</span>{" "}
            {isDiscountValid && <small>${price.toFixed(2)}</small>}
          </ProductPrice>
          <ProductRating>
            <StarsContainer>{renderStars(ratings)}</StarsContainer>
            <span>({numberOfReviews} reviews)</span>
          </ProductRating>
        </ProductDetails>
      </ProductCardContainer>
    </>
  );
};
export default ProductCart;
