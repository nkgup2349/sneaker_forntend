// services/orderService.js (Frontend)
import axios from "axios";

const API = "http://localhost:5000";

/* CREATE ORDER */
export const createOrder = (data) =>
  axios.post(`${API}/orderStatus`, data);

/* GET ALL ORDERS */
export const getOrders = () =>
  axios.get(`${API}/orderStatus`);

/* GET SINGLE ORDER */
export const getOrder = (id) =>
  axios.get(`${API}/orderStatus/${id}`);

/* TRACK STATUS */
export const getOrderStatus = (id) =>
  axios.get(`${API}/orderStatus/${id}/status`);
