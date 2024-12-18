import React from "react";
import { useTranslation } from "react-i18next";

import { LanguageSwitcherOnHover } from "../../../components";

const Navbar = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <div className="relative z-[2] flex justify-between items-center">
      <div className="flex items-center gap-36" style={{ padding: "30px 0" }}>
        <div className="flex items-center gap-4 cursor-pointer">
          <img
            src={`/src/assets/logos/${codename}.png`}
            alt={codename}
            className="w-[400px] cursor-pointer"
            // style={{ position: "absolute", top: "-40px" }}
          />
          {/* <p className="font-neogrotesk text-3xl font-[500] tracking-[3px]">
            {t(`${codename}.hero.logo`)}
          </p> */}
        </div>
        <ul
          className="flex items-center gap-12"
          // style={{ paddingLeft: "144px" }}
          style={{ paddingLeft: "50px" }}
        >
          {["projects", "about", "contact_short"].map((text, key) => (
            <li
              key={key}
              className="text-[17px] font-[600] cursor-pointer translate duration-200 hover:opacity-70"
            >
              {t(`regulars.links.${text}`)}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-24">
        <LanguageSwitcherOnHover />
        <div className="group bg-transparent border-[1px] cursor-pointer min-w-[220px] py-3 transition duration-200 hover:bg-white">
          <div className="relative overflow-hidden text-center text-[16px] font-[600]">
            <div className="group-hover:translate-y-[-110%] transition duration-300">
              {t(`regulars.button.contact`)}
            </div>
            <div className="text-black translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
              {t(`regulars.button.contact`)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
