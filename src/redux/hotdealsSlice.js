import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "./../config";

export const fetchHotDeals = createAsyncThunk(
  "hotdeals/fetchHotDeals",
  async () => {
    const response = await fetch(API_ENDPOINTS.HOT_DEALS);
    const data = await response.json();
    return data.products;
  }
);

const hotdealsSlice = createSlice({
  name: "hotdeals",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotDeals.fulfilled, (state, action) => {
        const productNames = action.payload.map((product) => product.name);
        state.items = productNames; // Store only product names
        state.loading = false;
      })
      .addCase(fetchHotDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hotdealsSlice.reducer;
