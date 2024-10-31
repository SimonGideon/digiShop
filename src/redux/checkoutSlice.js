import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../config";

// This slice is for posting orders
export const submitOrder = createAsyncThunk(
  "checkout/submitOrder",
  async (orderDetails, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.ORDERS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      // Check if the response status indicates an error
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit order");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    orderStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.orderStatus = "loading";
      })
      .addCase(submitOrder.fulfilled, (state) => {
        state.orderStatus = "succeeded";
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.error = action.payload;
      });
  },
});

export default checkoutSlice.reducer;
