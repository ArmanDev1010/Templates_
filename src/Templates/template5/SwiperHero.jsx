import React, { useCallback, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const SwiperHero = ({ codename }) => {
  const { t } = useTranslation();

  const sliderRef = useRef(null);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[1] bg-gray-500">
      <Swiper
        slidesPerView={"1"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        pagination={true}
        modules={[Autoplay]}
        ref={sliderRef}
        className="relative w-full h-full"
      >
        {["1", "2", "3", "4"].map((text, key) => (
          <SwiperSlide
            key={key}
            className="w-full h-full"
          >
            <div className="absolute top-[40%] -translate-y-[40%] left-[16%] -translate-x-[16%]">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  ease: "easeIn",
                  y: { duration: 0.4, delay: 0.3 },
                  opacity: { delay: 0.3 },
                }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                className="!font-montserrateng text-[3.7rem] leading-[1.4] font-[600] capitalize whitespace-pre mb-7 pointer-events-none"
              >
                {t(`${codename}.hero.swiper.${text}`)}
              </motion.p>
              <div
                className="linebtn relative inline-block pl-4 ml-[1px] text-lg cursor-pointer font-[500]
                before:content-[''] before:block before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-[8px] before:-translate-y-1/2 before:bg-white
                after:content-[''] after:block after:absolute after:top-1/2 after:left-[calc(100%+9px)] after:h-[1px] after:w-[56px] after:-translate-y-1/2 after:bg-white
                hover:after:w-[8px] hover:before:w-[56px] hover:pl-[64px]"
                style={{
                  transition:
                    "padding-left .5s ease, right .5s ease, opacity .5s ease",
                }}
              >
                {t("regulars.button.see_more")}
              </div>
            </div>
            <div
              className="w-[85%] h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(/src/assets/template5/swiper/${codename}/${text}.jpg)`,
              }}
            ></div>
            <div
              className="group cursor-pointer absolute z-[1] top-0 right-0 w-[15%] h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(/src/assets/template5/swiper/${codename}/${
                  key < 3 ? key + 2 : 1
                }.jpg)`,
              }}
              onClick={handleNext}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  ease: "easeIn",
                  opacity: { delay: 1 },
                }}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                className="!font-montserrateng absolute bottom-[-20px] left-1/2 w-[400px] h-fit 
              -rotate-90 origin-[left_center]"
              >
                <p className="mb-3 tracking-[2px]">Next project</p>
                <p className="borderText tracking-[3px] group-hover:text-white text-[48px] font-[700] capitalize leading-[48px] transform-none">
                  {t(`${codename}.hero.swiper.${key < 3 ? key + 2 : 1}`)}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHero;
