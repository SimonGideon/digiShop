const API_BASE_URL = "http://127.0.0.1:5000";

export const API_ENDPOINTS = {
  HOT_DEALS: `${API_BASE_URL}/hot-deals`,
  CATEGORIES: `${API_BASE_URL}/categories`,
  ORDERS: `${API_BASE_URL}/orders`,
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
};
