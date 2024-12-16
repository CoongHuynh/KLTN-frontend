import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk để thêm sản phẩm vào danh sách yêu thích
export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const state = getState();

      const token = state.auth.user.token;
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/favorite/add`,
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Async thunk để lấy danh sách sản phẩm yêu thích
export const getFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.user.token;
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/favorites`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Async thunk để xóa sản phẩm khỏi danh sách yêu thích
export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.user.token;

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/favorite/remove`,
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload.favorites;
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload.favorites;
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default favoriteSlice.reducer;
