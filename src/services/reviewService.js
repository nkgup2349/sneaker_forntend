// services/reviewService.js (Frontend)
import axios from "axios";

const API = "http://localhost:5000";

// GET REVIEWS BY PRODUCT
export const getReviewsByProduct = (productId) =>
  axios.get(`${API}/reviews/${productId}`);

// ADD REVIEW
export const addReview = (reviewData) =>
  axios.post(`${API}/reviews`, {
    id: reviewData.id,
    productId: reviewData.productId,
    user: reviewData.user,
    rating: reviewData.rating,
    comment: reviewData.comment,
    date: reviewData.date
  });
