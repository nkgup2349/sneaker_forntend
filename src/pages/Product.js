import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, compareSellers } from "../services/productService";
import { useCart } from "../context/CartContext";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data));
  }, [id]);

  // ✅ UPDATED LOGIC
  const handleAddToCart = async () => {
    const res = await compareSellers(product.productId);
    const sellers = res.data;

    if (!sellers || sellers.length === 0) return;

    const bestSeller = sellers.reduce((min, s) =>
      s.price < min.price ? s : min
    );

    addToCart({
      // seller info
      userId:"u1",
      id: bestSeller._id,
      price: bestSeller.price,
      sellerName: bestSeller.sellerName,

      // product info (IMPORTANT)
      productId : product.productId,
      status: "PLACED",
      date: new Date().toISOString().slice(0, 10),
      name: product.name,
      brand: product.brand,
      category: product.category,
      image: product.images,
    });

    alert("Added to cart (best price)");
  };

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="product-page">
      <div className="product-card">
        
        {/* LEFT */}
        <div className="product-image">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/400"}
            alt={product.name}
          />

          <div className="image-thumbnails">
            {product.images?.map((img, i) => (
              <img key={i} src={img} alt="shoe" />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>

          <p className="brand">
            Brand: <strong>{product.brand}</strong>
          </p>

          <p className="price">
            ₹ <strong>{product.basePrice}</strong>
          </p>

          <span className="auth-badge">
            ✔ {product.authenticityScore}% Authentic
          </span>

          <p className="desc">{product.description}</p>

          <div className="checklist">
            <h4>Authenticity Checks</h4>
            <ul>
              {product.checklist.map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div className="action-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate(`/compare/${product.productId}`)}
            >
              Compare Sellers
            </button>

            <button
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
