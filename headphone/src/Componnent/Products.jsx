import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import P1 from "../assets/product/p-1.jpg";
import P2 from "../assets/product/p-2.jpg";
import P3 from "../assets/product/p-3.jpg";
import P4 from "../assets/product/p-4.jpg";
import P5 from "../assets/product/p-5.jpg";
import P6 from "../assets/product/p-7.jpg";
import P7 from "../assets/product/p-9.jpg";
import P8 from "../assets/product/p-1.jpg";

const Products = ({ addToCart }) => {
  const product = [
    { id: 1, img: P1, title: "Wireless Pro Headphones", category: "Headphone", price: "$129", rating: 5 },
    { id: 2, img: P2, title: "Noise-Canceling Headphones", category: "Headphone", price: "$139", rating: 4 },
    { id: 3, img: P3, title: "Bass Boost Headphones", category: "Headphone", price: "$159", rating: 3 },
    { id: 4, img: P4, title: "Premium Studio Headphones", category: "Headphone", price: "$189", rating: 5 },
    { id: 5, img: P5, title: "Sport Wireless Headphones", category: "Headphone", price: "$149", rating: 4 },
    { id: 6, img: P6, title: "Budget Wired Headphones", category: "Headphone", price: "$119", rating: 4 },
    { id: 7, img: P7, title: "Luxury Over-Ear Headphones", category: "Headphone", price: "$199", rating: 5 },
    { id: 8, img: P8, title: "Foldable Travel Headphones", category: "Headphone", price: "$99", rating: 4 }
  ];

  return (
    <section className="p-5 bg-stone-100 md:p-16 lg:p-22">
      {/* عنوان */}
      <div className="mb-5 mt-5 sm:mt-0 sm:mb-12">
        <h1 className="text-center font-bold text-3xl sm:text-5xl">
          Trending Products
        </h1>
      </div>

      {/* لیست محصولات */}
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2 max-[448px]:grid-cols-1">
        {product.map((item) => (
          <div
            key={item.id}
            className="rounded p-2 bg-white shadow hover:shadow-lg transition hover:scale-105 relative"
          >
            {/* تصویر */}
            <img className="w-full rounded" src={item.img} alt={item.title} />

            {/* توضیحات محصول */}
            <div className="px-3 py-4">
              <h2 className="font-bold text-lg">{item.title}</h2>
              <span className="text-gray-600">{item.category}</span>

              {/* بخش امتیاز */}
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) =>
                  i < item.rating ? (
                    <AiFillStar key={i} className="text-amber-500" />
                  ) : (
                    <AiOutlineStar key={i} className="text-gray-300" />
                  )
                )}
              </div>

              {/* قیمت + دکمه */}
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold">{item.price}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-neutral-600 text-white px-3 py-1 rounded hover:bg-amber-500 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
