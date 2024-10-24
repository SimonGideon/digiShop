import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "./../config";

// Fetch categories from API
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(API_ENDPOINTS.CATEGORIES);
    const data = await response.json();
    return data.categories;
  }
);

export const fetchHotDeals = createAsyncThunk(
  "hotdeals/fetchHotDeals",
  async () => {
    const response = await fetch(API_ENDPOINTS.HOTDEALS);
    const data = await response.json();
    return data.hotdeals;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
