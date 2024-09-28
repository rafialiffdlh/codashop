"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <div className="bg-custom">
      <div className="relative w-full h-[200px] lg:h-[250px]  flex flex-col justify-center items-center">
        <Swiper
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://cdn1.codashop.com/S/content/common/images/promos/July24/MCM-165_Indonesia.jpg"
                alt="Promo 1"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://cdn1.codashop.com/S/content/common/images/promos/Sept24/Linkaja-Rewards-730x280_ID_2.jpg"
                alt="Promo 2"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://cdn1.codashop.com/S/content/common/images/promos/Sept24/MCM-213_Indonesia.jpg"
                alt="Promo 3"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://cdn1.codashop.com/S/content/common/images/promos/Sept24/ID_OVO_Cashback_730x280.jpg"
                alt="Promo 4"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://cdn1.codashop.com/S/content/common/images/promos/Sept24/ID-Genshin-Impactver_5.jpg"
                alt="Promo 4"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://cdn1.codashop.com/S/content/common/images/promos/Sept24/MLBB_brody_paquito_ID.jpg"
                alt="Promo 5"
                className="object-contain w-full h-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination-custom py-2 flex justify-center mt-2 lg:mt-4">
          {Array(2)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full mx-1 opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
