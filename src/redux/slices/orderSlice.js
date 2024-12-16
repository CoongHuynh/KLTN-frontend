import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk để tạo đơn hàng
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.user.token;

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/orders`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update order
export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async (orderData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.user.token;

      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/orders/${orderData.id}/items`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Async thunk để lấy orders theo user ID
export const fetchOrdersByUserId = createAsyncThunk(
  "orders/fetchOrdersByUserId",
  async (userId, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.user.token;

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/orders/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk để lấy chi tiết đơn hàng
export const getOrderDetails = createAsyncThunk(
  "orders/getOrderDetails",
  async (orderId, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.user.token;

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk để xử lý thanh toán đơn hàng
export const payOrder = createAsyncThunk(
  "orders/payOrder",
  async ({ orderId, paymentResult }, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.user.token;

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/orders/pay`,
        { order_id: orderId, status: "success", method: "paypal" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProfile = createAsyncThunk(
  `${process.env.REACT_APP_BACKEND_URL}/update-profile`,
  async (profileData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.user.token;

      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/update-profile`,
        profileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    shipping_address: " ",
    items: [],
    orders: [],
    order: { loading: true, items: [], user: {}, shippingAddress: {} },
    loading: false,
    error: null,
  },
  reducers: {
    setOrderItems: (state, action) => {
      state.items = action.payload.items;
      state.shipping_address = action.payload.shipping_address;
    },
    setOrderSummary: (state, action) => {
      state.orderSummary = action.payload;
    },
    clearOrders: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchOrdersByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrdersByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(payOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(payOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(payOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setOrderItems, setOrderSummary, clearOrders } =
  orderSlice.actions;
export default orderSlice.reducer;
