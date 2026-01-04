import { useEffect, useState } from "react";
import { getProducts, compareSellers } from "../services/productService";
import { useCart } from "../context/CartContext";
import ProductCard from "../pages/ProductCard";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  // ✅ UPDATED LOGIC
  const quickAddToCart = async (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const res = await compareSellers(productId);
    const sellers = res.data;
    if (!sellers || sellers.length === 0) return;

    const bestSeller = sellers.reduce((min, s) =>
      s.price < min.price ? s : min
    );

    addToCart({
      // seller info
      id: bestSeller.id,
      price: bestSeller.price,
      sellerName: bestSeller.sellerName,

      // product info (IMPORTANT)
      name: product.name,
      brand: product.brand,
      category: product.category,
      images: product.images,
      basePrice: product.basePrice
    });
  };

  return (
    <div className="container">
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="Sneaker Marketplace"
          className="hero-img"
        />
        <div className="hero-text">
          <h1>Sneaker Marketplace</h1>
          <p>Authentic sneakers • Best sellers • Best prices</p>
        </div>
      </div>

      <div className="grid">
        {products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            onQuickAdd={quickAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
