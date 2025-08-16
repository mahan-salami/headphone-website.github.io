import React from "react";
import { IoMdTrash } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
const Cart = ({ cart, onClose, removeFromCart, updateQuantity }) => {
  // محاسبه مجموع کل
  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 flex "><FaCartShopping className="flex mr-2"/> Your Cart</h2>

      {/* اگر سبد خالی بود */}
      {cart.length === 0 ? (
        <p className="text-gray-500">your cart is empty </p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-2"
            >
              {/* عکس + نام */}
              <div className="flex items-center gap-3">
                <img src={item.img} alt={item.title} className="w-12 h-12 rounded" />
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              </div>

              {/* کنترل تعداد */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                  className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                  className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* دکمه حذف */}
              <button
                onClick={() => removeFromCart(item)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                <IoMdTrash/>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* مجموع کل */}
      <div className="mt-6 flex justify-between font-bold text-lg">
        <span>total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      {/* بستن */}
      <button
        onClick={onClose}
        className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
      >
        close
      </button>
    </div>
  );
};

export default Cart;
