import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Compare from "./pages/Compare";
import TrackOrder from "./pages/TrackOrder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-layout">
          <Navbar />

          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/orders" element={<MyOrders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/compare/:id" element={<Compare />} />
              <Route path="/track/:id" element={<TrackOrder />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
