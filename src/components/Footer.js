import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>SneakerX</h3>
          <p>
            Authentic sneakers with verified sellers, best price comparison,
            and secure delivery.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/orderStatus">My Orders</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/orderStatus">Track Order</Link></li>
            <li><Link to="/">Authenticity Check</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: nkgup2349@gmail.com</p>
          <p>Phone: +91 9863839377</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 SneakerX • All Rights Reserved
      </div>
    </footer>
  );
}
