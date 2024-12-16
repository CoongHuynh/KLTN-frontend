import React, { useState, useEffect } from "react";
import Roadmap from "../../components/RoadmapComponent/Roadmap";
import {
  CheckoutContainer,
  OrderSummary,
  PaymentMethod,
  CouponContainer,
  SummaryItem,
  OrderDetailRow,
  OrderDetailCol,
  OrderBox,
  OrderBoxContent,
  OrderBoxTitle,
  OrderBoxText,
  PayPalButtonContainer,
} from "./styles";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FaUser, FaTruckField } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import CartItem from "../CartPage/CartItem";
import axios from "axios";

const OrderPage = () => {
  const [orderData, setOrderData] = useState({
    user: {},
    shippingAddress: {},
    items: [],
    paymentMethod: "",
  });
  const [sdkReady, setSdkReady] = useState(false);
    const [isPaid, setIsPaid] = useState(false);
  console.log("Order Data: ",orderData);

   useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem("orderData")) || {};
    setOrderData(storedOrderData);

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/paypal`
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, []);

    const successPaymentHandler = async (paymentResult) => {
    console.log(paymentResult);
    // Xử lý kết quả thanh toán thành công
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/orders/pay`,
        {
          order_id: orderData._id,
          status: "success",
          method: "paypal",
        }
      );
      console.log("Payment Success: ", data);
      setIsPaid(true);
    } catch (error) {
      console.error("Payment Error: ", error);
    }
  };

  const calculateSubtotal = () => {
    return (
      orderData.items.reduce(
        (acc, item) => acc + item.product.price * item.product.quantity,
        0
      ) || 0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  return (
    <PayPalScriptProvider>
      <div>
        {/* Roadmap hiển thị đường dẫn */}
        <Roadmap />
        <div className="container">
          <OrderDetailRow>
            <OrderDetailCol>
              <OrderBox>
                <FaUser style={{ color: "#0F5132", fontSize: "27px" }} />
              </OrderBox>
              <OrderBoxContent>
                <OrderBoxTitle>Customer</OrderBoxTitle>
                <OrderBoxText>{orderData.user.name}</OrderBoxText>
                <OrderBoxText>{orderData.user.email}</OrderBoxText>
              </OrderBoxContent>
            </OrderDetailCol>
            <OrderDetailCol>
              <OrderBox>
                <FaTruckField style={{ color: "#0F5132", fontSize: "29px" }} />
              </OrderBox>
              <OrderBoxContent>
                <OrderBoxTitle>Order info</OrderBoxTitle>
                <OrderBoxText>
                  Shipping: {orderData.shippingAddress.country}
                </OrderBoxText>
                <OrderBoxText>Pay method: {orderData.paymentMethod}</OrderBoxText>
              </OrderBoxContent>
            </OrderDetailCol>
            <OrderDetailCol>
              <OrderBox>
                <FaMapMarkerAlt
                  style={{ color: "#0F5132", fontSize: "27px" }}
                />
              </OrderBox>
              <OrderBoxContent>
                <OrderBoxTitle>Deliver to</OrderBoxTitle>
                <OrderBoxText>
                  Address: {orderData.shippingAddress.city},{" "}
                  {orderData.shippingAddress.address},{" "}
                  {orderData.shippingAddress.postalCode}
                </OrderBoxText>
              </OrderBoxContent>
            </OrderDetailCol>
          </OrderDetailRow>

          <CheckoutContainer>
            {orderData.items.length === 0 ? (
              <OrderBoxTitle>Your order is empty</OrderBoxTitle>
            ) : (
              <>
                {orderData.items.map((item, index) => (
                  <CartItem
                    key={item.product_id}
                    item={item}
                    index={index}
                    selectedItems={[]}
                    quantities={[]}
                    handleSelectItem={() => {}}
                    handleQuantityChange={() => {}}
                    handleRemoveItem={() => {}}
                  />
                ))}
              </>
            )}

            <OrderSummary>
              <h3>Order Summary</h3>
              <SummaryItem>
                <span>Subtotal:</span>
                <span>${calculateSubtotal()}</span>
              </SummaryItem>
              <SummaryItem>
                <span>Shipping:</span>
                <span>Free</span>
              </SummaryItem>
              <SummaryItem>
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </SummaryItem>


              <CouponContainer>
                <input type="text" placeholder="Coupon Code" />
                <button>Apply Coupon</button>
              </CouponContainer>

              <PayPalButtonContainer>
                {sdkReady && !isPaid ? (
                  <PayPalButtons
                    amount={calculateTotal()}
                    onSuccess={successPaymentHandler}
                  />
                ) : (
                  <div>Loading...</div>
                )}
              </PayPalButtonContainer>
            </OrderSummary>
          </CheckoutContainer>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default OrderPage;