// src/redux/slices/categorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "./../config";

// Define price ranges for each category
// const PRICE_RANGES = [
//   { range: "Under Ksh.5,000", price: 2000 },
//   { range: "Ksh.5,000-Ksh.10,000", price: 10000 },
//   { range: "Ksh.10,000-Ksh.20,000", price: 20000 },
//   { range: "Ksh.20,000-Ksh.30,000", price: 30000 },
//   { range: "Ksh.30,000-Ksh.40,000", price: 40000 },
//   { range: "Ksh.40,000-Ksh.70,000", price: 70000 },
//   { range: "Ksh.70,000-Ksh.100,000", price: 100000 },
//   { range: "Ksh.100,000-Ksh.200,000", price: 200000 },
//   { range: "Above Ksh.200,000", price: 300000 }, // Use a high value for items above 200,000
// ];

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(API_ENDPOINTS.CATEGORIES);
    const data = await response.json();

    // Transform categories to include price ranges and limit items to 10
    const transformedCategories = data.slice(0, 10).map((category) => ({
      id: category.id,
      icon: category.ico,
      name: category.name,
      items: [
        ...category.subcategories.map((sub) => ({
          name: sub.name,
          id: sub.id,
        })),
      ],
    }));

    return transformedCategories;
  }
);

const categorySlice = createSlice({
  name: "categorisedItems",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
