import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../services/orderService";
import "./TrackOrder.css";

const steps = ["PLACED", "PACKED", "SHIPPED", "DELIVERED"];

export default function TrackOrder() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrder(id).then(res => setOrder(res.data));
  }, [id]);

  if (!order) return <p className="loading">Loading...</p>;

  const currentStep = steps.indexOf(order.status);

  return (
    <div className="track-container">
      <h2 className="track-title">Track Your Order</h2>

      <div className="order-card">

        {order.image && (
          <div className="order-image">
            <img src={order.image} alt={order.productName} />
          </div>
        )}

        <div className="order-row">
          <span>Order ID</span>
          <strong>{order.id}</strong>
        </div>

        <div className="order-row">
          <span>Product</span>
          <strong>{order.brand} {order.productName}</strong>
        </div>

        <div className="order-row">
          <span>Category</span>
          <strong>{order.category}</strong>
        </div>

        <div className="order-row">
          <span>Price</span>
          <strong>₹{order.price}</strong>
        </div>

        <div className="order-row">
          <span>Status</span>
          <strong className="status-red">{order.status}</strong>
        </div>
      </div>

      <div className="progress-container">
        {steps.map((step, index) => (
          <div className="progress-step" key={step}>
            <div
              className={`progress-circle 
                ${index < currentStep ? "completed" : ""}
                ${index === currentStep ? "current" : ""}
              `}
            >
              {index + 1}
            </div>

            <p
              className={`
                ${index < currentStep ? "completed-text" : ""}
                ${index === currentStep ? "current-text" : ""}
              `}
            >
              {step}
            </p>

            {index !== steps.length - 1 && (
              <div
                className={`progress-line ${
                  index < currentStep ? "completed" : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
