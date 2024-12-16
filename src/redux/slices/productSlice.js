import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Async thunk để lấy tất cả sản phẩm
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/products/all`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// Async thunk để lấy sản phẩm với bộ lọc
export const fetchFilterProduct = createAsyncThunk(
  "products/fetchFilterProduct",
  async (filters, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/products`,
        { params: filters }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Async thunk để lấy chi tiết sản phẩm
export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id, thunkAPI) => {
    try {
      console.log("Fetching product with ID:", id); // Add this line to log the ID
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/products/${id}?increaseViews=true`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk để cập nhật sản phẩm
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ productId, productData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/products/${productId}`,
        productData
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Async thunk để fetch sản phẩm theo views giảm dần
export const fetchTopProductsByViews = createAsyncThunk(
  "products/fetchTopProductsByViews",
  async (limit, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/product/top-lviews`,
        { params: { limit } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    featuredProducts: [],
    topProducts: [],
    products: [],
    product: null,
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    productsPerPage: 10,
    totalProducts: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.totalProducts = action.payload.length;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilterProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilterProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredProducts = action.payload.products;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchFilterProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTopProductsByViews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopProductsByViews.fulfilled, (state, action) => {
        state.loading = false;
        state.topProducts = action.payload;
      })
      .addCase(fetchTopProductsByViews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setPage, setFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
