 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        { email, password }
      );
      Cookies.set("user", JSON.stringify(data)); // Lưu vào cookie
      return data; // Trả về dữ liệu cho Redux
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Async thunk for register
export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        userData
      );
      Cookies.set("user", JSON.stringify(data)); // Lưu vào cookie
      return data; // Trả về dữ liệu cho Redux
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

 export const sendPasswordResetEmail = createAsyncThunk(
     'auth/sendPasswordResetEmail',
     async (email, { rejectWithValue }) => {
         try {
             const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/forgot-password`, { email });
             return response.data;
         } catch (error) {
             return rejectWithValue(error.response.data);
         }
     }
 );

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("Login failed with error: ", action.payload); // Kiểm tra nếu action rejected được gọi
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;