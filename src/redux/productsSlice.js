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

// Thunk to fetch individual product by id
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const response = await fetch(API_ENDPOINTS.INDIVIDUAL_PRODUCT(productId));
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data;
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

    individualProduct: {
      item: {},
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

    builder
      .addCase(fetchProductById.pending, (state) => {
        state.individualProduct = {
          item: null,
          loading: true,
          error: null,
        };
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.individualProduct.item = action.payload;
        state.individualProduct.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.individualProduct.loading = false;
        state.individualProduct.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
