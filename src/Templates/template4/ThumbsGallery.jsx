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
              <div className="absolute z-[3] w-full bottom-12 flex items-center justify-between px-12">
                <p className="relative text-3xl font-[500] capitalize text-white pointer-events-none before:content-[''] before:absolute before:bg-white before:w-[2px] before:h-[180%] before:top-1/2 before:-translate-y-1/2 before:-left-5">
                  {t(`${codename}.hero.swiper.${text}.bottom`)}
                </p>
                <div
                  className="group bg-[var(--secondary-color)] text-white cursor-pointer w-[250px] py-5 rounded-full transition duration-300 hover:bg-white hover:-translate-y-3 hover:-translate-x-3"
                  style={{
                    "--secondary-color": t(`${codename}.paints.secondary`),
                  }}
                >
                  <div className="relative overflow-hidden text-center text-xl font-[500]">
                    <div className="group-hover:translate-y-[-110%] transition duration-300">
                      {t(`regulars.button.see_more`)}
                    </div>
                    <div className="text-black translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                      {t(`regulars.button.see_more`)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero_fade_black"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="absolute top-12 left-12 w-[350px] h-[170px] cursor-pointer rounded-[30px] hover:-translate-y-2 hover:translate-x-2 duration-200 ease"
      >
        {["1", "2", "3", "4", "5"].map((text, key) => (
          <SwiperSlide key={key} className="group p-[1rem] bg-white flex gap-2">
            <div className="relative w-1/2 h-full">
              <p className="text-3xl font-[500] capitalize pl-2">
                {t(`${codename}.hero.swiper.${text}.top`)}
              </p>
              <div
                className="absolute bottom-0 left-0 bg-[var(--primary-color)] w-[55px] h-[55px] rounded-full text-white text-4xl duration-200 ease group-hover:bg-[var(--secondary-color)] group-hover:-translate-y-2 group-hover:translate-x-2 flex justify-center items-center rotate-[-135deg]"
                style={{
                  "--primary-color": t(`${codename}.paints.primary`),
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
    </>
  );
};

export default ThumbsGallery;
