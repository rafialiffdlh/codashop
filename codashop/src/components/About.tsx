import React from "react";

export default function About() {
  return (
    <div className="bg-[#280032] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        CODASHOP INDONESIA
      </h1>
      <h3 className="text-2xl font-semibold text-center mb-6">
        Codashop: Website top-up terbesar, tercepat dan terpercaya di Indonesia
      </h3>
      <p className="text-lg text-center mb-10">
        Setiap bulannya, jutaan gamers menggunakan Codashop untuk melakukan
        pembelian kredit game dengan lancar: tanpa registrasi ataupun log-in,
        dan kredit permainan akan ditambahkan secara instan. Top-up Mobile
        Legends, Free Fire, Ragnarok M, dan berbagai game lainnya!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg shadow-lg flex text-xs items-start">
          <img
            src="https://cdn1.codashop.com/S/content/mobile/images/reskin/usp-icons/easy_and_fast_portal.png"
            alt="Bayar dalam hitungan detik"
            className="sm:h-20 sm:w-16 md:h-9 md:w-12 mr-4 mt-2"
          />
          <div>
            <h4 className="text-sm font-semibold mb-2">
              Bayar dalam hitungan detik
            </h4>
            <p>
              Hanya dibutuhkan beberapa detik saja untuk menyelesaikan
              pembayaran di Codashop karena situs kami berfungsi dengan baik dan
              mudah untuk digunakan.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg text-xs flex items-start">
          <img
            src="https://cdn1.codashop.com/S/content/mobile/images/reskin/usp-icons/instant_delivery_portal.png"
            alt="Pengiriman instan"
            className="h-20 w-24 sm:h-24 sm:w-24 md:h-12 md:w-12 mr-4 mt-2"
          />
          <div>
            <h4 className="text-sm  font-semibold mb-2">Pengiriman instan</h4>
            <p>
              Ketika kamu melakukan top-up di Codashop, item atau barang yang
              kamu beli akan selalu dikirim ke akun kamu secara instan dan
              cepat, tanpa tertunda.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg text-xs flex items-start">
          <img
            src="https://cdn1.codashop.com/S/content/mobile/images/reskin/usp-icons/payment_method_portal.png"
            alt="Metode pembayaran terbaik"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-12 md:w-20 mr-4 mt-2"
          />
          <div>
            <h4 className="text-sm  font-semibold mb-2">
              Metode pembayaran terbaik
            </h4>
            <p>
              Kami menawarkan begitu banyak pilihan pembayaran mulai dari potong
              pulsa, e-wallet, bank transfer, dan pembayaran di mini market
              terdekat.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg flex text-xs items-start">
          <img
            src="https://cdn1.codashop.com/S/content/mobile/images/reskin/usp-icons/customer_support_portal.png"
            alt="Layanan Pelanggan Cepat & Ramah"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-12 md:w-20 mr-4 mt-2"
          />
          <div>
            <h4 className="text-sm  font-semibold mb-2">
              Layanan Pelanggan Cepat & Ramah
            </h4>
            <p>
              Tim CS terbaik kami selalu siap membantumu kapanpun, di manapun.{" "}
              <a href="#" className="text-blue-500 underline">
                Hubungi kami!
              </a>
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg text-xs flex items-start">
          <img
            src="https://cdn1.codashop.com/S/content/mobile/images/reskin/usp-icons/promotion_portal.png"
            alt="Promosi-promosi menarik"
            className="h-28 w-28 sm:h-32 sm:w-32 md:h-12 md:w-20 mr-4 mt-2"
          />
          <div>
            <h4 className="text-sm  font-semibold mb-2">
              Promosi-promosi menarik
            </h4>
            <p>
              Penggemar game dapat bergantung pada Codashop karena kami
              memberikan penawaran menarik, diskon dan kode item dari promosi
              game yang disukai kamu.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg text-xs flex items-start">
          <img
            src="https://cdn1.codashop.com/S/content/mobile/images/reskin/usp-icons/referral_usp.png"
            alt="Dapatkan Lebih Banyak Keuntungan"
            className="h-28 w-28 sm:h-32 sm:w-32 md:h-12 md:w-20 mr-4 mt-2"
          />
          <div>
            <h4 className="text-sm  font-semibold mb-2">
              Dapatkan Lebih Banyak Keuntungan
            </h4>
            <p>
              Dapatkan hadiah dengan berbagi cinta! Undang teman dan dapatkan
              diskon 2500 IDR setelah temanmu melakukan pembelian pertama produk
              Topup!{" "}
              <a href="#" className="text-blue-500 underline">
                Pelajari lebih lanjut.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
