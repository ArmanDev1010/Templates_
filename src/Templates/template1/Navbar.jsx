import React from "react";

import { useTranslation } from "react-i18next";
import LanguageSwitcherWithArrow from "../../components/LanguageSwitcherWithArrow";

const Navbar = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <div className="relative px-[5%] mb-[1rem]">
      <div className="max-w-[1680px] mx-auto my-0">
        <div className="flex items-center justify-between py-[40px]">
          <img
            src={`/src/assets/logos/${codename}.png`}
            alt="logo"
            className="w-[160px] cursor-pointer"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex gap-14">
              {["about", "services", "contact"].map((text, key) => (
                <li
                  key={key}
                  className="text-xl font-[500] cursor-pointer translate duration-300 hover:opacity-50"
                >
                  {t(`regulars.links.${text}`)}
                </li>
              ))}
            </ul>
          </div>
          <LanguageSwitcherWithArrow />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
