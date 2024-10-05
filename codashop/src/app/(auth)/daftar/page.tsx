import React from "react";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#280032] px-4">
      {" "}
      {/* Added px-4 for mobile padding */}
      <div className="bg-[#280032] p-8 rounded-lg shadow-lg text-center max-w-sm w-full border border-white sm:mx-4">
        {" "}
        {/* Added sm:mx-4 for small margins */}
        <h2 className="text-yellow-300 font-semibold mb-2">
          Top up lebih cepat, penawaran lebih baik
        </h2>
        <h1 className="text-white text-2xl font-bold mb-6">
          Gabung Codashop Sekarang.
        </h1>
        <button className="bg-white text-purple-800 px-6 py-3 rounded-full flex items-center justify-center w-full mb-4">
          <MdOutlineMail className="h-6 w-6 text-gray-400 mr-2" />
          Daftar dengan Email
        </button>
        <p className="text-sm text-gray-400 mb-6">
          Dengan mendaftar, anda setuju dengan{" "}
          <a href="#" className="text-blue-400">
            Persyaratan Layanan
          </a>{" "}
          dan{" "}
          <a href="#" className="text-blue-400">
            Kebijakan Privasi
          </a>
          .
        </p>
        <p className="text-gray-300">
          Sudah memiliki akun?{" "}
          <a href="/masuk" className="text-yellow-300 font-semibold">
            Masuk
          </a>
        </p>
        <Link href="/" className="text-yellow-300 font-semibold">
          {" "}
          {/* Link component to home */}
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}
