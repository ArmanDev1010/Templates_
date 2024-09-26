import React from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcherWithArrow from "../../components/LanguageSwitcherWithArrow";

import { SwiperHero } from "./";

import { motion } from "framer-motion";

const Left = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <div className="w-1/2 h-full pt-5 px-10 flex flex-col overflow-hidden">
      <div className="flex-[0_1_auto]">
        <div className="flex justify-between items-center mb-5">
          <img
            src={`/src/assets/template4/logos/${codename}.png`}
            alt="logo"
            style={{ width: "80px", height: "auto" }}
            className="cursor-pointer"
          />
          <ul className="flex items-center gap-12">
            {["portfolio", "courses", "contact_short"].map((text, key) => (
              <li
                key={key}
                className="text-xl font-[500] cursor-pointer translate duration-300 hover:opacity-50"
              >
                {t(`regulars.links.${text}`)}
              </li>
            ))}
            <LanguageSwitcherWithArrow />
          </ul>
        </div>
        <div className="relative border-b-2 border-gray-200 pb-8 mb-8 pointer-events-none">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeIn",
              x: { duration: 0.4, delay: 0.2 },
              opacity: { delay: 0.2 },
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            className="clip_top_bottom text-[4.6rem] leading-[1.5] font-[600] mb-7 capitalize"
          >
            {t(`${codename}.hero.title`)}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeIn",
              x: { duration: 0.4, delay: 0.7 },
              opacity: { delay: 0.7 },
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            className="text-[24px] text-gray-500 font-[500]"
          >
            {t(`${codename}.hero.paragraph`)}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          ease: "easeIn",
          y: { duration: 0.5, delay: 1.2 },
          opacity: { delay: 1.2 },
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className="w-full h-full flex-[1_1_auto] flex flex-col gap-8"
      >
        <h3 className="clip_top_bottom leading-[1.3] relative left-5 text-3xl font-[500] pointer-events-none before:content-[''] before:absolute before:bg-black before:w-[2px] before:h-[150%] before:top-1/2 before:-translate-y-1/2 before:-left-5">
          {t(`regulars.links.our_courses`)}
        </h3>
        <SwiperHero codename={codename} />
      </motion.div>
    </div>
  );
};

export default Left;
