"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import {
  FaSearch,
  FaTimes,
  FaStar,
  FaBookmark,
  FaShieldAlt,
} from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-purple-900 text-white px-4 py-2">
        <div className="flex items-center">
          <IoMdMenu size={28} className="cursor-pointer" onClick={toggleMenu} />
          <div className="ml-4 flex items-center space-x-2">
            <img
              src="https://cdn1.codashop.com/S/content/mobile/images/codashop-logo-new-3a.png"
              alt="Codashop Logo"
              className="h-6"
            />
            <p className="text-xs hidden lg:block">
              Website top-up terbesar, tercepat dan terpercaya untuk...
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaSearch size={20} className="cursor-pointer" />
          <GiTwoCoins size={24} className="cursor-pointer text-yellow-400" />
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-1 px-4 rounded-full">
            Daftar
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-80 h-full bg-purple-900 text-white p-6 z-50 shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <FaTimes size={24} className="cursor-pointer" onClick={toggleMenu} />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Daftar Codashop sekarang!</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-3">
              <FaStar className="text-yellow-400" />
              <span>
                Jadilah yang pertama mengetahui promo dan penawaran eksklusif!
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaBookmark className="text-yellow-400" />
              <span>Akses riwayat pesanan anda dengan mudah</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaShieldAlt className="text-yellow-400" />
              <span>Lebih cepat dan aman</span>
            </li>
          </ul>

          <div className="mt-6">
            <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-full mb-4">
              Daftar sekarang, gratis
            </button>
            <button className="w-full bg-gray-200 text-purple-900 font-semibold py-2 rounded-full">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
