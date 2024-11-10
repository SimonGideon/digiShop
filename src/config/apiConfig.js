const API_BASE_URL = "http://127.0.0.1:5000";

export const API_ENDPOINTS = {
  HOT_DEALS: `${API_BASE_URL}/hot-deals`,
  CATEGORIES: `${API_BASE_URL}/categories`,
  ORDERS: `${API_BASE_URL}/orders`,
  CUSTOMERS: `${API_BASE_URL}/customers`,
  TAGS: `${API_BASE_URL}/tags`,
  BRANDS: `${API_BASE_URL}/brands`,
  PRODUCTS: `${API_BASE_URL}/products/all`,
  INDIVIDUAL_PRODUCT: (productId) => `${API_BASE_URL}/products/${productId}`,
  PRODUCTS_BY_CATEGORY: (categoryName) =>
    `${API_BASE_URL}/products/${categoryName}`,
  PRODUCTS_BY_SUBCATEGORY: (subcategoryId) =>
    `${API_BASE_URL}/products/${subcategoryId}`,
  // product/category/subcategory
  PRODUCT_BY_CATEGORY_AND_SUBCATEGORY: (category, subcategory) =>
    `${API_BASE_URL}/products/${category}/${subcategory}`,
  ADD_PRODUCT: `${API_BASE_URL}/products`,
  CUSTOMERS_COUNT: `${API_BASE_URL}/customers/count`,
  PRODUCTS_COUNT: `${API_BASE_URL}/in-stock/count`,
  DELETE_PRODUCT: (productId) => `${API_BASE_URL}/products/${productId}`,
  REVENUE: `${API_BASE_URL}/revenue`,
  CATEGORIES_COUNT: `${API_BASE_URL}/categories/count`,
  FULLFILLED_ORDERS: `${API_BASE_URL}/orders/fulfilled`,
  LOG_IN: `${API_BASE_URL}/login`,
  CHANGE_PASSWORD: `${API_BASE_URL}/change-password`,
};
