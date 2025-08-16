import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 rounded-t-2xl mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Brand and short description */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">Headphone Hub</h2>
          <p className="text-gray-400">
            The best headphones with excellent quality and affordable prices. Includes free shipping and 24/7 support.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/#Home" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="/#Shop" className="hover:text-pink-500 transition">Shop</a></li>
            <li><a href="/#About" className="hover:text-pink-500 transition">About Us</a></li>
            <li><a href="/#Blogs" className="hover:text-pink-500 transition">Blog</a></li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Media</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Contact information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: support@headphonehub.com</p>
          <p>Phone: +9821-12345678</p>
          <p>Address: Tehran, Iran</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2025 Headphone Hub. Design by Mahan Web.
      </div>
    </footer>
  );
};

export default Footer;