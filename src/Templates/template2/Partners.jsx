import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Partners = () => {
  return (
    <Swiper
      loop={true}
      freeMode={true}
      spaceBetween={0}
      slidesPerView={5}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={2000}
      modules={[Autoplay]}
      className="myPartnerSwiper relative z-[3] w-full h-full my-2 w-[70%]"
    >
      {["1", "3", "2", "4", "5", "6"].map((text, key) => (
        <SwiperSlide
          key={key}
          className=""
        >
          <img
            src={`/src/assets/template2/partners/${text}.png`}
            alt={text}
            className="blacknwhite w-[130px] h-auto"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Partners;
