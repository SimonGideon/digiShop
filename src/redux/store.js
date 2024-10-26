import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import compareReducer from "./compareSlice";
import cartReducer from "./cartSlice";
import hotdealsReducer from "./hotdealsSlice";
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    compare: compareReducer,
    cart: cartReducer,
    hotdeals: hotdealsReducer,
    categorisedItems: categoryReducer,
  },
});

export default store;
