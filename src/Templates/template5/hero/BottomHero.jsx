import React from "react";
import { useTranslation } from "react-i18next";

import { IoLocationSharp } from "react-icons/io5";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "linear", delayChildren: 1, staggerChildren: 0.15 },
  },
};

const item = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35 },
  },
};

const BottomHero = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <div className="absolute left-[64px] bottom-[37px] z-[2]">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex gap-28 items-center"
      >
        {["socials", "location", "phone",].map((text, key) => (
          <motion.li key={key} variants={item} className="">
            {text == "socials" ? (
              <ul className="flex gap-5">
                {["fb", "In", "be", "pi"].map((text, key) => (
                  <li
                    key={key}
                    className="capitalize font-[600] text-[15px] cursor-pointer transition-opacity duration-200 hover:opacity-70"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            ) : text == "location" ? (
              <div
                className="rounded-full py-1.5 px-5 border border-white cursor-pointer flex items-center gap-3 font-[500]
            bg-white/40 ring-1 ring-black/5 transition-bg duration-300 hover:bg-white/50"
              >
                <IoLocationSharp className="text-[17px]" />
                <span className="capitalize">
                  {t(`${codename}.hero.location`)}
                </span>
              </div>
            ) : (
              <p className="font-[600] tracking-[1px] text-[15px] cursor-pointer transition-opacity duration-200 hover:opacity-70">
                {t(`${codename}.hero.${text}`)}
              </p>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default BottomHero;
