import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import compareReducer from "./compareSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    compare: compareReducer,
    cart: cartReducer,
  },
});

export default store;
