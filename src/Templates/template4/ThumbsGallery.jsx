import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import { useTranslation } from "react-i18next";

import { GoArrowDown } from "react-icons/go";

import { motion } from "framer-motion";

const ThumbsGallery = ({ codename }) => {
  const { t } = useTranslation();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Autoplay, FreeMode, Thumbs]}
        className="w-full h-full"
      >
        {["1", "2", "3", "4", "5"].map((text, key) => (
          <SwiperSlide key={key}>
            <div
              className="relative w-full h-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(/src/assets/template4/swiper/${codename}/${text}.jpg)`,
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  ease: "easeIn",
                  y: { duration: 0.4, delay: 2 },
                  opacity: { delay: 2 },
                }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
                className="absolute z-[3] w-full bottom-12 flex items-center justify-between gap-16 px-12"
              >
                <p className="relative text-2xl font-[500] capitalize text-white pointer-events-none before:content-[''] before:absolute before:bg-white before:w-[2px] before:h-[140%] before:top-1/2 before:-translate-y-1/2 before:-left-5">
                  {t(`${codename}.hero.swiper.${text}.bottom`)}
                </p>
                <div
                  className="group bg-white text-black border-2 cursor-pointer min-w-[250px] py-5 rounded-full transition duration-300 hover:bg-[var(--secondary-color)] hover:-translate-y-3 hover:-translate-x-3"
                  style={{
                    "--secondary-color": t(`${codename}.paints.secondary`),
                  }}
                >
                  <div className="relative overflow-hidden text-center text-xl font-[500]">
                    <div className="group-hover:translate-y-[-110%] transition duration-300">
                      {t(`regulars.button.see_more`)}
                    </div>
                    <div className="text-white translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                      {t(`regulars.button.see_more`)}
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="hero_fade_black"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          ease: "ease",
          y: { duration: 0.4, delay: 2 },
          x: { duration: 0.4, delay: 2 },
          opacity: { delay: 2 },
        }}
        variants={{
          visible: { opacity: 1, y: 0, x: 0 },
          hidden: { opacity: 0, y: -50, x: -100 },
        }}
        className="absolute top-12 left-12 z-[3]"
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className=" w-[350px] h-[170px] cursor-pointer rounded-[30px] hover:-translate-y-2 hover:translate-x-2 duration-200 ease"
        >
          {["1", "2", "3", "4", "5"].map((text, key) => (
            <SwiperSlide
              key={key}
              className="group p-[1rem] bg-white flex gap-2"
            >
              <div className="relative w-1/2 h-full">
                <p className="text-[25px] leading-[1.3] font-[500] capitalize px-2">
                  {t(`${codename}.hero.swiper.${text}.top`)}
                </p>
                <div
                  className="absolute bottom-0 left-0 bg-[var(--secondary-color)] w-[55px] h-[55px] rounded-full text-white text-4xl duration-200 ease group-hover:-translate-y-2 group-hover:translate-x-2 flex justify-center items-center rotate-[-135deg]"
                  style={{
                    "--secondary-color": t(`${codename}.paints.secondary`),
                  }}
                >
                  <GoArrowDown />
                </div>
              </div>
              <div
                className="bg-center bg-no-repeat bg-cover w-1/2 h-full rounded-[20px]"
                style={{
                  backgroundImage: `url(/src/assets/template4/swiper/${codename}/${text}.jpg)`,
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};

export default ThumbsGallery;
