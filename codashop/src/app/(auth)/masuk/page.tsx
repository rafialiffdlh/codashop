import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#280032]">
      <div className="bg-[#280032] p-10 rounded-lg shadow-lg max-w-sm w-full text-center border border-purple-400 mx-4 sm:mx-0">
        <h1 className="text-white text-2xl font-semibold mb-6">
          Selamat datang kembali!
        </h1>

        <div className="space-y-6 mb-6">
          <button className="flex items-center justify-center w-full bg-purple-300 text-purple-900 py-2 px-2 rounded-full shadow-md">
            <MdOutlineMail className="mr-2 text-xl" />
            Masuk dengan Email
          </button>
          <button className="flex items-center justify-center w-full bg-purple-300 text-purple-900 py-3 px-3 rounded-full shadow-md">
            <BsTelephone className="mr-2 text-xl" />
            Masuk dengan No Handphone
          </button>
        </div>

        <hr className="border-purple-700 mb-6" />

        <p className="text-white">
          Belum memiliki akun?{" "}
          <a href="/daftar" className="text-yellow-400 font-bold">
            Daftar
          </a>
        </p>

        <p className="text-white mt-2">
          <a href="/" className="text-yellow-400 font-bold">
            Kembali ke Home
          </a>
        </p>
      </div>
    </div>
  );
}
