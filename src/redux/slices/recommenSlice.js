import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk để fetch dữ liệu từ API getRecommenProductForUser
export const fetchRecommenProductForUser = createAsyncThunk(
  "recommendations/fetchRecommenProductForUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.user.token;
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/recommenuser`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Async thunk để fetch dữ liệu từ API getRecommendations
export const fetchRecommendations = createAsyncThunk(
  "recommendations/fetchRecommendations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/recommendations`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const recommenSlice = createSlice({
  name: "recommendations",
  initialState: {
    userRecommendations: [],
    generalRecommendations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommenProductForUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommenProductForUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userRecommendations = action.payload.recommendations;
      })
      .addCase(fetchRecommenProductForUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchRecommendations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.generalRecommendations = action.payload;
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default recommenSlice.reducer;
