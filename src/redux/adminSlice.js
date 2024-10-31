import { createSlice } from "@reduxjs/toolkit";

// get orders list
const initialState = {
  orders: [],
  status: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrdersStart(state) {
      state.status = "loading";
    },
    getOrdersSuccess(state, action) {
      state.status = "succeeded";
      state.orders = action.payload;
    },
    getOrdersFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});
