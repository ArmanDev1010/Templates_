import React from "react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Projects = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-[40px]">
      <p className="!font-montserrateng px-[64px] text-[46px] uppercase font-[600] pointer-events-none">
        {t("regulars.links.our_projects")}
      </p>
    </div>
  );
};

export default Projects;
