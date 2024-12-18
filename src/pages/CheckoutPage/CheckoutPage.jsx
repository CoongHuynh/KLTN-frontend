import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {
  CheckoutContainer,
  BillingDetails,
  OrderSummary,
  FormInput,
  PaymentMethod,
  CouponContainer,
  PlaceOrderButton,
  SummaryItem,
  CheckboxLabel,
} from "./styles";
import {
  updateOrder,
  fetchOrdersByUserId,
  getOrderDetails,
} from "../../redux/slices/orderSlice";
import { getCart } from "../../redux/slices/cartSlice";
import Swl from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const initialOptions = {
  "client-id":
    "AbmCdXL179Ny3BNoTfT3tNdUeY41eMF77cOxElD41Njja6cBAHc1PqnoZ36aLwRwkuqrxoR-pBQUrZ3h",
  currency: "USD",
  locale: "en_US",
};

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    streetAddress: "",
    city: "",
    country: "",
    phoneNumber: "",
    emailAddress: "",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [paymentCOD, setPaymentCOD] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const { orders, order, loading, error } = useSelector(
    (state) => state.orders
  );

  console.log("Order List: ", orders);
  console.log("Order Summary: ", order);
  useEffect(() => {
    const fetchOrders = async () => {
      await dispatch(getCart());
      if (user) {
        const resultAction = await dispatch(fetchOrdersByUserId(user.id));
        const orders = resultAction.payload;
        if (orders.length > 0) {
          const lastOrderId = orders[orders.length - 1]._id;
          dispatch(getOrderDetails(lastOrderId));
        }
      }
    };
    fetchOrders();
  }, [dispatch, user]);

  useEffect(() => {
    if (orderId && (!order || order._id !== orderId)) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId, order]);

  useEffect(() => {
    const userData = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {};
    setFormData({
      firstName: userData.name || "",
      streetAddress: userData.address?.street || "",
      city: userData.address?.city || "",
      country: userData.address?.country || "",
      phoneNumber: userData.phone || "",
      emailAddress: userData.email || "",
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleApprove = (data, actions) => {
    return actions.order
      .capture()
      .then((details) => {
        alert("Transaction completed by " + details.payer.name.given_name);
        handlePlaceOrder().then((r) => console.log(r));
      })
      .catch((error) => {
        console.error("Failed to capture order:", error);
      });
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      Cookies.set("user", JSON.stringify(formData));
    }
  };

  const calculateSubtotal = () => {
    return (
      order?.items?.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ) || 0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + (order?.shipping || 0);
  };

  const handlePlaceOrder = async () => {
    try {
      const shippingAddress = `${formData.streetAddress}, ${formData.city}, ${formData.country}`;
      await dispatch(
        updateOrder({
          id: order._id,
          shipping_address: shippingAddress,
          items: order.items,
          payment_status: "completed",
          method: paymentCOD ? "cod" : "paypal",
        })
      );
      setOrderSuccess(true);
      Swl.fire({
        title: "Order Placed Successfully!",
        text: "Your order has been placed and is being processed.",
        icon: "success",
        confirmButtonText: "Back to Home",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  return (
    <div>
      {(!order || loading) && (
        <div className="loading">
          <div></div>
        </div>
      )}
      {error &&
        Swl.fire({
          icon: "error",
          title: "Oops...",
          text: error?.toString(),
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        })}
      <CheckoutContainer>
        <BillingDetails>
          <h2>Billing Details</h2>
          <FormInput>
            <label>Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </FormInput>
          <FormInput>
            <label>Street Address*</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              required
            />
          </FormInput>
          <FormInput>
            <label>City*</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </FormInput>
          <FormInput>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </FormInput>
          <FormInput>
            <label>Phone Number*</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </FormInput>
          <FormInput>
            <label>Email Address*</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
          </FormInput>
          <CheckboxLabel>
            <input type="checkbox" onChange={handleCheckboxChange} />
            Save this information for faster check-out next time
          </CheckboxLabel>
        </BillingDetails>
        <OrderSummary>
          <h3>Order Summary</h3>
          {order?.items?.length > 0 ? (
            order.items.map((item, index) => (
              <SummaryItem key={index}>
                <span>{item?.product_id?.name}</span>
                <span>X {item?.quantity}</span>
                <span>${item.price}</span>
              </SummaryItem>
            ))
          ) : (
            <p>No items in the order summary.</p>
          )}
          <SummaryItem>
            <span>Subtotal:</span>
            <span>${calculateSubtotal()}</span>
          </SummaryItem>
          <SummaryItem>
            <span>Shipping:</span>
            <span>{order?.shipping}</span>
          </SummaryItem>
          <SummaryItem>
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </SummaryItem>
          <PaymentMethod>
            <label>
              <input
                type="checkbox"
                name="payment"
                value="cash"
                onChange={(e) => setPaymentCOD(e.target.checked)}
              />
              Cash on delivery
            </label>
          </PaymentMethod>
          <CouponContainer>
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </CouponContainer>
          <PlaceOrderButton onClick={handlePlaceOrder}>
            Place Order
          </PlaceOrderButton>
          {!paymentCOD && (
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: calculateTotal().toString(),
                        },
                      },
                    ],
                  });
                }}
                onApprove={handleApprove}
              />
            </PayPalScriptProvider>
          )}
        </OrderSummary>
      </CheckoutContainer>
    </div>
  );
};

export default CheckoutPage;
