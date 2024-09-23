import React from "react";
import ThumbsGallery from "./ThumbsGallery";
import { useTranslation } from "react-i18next";

const Left = ({ codename }) => {
  const { t } = useTranslation();
  return (
    <div className="relative w-[75%] h-full">
      <div className="relative z-[2] px-[5%]">
        <img
          src={`/src/assets/template3/logos/${codename}.png`}
          alt="logo"
          className="w-[130px]"
        />
      </div>
      <div className="text-white absolute z-[3] px-[5%] top-[40%] transform -translate-y-[40%]">
        <h1 className="text-8xl capitalize font-[400] mb-10">
          {t(`${codename}.hero.title`)}
        </h1>
        <h1 className="text-2xl capitalize">
          {t(`${codename}.hero.paragraph`)}
        </h1>
      </div>
      <ThumbsGallery />
    </div>
  );
};

export default Left;
