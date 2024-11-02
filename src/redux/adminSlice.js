import { createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../config";

// Initial state for different data types
const initialState = {
  products: { data: [], status: "idle", error: null },
  customers: { data: [], status: "idle", error: null },
  orders: { data: [], status: "idle", error: null },
  tags: { data: [], status: "idle", error: null },
  categories: { data: [], status: "idle", error: null },
  subcategories: { data: [], status: "idle", error: null },
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

// Similar thunks for tags, categories, and subcategories...

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
  // Additional exports for tags, categories, and subcategories actions...
} = adminSlice.actions;

export default adminSlice.reducer;
