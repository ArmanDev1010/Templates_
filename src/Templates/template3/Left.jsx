import React from "react";

import ThumbsGallery from "./ThumbsGallery";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const Left = ({ codename }) => {
  const { t } = useTranslation();
  return (
    <div className="relative w-[75%] h-full">
      <div className="absolute z-[2] px-[5%]">
        <img
          src={`/src/assets/logos/${codename}.png`}
          alt="logo"
          className="w-[140px]"
        />
      </div>
      <div className="text-white absolute z-[3] px-[5%] top-[40%] transform -translate-y-[40%]">
        <motion.h1
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
          className="text-8xl capitalize font-[400] mb-10"
        >
          {t(`${codename}.hero.title`)}
        </motion.h1>
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
          className="text-2xl capitalize"
        >
          {t(`${codename}.hero.paragraph`)}
        </motion.p>
      </div>
      <ThumbsGallery codename={codename} />
    </div>
  );
};

export default Left;
