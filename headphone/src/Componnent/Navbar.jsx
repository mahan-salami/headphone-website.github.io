import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import Lo from "/icon.png";

const MenuLinks = [
  { id: 1, name: "Home", link: "/#Home" },
  { id: 2, name: "Shop", link: "/#Shop" },
  { id: 3, name: "About", link: "/#About" },
  { id: 4, name: "Blogs", link: "/#Blogs" },
];

const Navbar = ({ cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-white dark:text-dark shadow z-40 sticky top-0">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* سمت چپ: لوگو + منو */}
        <div className="flex items-center gap-8">
          {/* لوگو */}
          <img
            src={Lo}
            alt="Logo"
            className="w-10 h-10 cursor-pointer"
          />

          {/* منو - دسکتاپ */}
          <ul className="hidden lg:flex items-center gap-6 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* سمت راست: نوار جستجو، کارت، همبرگر */}
        <div className="flex items-center gap-4 relative">

          {/* آیکون جستجو */}
          <div className="relative flex items-center mr-10">
            <CiSearch
              className="text-2xl text-gray-600 dark:text-gray-400 absolute left-3 z-10 cursor-pointer"
              onClick={() => setSearchOpen(!searchOpen)}
            />

            <input
              type="text"
              placeholder="Search..."
              className={`transition-all duration-300 ease-in-out
                          ${searchOpen ? "w-48 px-10 py-2 border border-gray-300 rounded-full" : "w-0 p-0 border-0"}
                          focus:outline-none focus:ring-2 focus:ring-pink-500`}
              autoFocus={searchOpen}
            />
          </div>

          {/* CART SHOP */}
          <button
            className="relative p-3"
            onClick={onCartClick} // 👉 وقتی کلیک شد، Cart باز میشه
          >
            <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
            {cartCount > 0 && (
              <div className="text-sm bg-red-500 text-white rounded-full w-4 h-4 absolute top-1 right-0 flex items-center justify-center">
                {cartCount}
              </div>
            )}
          </button>

          {/* دکمه همبرگری - موبایل */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* منو - موبایل */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:text-black px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="hover:text-pink-600 transition-colors duration-200 block"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
