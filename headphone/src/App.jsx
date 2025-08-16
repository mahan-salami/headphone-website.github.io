import { useState } from "react";
import Navbar from "./Componnent/Navbar";
import Hero from "./Componnent/Hero";
import Category from "./Componnent/Category";
import Category2 from "./Componnent/Category2";
import Services from "./Componnent/Services";
import Products from "./Componnent/Products";
import Cart from "./Componnent/Cart";
import Partners from "./Componnent/Partners";
import Popup from "./Componnent/Popup";
import Popup2 from "./Componnent/Popup2";
import Footer from "./Componnent/Footer";
import 'remixicon/fonts/remixicon.css';

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // 🛒 افزودن به سبد خرید
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        // اگر قبلا اضافه شده بود فقط تعداد رو زیاد کن
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // اگر جدید بود به سبد اضافه کن
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ❌ حذف از سبد خرید
  const removeFromCart = (item) => {
    setCart((prev) => prev.filter((p) => p.id !== item.id));
  };

  // 🔄 تغییر تعداد محصول
  const updateQuantity = (item, newQuantity) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === item.id ? { ...p, quantity: Math.max(newQuantity, 1) } : p
      )
    );
  };

  return (
    <>
      {/* نوار بالا با تعداد محصولات سبد */}
      <Navbar cartCount={cart.length} onCartClick={() => setCartOpen(true)} />

      {/* بخش‌های صفحه */}
      <Hero />
      <Popup2/>
      <Category />
      <Category2 />
      <Services />
      <Products addToCart={addToCart} />

      {/* سبد خرید */}
      {cartOpen && (
        <Cart
          cart={cart}
          onClose={() => setCartOpen(false)}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
       
      )}
       <Partners/>
       <Popup/>
       <Footer/>
    </>
  );
}

export default App;
