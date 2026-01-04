// Navbar.js (SMALL STRUCTURE UPDATE)

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../context/CartContext";
import TrackOrder from "../pages/TrackOrder";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div className="navbar">
      <div className="navbar-inner">
        
        {/* LEFT */}
        <div className="nav-left">
          <Link to="/" className="logo">SneakerX</Link>

          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/products" className="nav-link">Products</NavLink>
          <NavLink to="/orders" className="nav-link">My Orders</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <Link to="/cart" className="icon">
            🛒 Cart
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>

          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
}
