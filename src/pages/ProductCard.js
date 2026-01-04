import { Link } from "react-router-dom";
import { compareSellers } from "../services/productService";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const p = product;
  const { addToCart } = useCart();

  const handleQuickAdd = async () => {
    console.log()
    const res = await compareSellers(p.productId);
    const sellers = res.data;

    console.log(sellers);

    if (!sellers || sellers.length === 0) return;

    const bestSeller = sellers.reduce((min, s) =>
      s.price < min.price ? s : min
    );

    addToCart({
      _id: bestSeller._id,
      price: bestSeller.price,
      sellerName: bestSeller.sellerName,

      name: p.name,
      brand: p.brand,
      category: p.category,
      images: p.images,
      basePrice: p.basePrice
    });

    alert("Added to cart (best price)");
  };

  return (
    <div className="card">
      <img
        className="card-img"
        src={p.images?.[0] || "https://via.placeholder.com/300"}
        alt={p.name}
      />

      <span className="badge">
        Authenticity {p.authenticityScore}%
      </span>

      <h3>{p.name}</h3>

      <p className="brand-text">
        Brand Name: <b>{p.brand}</b>
      </p>

      <div className="card-price">
        <b>₹ {p.basePrice}</b>
      </div>

      <div className="btn-group">
        <Link className="btn" to={`/product/${p._id}`}>
          View Details
        </Link>

        <button
          className="btn-outline"
          onClick={handleQuickAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
