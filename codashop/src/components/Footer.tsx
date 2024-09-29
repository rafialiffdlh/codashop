import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="bg-[#e8f953] pt-6 text-center">
        <div className="flex flex-wrap pt-5 pb-4 px-5">
          <div className="max-w-xs px-6 py-8">
            <h3 className="font-bold text-lg justify-start mb-4">
              Untuk Penerbit
            </h3>
            <p>
              <a href="#" className="text-black hover:underline">
                Daftarkan judul Anda di Codashop
              </a>
            </p>
            <p>
              <a href="#" className="text-black hover:underline">
                Pelajari lebih lanjut tentang kami
              </a>
            </p>
          </div>

          <div className="max-w-xs px-6 pt-8">
            <h3 className="font-bold text-lg mb-4">Butuh Bantuan?</h3>

            <button className="bg-[#bfd602] text-black py-2 px-6 rounded-lg flex items-center space-x-2">
              <span>Hubungi Kami</span>
            </button>
          </div>

          <div className="max-w-xs px-6 pt-8">
            <h3 className="font-bold text-lg mb-4">Area</h3>
            <button className="bg-[#bfd602] text-black py-2 px-6 rounded-lg flex items-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
                alt="Indonesia flag"
                className="w-5"
              />
              <span>Indonesia</span>
            </button>
          </div>

          {/* Dapatkan berita Coda */}
          <div className="max-w-xs px-6 pt-8">
            <h3 className="font-bold text-lg mb-4">Dapatkan berita Coda di:</h3>
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src="https://cdn1.codashop.com/S/content/social-media-logo/36/socmed-facebook-H36.png"
                  alt="Facebook"
                  className="w-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn1.codashop.com/S/content/social-media-logo/36/socmed-youtube-H36.png"
                  alt="YouTube"
                  className="w-10 h-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn1.codashop.com/S/content/social-media-logo/36/socmed-instagram-H36.png"
                  alt="Instagram"
                  className="w-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn1.codashop.com/S/content/social-media-logo/36/socmed-tiktok-H36.png"
                  alt="TikTok"
                  className="w-8"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#eae8f6]  text-sm pt-4 pb-8">
        <p className="text-center text-gray-500 mb-4">
          ©Hak Cipta Coda Payments
        </p>

        <div className="flex justify-center text-black space-x-2 px-2 flex-wrap text-sm  sm:flex-row">
          <a href="#" className=" hover:underline">
            Pemasaran dan Kemitraan .
          </a>
          <a href="#" className=" hover:underline">
            Untuk Penerbit Game .
          </a>
          <a href="#" className=" hover:underline">
            Syarat & Ketentuan .
          </a>
          <a href="#" className="hover:underline">
            Kebijakan Privasi .
          </a>
          <a href="#" className=" hover:underline">
            Bounty bug
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
