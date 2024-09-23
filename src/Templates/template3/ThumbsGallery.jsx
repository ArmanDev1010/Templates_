import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import { motion } from "framer-motion";

const ThumbsGallery = ({ codename }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="w-full h-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Autoplay, FreeMode, Thumbs]}
        className="absolute z-[1] top-0 left-0 w-full h-full"
      >
        {["4", "5", "3", "2", "1"].map((text, key) => (
          <SwiperSlide key={key}>
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(/src/assets/template3/swiper/${codename}/${text}.jpg)`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-[80%]"></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          ease: "easeIn",
          y: { duration: 0.5, delay: 1.2 },
          opacity: { delay: 1.2 },
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className="relative z-[2] !w-full !h-[20%]"
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="mySwiper w-full h-full bg-black cursor-pointer"
        >
          {["4", "5", "3", "2", "1"].map((text, key) => (
            <SwiperSlide key={key}>
              <div
                className="bg-center bg-no-repeat bg-cover w-full h-full absolute top-0 left-0"
                style={{
                  backgroundImage: `url(/src/assets/template3/swiper/${codename}/${text}.jpg)`,
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default ThumbsGallery;
