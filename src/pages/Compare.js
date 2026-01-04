// Compare.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { compareSellers , getprodbyProductById } from "../services/productService";
import { createOrder } from "../services/orderService";
import { useCart } from "../context/CartContext";
import "./Compare.css";

export default function Compare() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    compareSellers(id).then(res => setSellers(res.data));
  }, [id]);

  if (sellers.length === 0) {
    return (
      <div className="compare-container">
        <h2 className="compare-title">Compare Sellers</h2>
        <p className="loading">Fetching best offers…</p>
      </div>
    );
  }

  const bestPrice = Math.min(...sellers.map(s => s.price));

  const buyNow = async (seller) => {

  const iid = seller.productId;
  const res = await getprodbyProductById(iid);
  const product  = res.data[0] ; 

  const order = await createOrder({
    sellerProductId: seller._id,
    productId: product.productId,
    userId: "u1",
    productName: product.name,
    category: product.category,
    price: seller.price,
    image: product.images[0]?.[0],
    status: "PLACED",
    date: new Date().toISOString().slice(0, 10)
  });

  navigate(`/track/${order.data._id}`);
};


  return (
    <div className="compare-container">
      <h2 className="compare-title">Compare Sellers</h2>

      <div className="seller-list">
        {sellers.map(s => (
          <div
            key={s._id}
            className={`seller-card ${s.price === bestPrice ? "best" : ""}`}
          >
            <div className="seller-left">
              <h4 className="seller-name">{s.sellerName}</h4>

              <div className="meta">
                <span>⭐ {s.sellerRating}</span>
                <span>• Stock: {s.stock}</span>
              </div>

              {s.price === bestPrice && (
                <span className="best-tag">Best Deal</span>
              )}
            </div>

            <div className="seller-right">
              <div className="price">₹{s.price}</div>

              <button
                className="buy-btn"
                onClick={() => buyNow(s)}
              >
                Buy Now
              </button>

              <button
                className="cart-btn"
                onClick={() => addToCart(s)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
