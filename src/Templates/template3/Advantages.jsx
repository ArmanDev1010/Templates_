import React from "react";
import { useTranslation } from "react-i18next";

const Advantages = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <div className="px-[2.4rem] py-[3rem]">
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
  );
};

export default Advantages;
