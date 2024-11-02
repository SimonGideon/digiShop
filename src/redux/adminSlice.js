import { createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for different data types
const initialState = {
  products: { data: [], status: "idle", error: null },
  customers: { data: [], status: "idle", error: null },
  orders: { data: [], status: "idle", error: null },
  tags: { data: [], status: "idle", error: null },
  categories: { data: [], status: "idle", error: null },
  subcategories: { data: [], status: "idle", error: null },
  brands: { data: [], status: "idle", error: null },
};

// fetch tags
export const fetchTags = () => async (dispatch) => {
  dispatch(fetchTagsStart());
  try {
    const response = await fetch(API_ENDPOINTS.TAGS);
    const data = await response.json();
    dispatch(fetchTagsSuccess(data));
  } catch (error) {
    dispatch(fetchTagsFailure(error.toString()));
  }
};

// Async thunk for fetching products
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await fetch(API_ENDPOINTS.PRODUCTS);
    const data = await response.json();
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.toString()));
  }
};

// Async thunk for fetching customers
export const fetchCustomers = () => async (dispatch) => {
  dispatch(fetchCustomersStart());
  try {
    const response = await fetch(API_ENDPOINTS.CUSTOMERS);
    const data = await response.json();
    dispatch(fetchCustomersSuccess(data));
  } catch (error) {
    dispatch(fetchCustomersFailure(error.toString()));
  }
};

// Async thunk for fetching orders
export const fetchOrders = () => async (dispatch) => {
  dispatch(fetchOrdersStart());
  try {
    const response = await fetch(API_ENDPOINTS.ORDERS);
    const data = await response.json();
    dispatch(fetchOrdersSuccess(data));
  } catch (error) {
    dispatch(fetchOrdersFailure(error.toString()));
  }
};

// Async thunk for fetching categories
export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const response = await fetch(API_ENDPOINTS.CATEGORIES);
    const data = await response.json();
    dispatch(fetchCategoriesSuccess(data));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error.toString()));
  }
};

// Async thunk for posting a new category

export const postCategory = createAsyncThunk(
  "admin/postCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.CATEGORIES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Failed to add category");
      }

      const result = await response.json();
      return result.category;
    } catch (error) {
      return rejectWithValue(error.message || "An unexpected error occurred.");
    }
  }
);

// post new brand
export const postBrand = createAsyncThunk(
  "admin/postBrand",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.BRANDS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Failed to add brand");
      }

      const result = await response.json();
      return result.brand;
    } catch (error) {
      return rejectWithValue(error.message || "An unexpected error occurred.");
    }
  }
);

// Async thunk for fetching brands
export const fetchBrands = () => async (dispatch) => {
  dispatch(fetchBrandsStart());
  try {
    const response = await fetch(API_ENDPOINTS.BRANDS);
    const data = await response.json();
    dispatch(fetchBrandsSuccess(data));
  } catch (error) {
    dispatch(fetchBrandsFailure(error.toString()));
  }
};

const adminSlice = createSlice({
  name: "adminData",
  initialState,
  reducers: {
    // Products reducers
    fetchProductsStart(state) {
      state.products.status = "loading";
    },
    fetchProductsSuccess(state, action) {
      state.products.status = "succeeded";
      state.products.data = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.products.status = "failed";
      state.products.error = action.payload;
    },

    // Customers reducers
    fetchCustomersStart(state) {
      state.customers.status = "loading";
    },
    fetchCustomersSuccess(state, action) {
      state.customers.status = "succeeded";
      state.customers.data = action.payload;
    },
    fetchCustomersFailure(state, action) {
      state.customers.status = "failed";
      state.customers.error = action.payload;
    },

    // Orders reducers
    fetchOrdersStart(state) {
      state.orders.status = "loading";
    },
    fetchOrdersSuccess(state, action) {
      state.orders.status = "succeeded";
      state.orders.data = action.payload;
    },
    fetchOrdersFailure(state, action) {
      state.orders.status = "failed";
      state.orders.error = action.payload;
    },

    // categories reducers
    fetchCategoriesStart(state) {
      state.categories.status = "loading";
    },
    fetchCategoriesSuccess(state, action) {
      state.categories.status = "succeeded";
      state.categories.data = action.payload;
    },
    fetchCategoriesFailure(state, action) {
      state.categories.status = "failed";
      state.categories.error = action.payload;
    },

    // post category
    postCategoryStart(state) {
      state.categories.status = "loading";
    },
    postCategorySuccess(state, action) {
      state.categories.status = "succeeded";
      state.categories.data.push(action.payload);
    },
    postCategoryFailure(state, action) {
      state.categories.status = "failed";
      state.categories.error = action.payload;
    },
    // brands reducers

    fetchBrandsStart(state) {
      state.brands.status = "loading";
    },

    fetchBrandsSuccess(state, action) {
      state.brands.status = "succeeded";
      state.brands.data = action.payload;
    },
    fetchBrandsFailure(state, action) {
      state.brands.status = "failed";
      state.brands.error = action.payload;
    },

    // post brands
    postBrandStart(state) {
      state.brands.status = "loading";
    },
    postBrandSuccess(state, action) {
      state.brands.status = "succeeded";
      state.brands.data.push(action.payload);
    },
    postBrandFailure(state, action) {
      state.brands.status = "failed";
      state.brands.error = action.payload;
    },

    // tags reducers
    fetchTagsStart(state) {
      state.tags.status = "loading";
    },
    fetchTagsSuccess(state, action) {
      state.tags.status = "succeeded";
      state.tags.data = action.payload;
    },
    fetchTagsFailure(state, action) {
      state.tags.status = "failed";
      state.tags.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchCustomersStart,
  fetchCustomersSuccess,
  fetchCustomersFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  fetchBrandsStart,
  fetchBrandsSuccess,
  fetchBrandsFailure,
  postCategoryStart,
  postCategorySuccess,
  postCategoryFailure,
  postBrandStart,
  postBrandSuccess,
  postBrandFailure,
  fetchTagsStart,
  fetchTagsSuccess,
  fetchTagsFailure,
} = adminSlice.actions;

export default adminSlice.reducer;
