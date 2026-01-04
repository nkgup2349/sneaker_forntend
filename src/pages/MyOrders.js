import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../services/orderService";
import "./MyOrders.css";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(res => setOrders(res.data));
  }, []);

  if (orders.length === 0) return <p>Loading orders...</p>;

  console.log("the totle order is:");
  console.log(orders);
  return (
    <div className="orders-container">
      <h2>My Orders</h2>

      {orders.map(o => (
        <div className="order-item" key={o.id}>
          
          {/* LEFT */}
          <div className="order-left">
            {o.image && (
              <img
                src={o.image}
                alt={o.productName}
                className="order-thumb"
              />
            )}

            <div>
              <div><b>{o.productName}</b></div>
              <div className="order-brand">{o.category}</div>
              <div className="order-date">Date: {o.date}</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-right">
            <div className="status">{o.status}</div>
            <div className="order-price">₹{o.price}</div>
            <Link to={`/track/${o._id}`} className="track-link">
              Track
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
