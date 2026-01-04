// frontend/services/productService.js
import API from "../api/api";

export const getProducts = () => API.get("/product");
export const getProductById = (id) => API.get(`/product/${id}`);
export const getprodbyProductById = (productId) => API.get(`/product/getbyProductId/${productId}`);
export const compareSellers = (productId) =>
  API.get(`/product/compare/${productId}`);
