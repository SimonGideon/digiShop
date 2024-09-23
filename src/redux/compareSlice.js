import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
  name: "compare",
  initialState: [],
  reducers: {
    addToCompare: (state, action) => {
      const product = action.payload;
      if (!state.find((item) => item.id === product.id)) {
        state.push(product);
      }
    },

    removeFromCompare: (state, action) => {
      const product = action.payload;
      return state.filter((item) => item.id !== product.id);
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
