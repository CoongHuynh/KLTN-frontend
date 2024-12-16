import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to add a product to the cart
export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ productId, quantity }, { rejectWithValue, getState }) => {
      try {
        const state = getState();
        const token = state.auth.user.token;
        console.log(
            "Adding product to cart with id:",
            productId,
            "and quantity:",
            quantity
        );
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/cart/add`,
            { productId, quantity },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
);

// Async thunk to get the cart
export const getCart = createAsyncThunk(
    "cart/getCart",
    async (_, { rejectWithValue, getState }) => {
      try {
        const state = getState();
        const token = state.auth.user.token;
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/cart`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
);

export const updateCartItem = createAsyncThunk(
    "cart/updateCartItem",
    async ({ id, quantity }, { rejectWithValue, getState }) => {
      try {
        const state = getState();
        const token = state.auth.user.token;
        console.log("Updating cart item with id:", id, "and quantity:", quantity);

        const response = await axios.put(
            `${process.env.REACT_APP_BACKEND_URL}/cart`,
            { id, quantity },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
);

// Async thunk to delete a product from the cart
export const deleteCartItem = createAsyncThunk(
    "cart/deleteCartItem",
    async (id, { rejectWithValue, getState }) => {
      try {
        const state = getState();
        const token = state.auth.user.token;

        const response = await axios.delete(
            `${process.env.REACT_APP_BACKEND_URL}/cart/item/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    selectedItems: [],
    total_price: 0,
    total_items: 0,
    isOpen: false,
    loading: false,
    error: null,
  },
  reducers: {
    openCartSidebar: (state) => {
      state.isOpen = true;
    },
    closeCartSidebar: (state) => {
      state.isOpen = false;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item._id === id);
      if (item) {
        item.quantity = quantity;
        state.total_price = state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
      }
    },
    toggleSelectItem: (state, action) => {
      const { index } = action.payload;
      const selectedIndex = state.selectedItems.indexOf(index);
      if (selectedIndex === -1) {
        state.selectedItems.push(index);
      } else {
        state.selectedItems.splice(selectedIndex, 1);
      }
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(addToCart.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addToCart.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload.items;
          state.total_price = action.payload.total_price;
        })
        .addCase(addToCart.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(getCart.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getCart.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload.items;
          state.total_price = action.payload.total_price;
          state.total_items = action.payload.total_items;
        })
        .addCase(getCart.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(updateCartItem.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateCartItem.fulfilled, (state, action) => {
          state.loading = false;
          const updatedItem = action.payload;
          const index = state.items.findIndex(
              (item) => item._id === updatedItem._id
          );
          if (index !== -1) {
            state.items[index] = updatedItem;
          }
        })
        .addCase(updateCartItem.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(deleteCartItem.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteCartItem.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload.items;
          state.total_price = action.payload.total_price;
          state.total_items = action.payload.total_items;
        })
        .addCase(deleteCartItem.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export const {
  updateQuantity,
  toggleSelectItem,
  clearSelectedItems,
  openCartSidebar,
  closeCartSidebar,
} = cartSlice.actions;

export default cartSlice.reducer;