import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../config";
import { faFire } from "@fortawesome/free-solid-svg-icons";

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
    icon: faFire,
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
        state.items = action.payload.map((product) => ({
          id: product.id,
          brand: product.brand,
          name: product.name,
          discount: product.discount,
          image: product.image,
          price: product.price,
        }));
        state.loading = false;
      })
      .addCase(fetchHotDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hotdealsSlice.reducer;
