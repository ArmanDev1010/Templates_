import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const SwiperHero = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        ease: "easeIn",
        y: { duration: 0.6, delay: 1.7 },
        opacity: { delay: 1.9 },
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="w-full h-[450px] my-16"
    >
      <Swiper
        slidesPerView={"4"}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
        pagination={true}
        modules={[Autoplay]}
        className="mySwiperHome relative w-full h-full"
      >
        {["1", "2", "3", "4", "5"].map((text, key) => (
          <SwiperSlide
            key={key}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-20 border-[#e3e3e3] border-4 hover:border-[var(--primary-color)]"
            style={{
              "--primary-color": t(`${codename}.paints.primary`),
            }}
          >
            <div
              className="wrap w-full h-full bg-[#e3e3e3] bg-cover bg-center bg-no-repeat transition-bg duration-300 ease-in-out group-hover:scale-[1.1]"
              style={{
                backgroundImage: `url(/src/assets/template1/carousel/${text}.jpg)`,
              }}
            >
              <div
                className="absolute bottom-0 pl-5 bg-white h-[90px] py-7 transition duration-300 w-full group-hover:bg-[var(--primary-color)] group-hover:-translate-y-5"
                style={{
                  "--primary-color": t(
                    `${codename}.paints.secondary`
                  ),
                }}
              >
                <div className="relative overflow-hidden text-center text-2xl font-[500]">
                  <div className="group-hover:translate-y-[-110%] transition duration-300">
                    {t(`${codename}.hero.carousel.${text}`)}
                  </div>
                  <div className="text-white translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                    {t(`regulars.button.learn`)}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default SwiperHero;
