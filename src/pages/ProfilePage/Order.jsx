import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import {
  OrderContainer,
  OrderInfo,
  ProductInfo,
  ProductDetails,
  PriceInfo,
  OrderActions,
  Button,
  StatusBadge,
  ProfileForm,
} from "./styles"; // Import styled components từ file styles

export const OrderComponent = ({ order }) => {
  return (
    <ProductInfo>
      <img src={order.image} alt={order.name} />
      <ProductDetails>
        <p className="product-name">{order.name}</p>
        <p className="return-policy">Trả hàng miễn phí 15 ngày</p>
        <p className="rattings">Đánh giá: {order.ratings}</p>
      </ProductDetails>
      <PriceInfo>
        <p className="stock">{order.stock} sản phẩm</p>
        <p>{order.price}₫</p>
      </PriceInfo>
    </ProductInfo>
  );
};

const OrderListComponent = ({ title, orders }) => {
  const [expandedOrderIndex, setExpandedOrderIndex] = useState(null);

  const toggleOrderDetails = (index) => {
    setExpandedOrderIndex(expandedOrderIndex === index ? null : index);
  };

  return (
    <ProfileForm>
      <h2>{title}</h2>

      {orders.map((order, index) => (
        <OrderContainer key={index}>
          <OrderInfo>
            <div className="flex">
              <span className="date">{order.createdAt}</span>
              <p>
                Total: <strong>{order.total}₫</strong>
              </p>
              <StatusBadge status={order.status}>{order.status}</StatusBadge>
            </div>
            <div className="flex">
              <Button
                className="hide"
                onClick={() => toggleOrderDetails(index)}
              >
                {expandedOrderIndex === index ? (
                  <RiArrowDropUpLine fontSize={40} color="black" />
                ) : (
                  <RiArrowDropDownLine fontSize={40} color="black" />
                )}
              </Button>
            </div>
          </OrderInfo>

          {expandedOrderIndex === index && (
            <>
              {order.product &&
                Array.isArray(order.product) &&
                order.product.map((product, index) => (
                  <OrderComponent key={index} order={product} />
                ))}

              <OrderActions>
                <div className="actions">
                  <Button className="review-btn">Đánh Giá</Button>
                  <Button className="reorder-btn">Mua Lại</Button>
                </div>
              </OrderActions>
            </>
          )}
        </OrderContainer>
      ))}
    </ProfileForm>
  );
};

export default OrderListComponent;
