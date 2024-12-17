import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import {
  CartItemContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductSubtotal,
  RemoveButton,
  SelectItemCheckbox,
} from "./styles";

const CartItem = ({
  item,
  index,
  selectedItems,
  quantities,
  handleSelectItem,
  handleQuantityChange,
  handleRemoveItem,
}) => {
  console.log(item);
  const now = new Date();
  const { price, discount, discountStartDate, discountEndDate, images, name } =
    item.product;
  const isDiscountValid =
    discount &&
    new Date(discountStartDate) <= now &&
    new Date(discountEndDate) >= now;

  const discountedPrice = isDiscountValid
    ? price - (price * discount) / 100
    : price;

  return (
    <CartItemContainer key={item.product._id}>
      <SelectItemCheckbox
        type="checkbox"
        checked={selectedItems.includes(index)}
        onChange={() => handleSelectItem(index)}
      />
      <RemoveButton onClick={() => handleRemoveItem(item._id)}>
        <IoIosCloseCircle size={20} color="#e74c3c" />
      </RemoveButton>
      <ProductImage src={item.product.images[0]} alt={item.product.name} />
      <ProductName>{item.product.name}</ProductName>
      <ProductPrice>
        <span>${discountedPrice.toFixed(2)}</span>{" "}
        {isDiscountValid && <small>${price.toFixed(2)}</small>}
      </ProductPrice>

      <ProductSubtotal>
        ${discountedPrice.toFixed(2) * quantities[index]}
      </ProductSubtotal>

      <ProductQuantity
        type="number"
        min="1"
        value={quantities[index]}
        onChange={(e) =>
          handleQuantityChange(index, parseInt(e.target.value, 10))
        }
        disabled={!selectedItems.includes(index)}
      />
    </CartItemContainer>
  );
};

export default CartItem;
