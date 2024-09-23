import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

const ThumbsGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Autoplay, FreeMode, Thumbs]}
        className="absolute top-0 left-0 !w-full !h-full"
      >
        {["4", "5", "1", "3", "2"].map((text, key) => (
          <SwiperSlide key={key}>
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(/src/assets/template3/swiper/${text}.jpg)`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper w-full h-[20%] absolute bottom-0 left-0 bg-black cursor-pointer"
      >
        {["4", "5", "1", "3", "2"].map((text, key) => (
          <SwiperSlide key={key}>
            <div
              className="bg-center bg-no-repeat bg-cover w-full h-full absolute top-0 left-0"
              style={{
                backgroundImage: `url(/src/assets/template3/swiper/${text}.jpg)`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbsGallery;
