import React from "react";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const AboutTwo = () => {
  const { t } = useTranslation();
  return (
    <div className="relative px-[5%] z-[1] mb-48">
      <div className="max-w-[1680px] mx-auto my-0">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            ease: "easeIn",
            x: { duration: 0.7, delay: 0.5 },
            opacity: { delay: 0.7 },
          }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          className="text-5xl leading-[1.6] max-w-[1200px] mb-14"
        >
          <span className="!font-bridgens">
            Sovorir <span className="text-primary-sovorir">IT </span>
          </span>
          {t("sovorir.about_two.paragraph")}
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            ease: "easeIn",
            y: { duration: 0.5, delay: 0.3 },
            opacity: { delay: 0.5 },
          }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className="grid grid-cols-[1fr_1fr] gap-[2rem]"
        >
          {["1", "2", "3", "4"].map((text, key) => (
            <li key={key} className="flex items-center gap-[1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="82px"
                height="82px"
                viewBox="0 0 29 29"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                role="img"
              >
                <g mask="url(#mask0_1176_132)">
                  <path
                    d="M11.5387 21.75L4.65118 14.8625L6.37306 13.1406L11.5387 18.3062L22.6251 7.21979L24.347 8.94166L11.5387 21.75Z"
                    fill="#7D2BCE"
                  ></path>
                </g>
              </svg>
              <p className="text-2xl text-center">
                {t(`sovorir.about_two.checks.${text}`)}
              </p>
            </li>
          ))}
        </motion.ul>
        <button className="aboutmorebtn group mt-14 py-5 px-16 text-xl rounded-[.5rem]">
          <div className="relative overflow-hidden font-[500]">
            <div className="text-white group-hover:translate-y-[-110%] transition duration-300">
              {t("sovorir.about_two.learnmore")}
            </div>
            <div className="text-primary-sovorir translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
              {t("sovorir.about_two.learnmore")}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutTwo;
