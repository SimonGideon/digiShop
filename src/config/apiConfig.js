const API_BASE_URL = "http://127.0.0.1:5000";

export const API_ENDPOINTS = {
  HOT_DEALS: `${API_BASE_URL}/hot-deals`,
  CATEGORIES: `${API_BASE_URL}/categories`,
  ORDERS: `${API_BASE_URL}/orders`,
  PRODUCTS: `${API_BASE_URL}/products`,
  PRODUCTS_BY_SUBCATEGORY: (subcategoryId) =>
    `${API_BASE_URL}/products/${subcategoryId}`,
  ADD_PRODUCT: `${API_BASE_URL}/products`,
};
