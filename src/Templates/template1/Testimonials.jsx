import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <Swiper
        loop={true}
        freeMode={true}
        spaceBetween={24}
        slidesPerView={3}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="myPartnerSwiper relative w-full h-[320px] z-[8] mb-24"
      >
        {["1", "2", "3", "4", "5", "6", "7", "8"].map((text, key) => (
          <SwiperSlide
            key={key}
            className="px-[1.7rem] py-[2rem] bg-white rounded-xl border-2 flex flex-col justify-between"
          >
            <p
              className="ey_ text-xl text-[#191919] pointer-events-none"
              dangerouslySetInnerHTML={{
                __html: t(`sovorir.testimonials.${text}.paragraph`),
              }}
            ></p>
            <div className="flex items-center gap-4">
              <div className="border border-primary-sovorir rounded-[50vw] p-1">
                <div
                  className="w-[45px] h-[45px] bg-cover bg-center bg-no-repeat rounded-[50vw]"
                  style={{
                    backgroundImage: `url(/src/components/sovorir/assets/${t(
                      `sovorir.testimonials.${text}.g`
                    )}.png)`,
                  }}
                ></div>
              </div>
              <p className="ey_ text-lg pointer-events-none">
                {t(`sovorir.testimonials.${text}.name`)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-primary-sovorir opacity-54 blur-[8rem] w-[10rem] h-[10rem] absolute top-0 right-0 z-[7]"></div>
    </div>
  );
};

export default Testimonials;
