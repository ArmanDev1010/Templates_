import React from "react";

import { useTranslation } from "react-i18next";

import SwiperHero from "./SwiperHero";

import { motion } from "framer-motion";

const Hero = ({ codename }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative px-[5%] z-[1]">
        <div className="max-w-[1680px] mx-auto my-0">
          <div className="flex flex-col items-center text-center ">
            <div className="">
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
                className="text-[4.6rem] text-[#222] leading-[1.5] font-[600] mb-7 whitespace-pre"
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
                className="text-[24px] text-gray-500 font-[500] mb-8"
              >
                {t(`${codename}.hero.paragraph`)}
              </motion.p>
              <div className="flex items-center justify-center gap-8">
                <motion.button
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
                  className="group w-fit py-[1.25rem] px-[4rem] capitilize rounded-[50vw] border-[3px] border-[#e3e3e3] text-xl font-[500] bg-no-rpeeat 
                hover:border-[var(--secondary-color)] hover:saturate-[180%]"
                  style={{
                    "--primary-color": t(
                      `${codename}.paints.primary`
                    ),
                    "--secondary-color": t(
                      `${codename}.paints.secondary`
                    ),
                    background: `radial-gradient(110.56% 100% at 50% 0%, #FFF 70%, ${t(
                      `${codename}.paints.primary`
                    )} 150%)`,
                    transition:
                      "filter .2s cubic-bezier(.77,0,.175,1), border .2s cubic-bezier(.77,0,.175,1)",
                  }}
                >
                  <div className="relative overflow-hidden">
                    <div className="group-hover:translate-y-[-110%] transition duration-300">
                      {t(`regulars.button.learn`)}
                    </div>
                    <div className="text-black translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                      {t(`regulars.button.learn`)}
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
          <SwiperHero codename={codename} />
        </div>
      </div>
      <div className="absolute z-[-1] top-0 left-0 w-full h-screen">
        <div
          className="absolute z-[-3] top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              `radial-gradient(circle, rgba(${t(`${codename}.paints.primary_rgba`)},0.03) 41%, rgba(255,255,255,1) 100%)`,
          }}
        ></div>
        <div
          className="absolute z-[-2] bottom-0 left-0 w-full h-[200px]"
          style={{
            backgroundImage: "linear-gradient(to bottom, transparent, white",
          }}
        ></div>
      </div>
    </>
  );
};

export default Hero;
