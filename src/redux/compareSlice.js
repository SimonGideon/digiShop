import { createSlice } from "@reduxjs/toolkit";

// Helper function to get the compare list from local storage
const loadCompareFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("compare");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load compare list from localStorage", e);
    return [];
  }
};

// Helper function to save the compare list to local storage
const saveCompareToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("compare", serializedState);
  } catch (e) {
    console.warn("Could not save compare list to localStorage", e);
  }
};

const compareSlice = createSlice({
  name: "compare",
  initialState: loadCompareFromLocalStorage(),
  reducers: {
    addToCompare: (state, action) => {
      const product = action.payload;
      if (!state.find((item) => item.id === product.id)) {
        state.push(product);
        saveCompareToLocalStorage(state); // Update local storage
      }
    },

    removeFromCompare: (state, action) => {
      const product = action.payload;
      const newState = state.filter((item) => item.id !== product.id);
      saveCompareToLocalStorage(newState); // Update local storage
      return newState;
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
