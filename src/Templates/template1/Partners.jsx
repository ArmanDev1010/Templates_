import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Partners = () => {
  return (
    <div>
      <Swiper
        loop={true}
        freeMode={true}
        spaceBetween={0}
        slidesPerView={5}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay]}
        className="myPartnerSwiper bg-white relative z-[3] w-full h-full border-y-[3px] border-y-black transform rotate-[-7deg] translate-y-[65px]"
      >
        {[
          "zinapah",
          "idbank",
          "source",
          "256hub",
          "idram",
          "ucom",
          "unitedns",
          "inecobank",
        ].map((text, key) => (
          <SwiperSlide
            key={key}
            className="py-[10px] flex justify-center transition duration-300 hover:bg-[#E5E5E5]"
          >
            <img
              src={`/src/components/sovorir/assets/partners/${text}.png`}
              alt={text}
              className="p w-[210px] h-auto"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        freeMode={true}
        spaceBetween={0}
        slidesPerView={5}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={4000}
        modules={[Autoplay]}
        className="myPartnerSwiper bg-white relative z-[2] w-full h-full border-y-[3px] border-y-black transform rotate-[7deg] -translate-y-[50px]"
      >
        {[
          "idram",
          "ucom",
          "idbank",
          "inecobank",
          "zinapah",
          "unitedns",
          "source",
          "256hub",
        ].map((text, key) => (
          <SwiperSlide
            key={key}
            className="py-[10px] flex justify-center transition duration-300 hover:bg-[#E5E5E5]"
          >
            <img
              src={`/src/components/sovorir/assets/partners/${text}.png`}
              alt={text}
              className="p w-[210px] h-auto"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
