import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orderService";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const checkout = async (item) => {
  const order = await createOrder({
    sellerProductId: item.id,        // or item._id (whichever is sellerProduct)
    productId: item.productId,
    userId: "u1",
    productName: item.name,
    category: item.category,
    price: item.price,
    image: item.image?.[0],
    status: "PLACED",
    date: new Date().toISOString().slice(0, 10)
  });

  clearCart();
  navigate(`/track/${order.data._id}`);
};



  if (cart.length === 0)
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty 🛒</h2>
        <p>Add products to continue shopping</p>
      </div>
    );

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <div className="cart-info">
            <h4>{item.sellerName}</h4>
            <p>₹{item.price}</p>
          </div>

          <div className="cart-actions">
            <button className="btn checkout" onClick={() => checkout(item)}>
              Checkout
            </button>
            <button className="btn remove" onClick={() => removeFromCart(item._id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-footer">
        <h3>Total: ₹{total}</h3>
        <button className="btn clear" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
