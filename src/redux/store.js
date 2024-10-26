import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import compareReducer from "./compareSlice";
import cartReducer from "./cartSlice";
import hotdealsReducer from "./hotdealSlice";
import categoryReducer from "./categorySlice";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    compare: compareReducer,
    cart: cartReducer,
    hotdeals: hotdealsReducer,
    categorisedItems: categoryReducer,
    products: productsReducer,
  },
});

export default store;
