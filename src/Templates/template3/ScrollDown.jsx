import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const ScrollDown = ({ codename }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        ease: "easeIn",
        x: { duration: 0.5, delay: 2 },
        opacity: { delay: 2 },
      }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
      className="p-4 w-full h-full"
    >
      <Swiper
        direction={"vertical"}
        loop={true}
        freeMode={true}
        spaceBetween={16}
        slidesPerView={2}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="scrollDownSwiper w-full h-full"
      >
        {["1", "2", "3", "4", "5"].map((text, key) => (
          <SwiperSlide
            key={key}
            className="group relative overflow-hidden rounded-[40px] cursor-pointer"
          >
            <div className="w-full h-full transition-bg duration-300 ease-in-out group-hover:scale-[1.1] bg-gray-300">
              <div
                className="absolute top-12 right-6 rounded-[50px] w-[180px] h-[180px] bg-cover bg-center bg-no-repeat transition duration-300 group-hover:translate-y-5 group-hover:-translate-x-5"
                style={{
                  backgroundImage: `url(/src/assets/template3/swiper_down/${text}.jpg)`,
                }}
              ></div>
              <h3 className="absolute top-10 left-8 text-4xl font-[500] transition duration-300 group-hover:translate-y-5 group-hover:translate-x-5">
                {t(`${codename}.hero.right.list.${text}`)}
              </h3>
              <div className="absolute bottom-7 left-5 bg-[#000] text-white w-[250px] py-5 rounded-full transition duration-300 group-hover:bg-white group-hover:-translate-y-5 group-hover:translate-x-5">
                <div className="relative overflow-hidden text-center text-xl font-[500]">
                  <div className="group-hover:translate-y-[-110%] transition duration-300">
                    {t(`regulars.button.learn_eng`)}
                  </div>
                  <div className="text-black translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                    {t(`regulars.button.learn_eng`)}
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

export default ScrollDown;
