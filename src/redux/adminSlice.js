import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../config";

// Initial state for different data types
const initialState = {
  products: { data: [], status: "idle", error: null },
  customers: { data: [], status: "idle", error: null },
  orders: { data: [], status: "idle", error: null },
  tags: { data: [], status: "idle", error: null },
  categories: { data: [], status: "idle", error: null },
  subcategories: { data: [], status: "idle", error: null },
  brands: { data: [], status: "idle", error: null },
  customerOrders: { data: [], status: "idle", error: null },
};

// Async thunks for fetching data
export const fetchProducts = createAsyncThunk(
  "admin/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.PRODUCTS);
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCustomers = createAsyncThunk(
  "admin/fetchCustomers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.CUSTOMERS);
      if (!response.ok) throw new Error("Failed to fetch customers");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  "admin/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.ORDERS);
      if (!response.ok) throw new Error("Failed to fetch orders");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTags = createAsyncThunk(
  "admin/fetchTags",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.TAGS);
      if (!response.ok) throw new Error("Failed to fetch tags");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "admin/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.CATEGORIES);
      if (!response.ok) throw new Error("Failed to fetch categories");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "admin/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.BRANDS);
      if (!response.ok) throw new Error("Failed to fetch brands");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCustomerOrders = createAsyncThunk(
  "admin/fetchCustomerOrders",
  async (customerId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${API_ENDPOINTS.CUSTOMERS}/${customerId}/orders`
      );
      if (!response.ok) throw new Error("Failed to fetch customer orders");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunks for posting data
export const postCategory = createAsyncThunk(
  "admin/postCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.CATEGORIES, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add category");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postBrand = createAsyncThunk(
  "admin/postBrand",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(API_ENDPOINTS.BRANDS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add brand");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const adminSlice = createSlice({
  name: "adminData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.products.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.status = "succeeded";
        state.products.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products.status = "failed";
        state.products.error = action.payload;
      })

      // Customers
      .addCase(fetchCustomers.pending, (state) => {
        state.customers.status = "loading";
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.customers.status = "succeeded";
        state.customers.data = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.customers.status = "failed";
        state.customers.error = action.payload;
      })

      // Orders
      .addCase(fetchOrders.pending, (state) => {
        state.orders.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders.status = "succeeded";
        state.orders.data = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.orders.status = "failed";
        state.orders.error = action.payload;
      })

      // Tags
      .addCase(fetchTags.pending, (state) => {
        state.tags.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags.status = "succeeded";
        state.tags.data = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.tags.status = "failed";
        state.tags.error = action.payload;
      })

      // Categories
      .addCase(fetchCategories.pending, (state) => {
        state.categories.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories.status = "succeeded";
        state.categories.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categories.status = "failed";
        state.categories.error = action.payload;
      })

      // Brands
      .addCase(fetchBrands.pending, (state) => {
        state.brands.status = "loading";
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands.status = "succeeded";
        state.brands.data = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.brands.status = "failed";
        state.brands.error = action.payload;
      })

      // Customer Orders
      .addCase(fetchCustomerOrders.pending, (state) => {
        state.customerOrders.status = "loading";
      })
      .addCase(fetchCustomerOrders.fulfilled, (state, action) => {
        state.customerOrders.status = "succeeded";
        state.customerOrders.data = action.payload;
      })
      .addCase(fetchCustomerOrders.rejected, (state, action) => {
        state.customerOrders.status = "failed";
        state.customerOrders.error = action.payload;
      })

      // Post Category
      .addCase(postCategory.pending, (state) => {
        state.categories.status = "loading";
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.categories.status = "succeeded";
        state.categories.data.push(action.payload);
      })
      .addCase(postCategory.rejected, (state, action) => {
        state.categories.status = "failed";
        state.categories.error = action.payload;
      })

      // Post Brand
      .addCase(postBrand.pending, (state) => {
        state.brands.status = "loading";
      })
      .addCase(postBrand.fulfilled, (state, action) => {
        state.brands.status = "succeeded";
        state.brands.data.push(action.payload);
      })
      .addCase(postBrand.rejected, (state, action) => {
        state.brands.status = "failed";
        state.brands.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
