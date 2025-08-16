import React from "react";
import P10 from "../assets/category/samsung.png"
export default function Popup() {
  return (
    <div className="w-full flex justify-center items-center py-10 mt-10">
      <div className="bg-gray-500 w-[90%] md:h-[250px] md:w-[90%] rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 relative ">
        
        {/* متن سمت چپ */}
        <div className="text-white text-center md:text-left md:w-1/3">
          <p className="text-sm font-light">30% OFF</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">HAPPY<br/>HOURS</h1>
          <p className="text-sm mt-2">14 Jan to 28 Jan</p>
        </div>

        {/* ساعت (تصویر) */}
        <div className="flex justify-center md:w-1/3 my-6 md:my-0">
          <img 
            src={P10}
            alt="Smart Watch" 
            className="w-58 md:w-90 drop-shadow-xl"
          />
        </div>

        {/* متن سمت راست */}
        <div className="text-white text-center md:text-right md:w-1/3">
          <h2 className="text-lg">Smart Solo</h2>
          <h1 className="text-3xl md:text-4xl font-bold">Winter Sale</h1>
          <p className="text-sm mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
          <button className="mt-4 bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}
