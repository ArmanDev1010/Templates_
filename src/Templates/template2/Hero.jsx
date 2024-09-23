import React from "react";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import Partners from "./Partners";

const Hero = ({ codename }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative px-[5%] z-[1]">
        <div className="max-w-[1680px] mx-auto my-0">
          <div className="text-center">
            <motion.h2
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
              className="clip_top_bottom text-[4.7rem] leading-[1.6] font-[600] mb-6 whitespace-pre capitalize"
              dangerouslySetInnerHTML={{
                __html: t(`${codename}.hero.title`),
              }}
            ></motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                ease: "easeIn",
                y: { duration: 0.6, delay: 0.59 },
                opacity: { delay: 0.9 },
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              className="text-[23px] text-gray-500 font-[500] mb-8 capitalize"
            >
              {t(`${codename}.hero.paragraph`)}
            </motion.p>
            <div className="flex justify-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  ease: "easeIn",
                  y: { duration: 0.8, delay: 1 },
                  opacity: { delay: 1.4 },
                }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
                className="relative flex flex-col justify-center items-center w-[20rem] h-[5rem]"
              >
                <button
                  className="group relative z-[1] bg-white w-full h-full capitilize 
                    rounded-[0.5rem] border-[3px] border-[#e3e3e3] text-[23px] font-[500] bg-no-rpeeat 
                  hover:translate-y-[0.5rem] hover:translate-x-[0.5rem] hover:border-[var(--primary-color)]"
                  style={{
                    "--secondary-color": t(
                      `template1.${codename}.paints.secondary`
                    ),
                    "--primary-color": t(
                      `template1.${codename}.paints.primary`
                    ),
                    background: `radial-gradient(110.56% 100% at 50% 0%, #FFF 61.77%, ${t(
                      `template1.${codename}.paints.secondary`
                    )} 150%)`,
                    transition:
                      "filter .2s cubic-bezier(.77,0,.175,1), border .2s cubic-bezier(.77,0,.175,1), transform .2s",
                  }}
                >
                  <div className="relative bg-white rounded-[0.5] overflow-hidden">
                    <div className="group-hover:translate-y-[-110%] transition duration-300">
                      {t(`regulars.button.learn`)}
                    </div>
                    <div className="text-black translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute z-[3] top-0 bottom-0 left-0 right-0">
                      {t(`regulars.button.learn`)}
                    </div>
                  </div>
                </button>
                <div
                  className="absolute w-full h-full z-[-1] inset-[auto_-.5rem_-.5rem_auto] bg-[var(--primary-color)] rounded-[0.5rem]"
                  style={{
                    "--primary-color": t(`${codename}.paints.primary`),
                  }}
                ></div>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                ease: "easeIn",
                y: { duration: 1, delay: 1.4 },
                opacity: { delay: 1.8 },
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              className="blacknwhite relative flex flex-col justify-center my-14"
            >
              <Partners codename={codename} />
              <div className="flex-col justify-center items-center w-full h-auto flex absolute z-[2] top-0 left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 1440 2"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M0 1H1440"
                    stroke="url(#paint0_linear_1879_97)"
                    strokeOpacity="0.36"
                    strokeDasharray="16.67 16.67"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1879_97"
                      x1="0"
                      y1="73.5"
                      x2="1440"
                      y2="73.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="black" stopOpacity="0"></stop>
                      <stop offset="0.296419" stopColor="black"></stop>
                      <stop offset="0.710225" stopColor="black"></stop>
                      <stop offset="1" stopColor="black" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex-col justify-center items-center w-full h-auto flex absolute z-[2] bottom-0 left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 1440 2"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M0 1H1440"
                    stroke="url(#paint0_linear_1879_97)"
                    strokeOpacity="0.36"
                    strokeDasharray="16.67 16.67"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1879_97"
                      x1="0"
                      y1="73.5"
                      x2="1440"
                      y2="73.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="black" stopOpacity="0"></stop>
                      <stop offset="0.296419" stopColor="black"></stop>
                      <stop offset="0.710225" stopColor="black"></stop>
                      <stop offset="1" stopColor="black" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
