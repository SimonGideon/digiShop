import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import compareReducer from "./compareSlice";
import cartReducer from "./cartSlice";
import hotdealsReducer from "./hotdealsSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    compare: compareReducer,
    cart: cartReducer,
    hotdeals: hotdealsReducer,
  },
});

export default store;
