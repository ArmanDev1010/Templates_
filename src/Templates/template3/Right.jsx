import React from "react";

import { useTranslation } from "react-i18next";

import { Advantages, ScrollDown } from "./";

const Right = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <div className="w-[25%] h-full overflow-hidden">
      <div className="w-full h-[80%] bg-white">
        {/* <Advantages codename={codename} /> */}
        <ScrollDown codename={codename} />
      </div>
      <div className="w-full h-[20%]">
        <button className="relative group w-full h-full capitilize border-[2px] bg-white border-[#e3e3e3] text-[32px] font-[500]">
          <div className="bg-white flex items-center justify-center gap-4">
            <p>{t(`regulars.button.see_projects_eng`)}</p>
            <img
              src={"/src/assets/arrow.png"}
              alt="arrow"
              className="w-[75px] rotate-[180deg]"
            />
          </div>
          <div
            className="bg-[var(--primary-color)] absolute inset-0 w-full h-full duration-300 -translate-x-[101%] bg-primary group-hover:translate-x-0 ease flex justify-center items-center"
            style={{
              "--primary-color": t(`${codename}.paints.primary`),
            }}
          >
            <img
              src={"/src/assets/arrow_White.png"}
              alt="arrow"
              className="w-[100px] rotate-[180deg]"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Right;
