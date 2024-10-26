import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../config";

// Thunk to fetch products by category and subcategory
export const fetchProductsByCategoryAndSubcategory = createAsyncThunk(
  "products/fetchProductsByCategoryAndSubcategory",
  async ({ category, subcategory }) => {
    const response = await fetch(
      API_ENDPOINTS.PRODUCT_BY_CATEGORY_AND_SUBCATEGORY(category, subcategory)
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();

    // Directly return the products array
    return data.map((product) => ({
      id: product.id,
      brand: product.brand,
      name: product.name,
      image: product.image,
      price: product.price,
      rating: product.rating,
      discount: product.discount,
    }));
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    categoryProducts: {
      items: [],
      loading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategoryAndSubcategory.pending, (state) => {
        state.categoryProducts.loading = true;
        state.categoryProducts.error = null;
      })
      .addCase(
        fetchProductsByCategoryAndSubcategory.fulfilled,
        (state, action) => {
          state.categoryProducts.items = action.payload;
          state.categoryProducts.loading = false;
        }
      )
      .addCase(
        fetchProductsByCategoryAndSubcategory.rejected,
        (state, action) => {
          state.categoryProducts.loading = false;
          state.categoryProducts.error = action.error.message;
        }
      );
  },
});

export default productsSlice.reducer;
