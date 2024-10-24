const API_BASE_URL = "http://127.0.0.1:5000";

export const API_ENDPOINTS = {
  HOT_DEALS: `${API_BASE_URL}/hot-deals`, // Assuming you have a hot-deals route
  CATEGORIES: `${API_BASE_URL}/categories`, // Assuming you have a categories route
  ORDERS: `${API_BASE_URL}/orders`, // For placing orders or getting order details
  PRODUCTS: `${API_BASE_URL}/products`, // For fetching products by filters
  PRODUCTS_BY_SUBCATEGORY: (subcategoryId) =>
    `${API_BASE_URL}/products/${subcategoryId}`, // Fetching products by subcategory
  ADD_PRODUCT: `${API_BASE_URL}/products`, // For adding a new product (POST request)
};
