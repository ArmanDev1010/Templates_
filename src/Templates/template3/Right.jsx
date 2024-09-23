import React from "react";

import { useTranslation } from "react-i18next";

const Right = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <div className="w-[25%] h-full">
      <div
        className="w-full h-[80%] px-[2.4rem] py-[3rem]"
        style={{
          "--primary-color": t(`${codename}.paints.primary`),
          background: `radial-gradient(110.56% 100% at 50% 0%, #FFF 61.77%, ${t(
            `${codename}.paints.thirdly`
          )} 150%)`,
        }}
      >
        <h2 className="text-2xl font-[500] pointer-events-none">
          {t(`${codename}.hero.right.title`)}
        </h2>
        <ul className="flex flex-col justify-evenly h-full pointer-events-none">
          {["1", "2", "3"].map((text, key) => (
            <li
              key={key}
              className={`${text !== "3" ? "pb-[2rem] border-b-2" : null}`}
            >
              <h3 className="text-xl capitalize mb-7">
                <span className="font-sans">0{text}. </span>
                {t(`${codename}.hero.right.list.${text}.title`)}
              </h3>
              <p className="text-[#3d3d3d]">
                {t(`${codename}.hero.right.list.${text}.paragraph`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[20%]">
        <button
          className="group w-full h-full capitilize border-[4px] bg-white border-[#e3e3e3] text-[25px] font-[500] 
              transition-[border] duartion-300 hover:border-[var(--secondary-color)]"
          style={{
            "--secondary-color": t(`${codename}.paints.secondary`),
          }}
        >
          <div className="relative overflow-hidden">
            <div className="group-hover:translate-y-[-110%] transition duration-300 flex items-center justify-center gap-4">
              <p>{t(`regulars.button.see_projects`)}</p>
              <img
                src={"/src/assets/arrow.png"}
                alt="arrow"
                className="w-[75px] rotate-[180deg]"
              />
            </div>
            <div className="text-black translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 flex items-center justify-center gap-4 absolute top-0 bottom-0 left-0 right-0">
              <p>{t(`regulars.button.see_projects`)}</p>
              <img
                src={"/src/assets/arrow.png"}
                alt="arrow"
                className="w-[75px] rotate-[180deg]"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Right;
