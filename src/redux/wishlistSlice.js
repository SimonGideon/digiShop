import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!state.find((item) => item.id === product.id)) {
        state.push(product);
      }
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
