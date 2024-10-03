import { createSlice } from "@reduxjs/toolkit";
const saveToLocalStorage = (items) => {
  localStorage.setItem("wishlist", JSON.stringify(items));
};

const loadFromLocalStorage = () => {
  const savedItems = localStorage.getItem("wishlist");
  return savedItems ? JSON.parse(savedItems) : [];
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: loadFromLocalStorage(),
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!state.find((item) => item.id === product.id)) {
        state.push(product);
        saveToLocalStorage(state);
      }
    },

    removeFromWishlist: (state, action) => {
      const product = action.payload;
      const updatedState = state.filter((item) => item.id !== product.id);
      saveToLocalStorage(updatedState);
      return updatedState;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
