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
  },
});

export const { addToCompare } = compareSlice.actions;
export default compareSlice.reducer;
