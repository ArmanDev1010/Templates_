import React from "react";
import { useTranslation } from "react-i18next";

import { LuGraduationCap } from "react-icons/lu";
import { LuTestTube2 } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { HiOutlineBriefcase } from "react-icons/hi";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { t } = useTranslation();

  const { ref: elem, inView: isInView } = useInView({
    rootMargin: "-200px 0px",
  });

  return (
    <div className="relative my-28 flex items-center flex-col">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          ease: "easeIn",
          y: { duration: 0.4, delay: 0.3 },
          opacity: { delay: 0.5 },
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -100 },
        }}
        className="h-points text-7xl"
      >
        <span className="span_h2-gradient bg-black font-[500]">
          {t("sovorir.about.title")}
        </span>
      </motion.h2>
      <ul className="flex items-start my-[5rem] gap-[5rem]">
        {["1", "2", "3", "4"].map((text, key) => (
          <li
            key={key}
            className="flex flex-col items-center text-center text-[#222]"
          >
            <div className="h-[90px]">
              {text == "1" ? (
                <LuGraduationCap className="text-7xl" />
              ) : text == "2" ? (
                <LuTestTube2 className="text-6xl" />
              ) : text == "3" ? (
                <GrCertificate className="text-6xl" />
              ) : (
                <HiOutlineBriefcase className="text-6xl" />
              )}
            </div>
            <p className="text-xl">
              {t(`sovorir.about.benefits.${text}.paragraph`)}
            </p>
          </li>
        ))}
      </ul>
      <div className="relative w-full">
        <div className="relative flex justify-center items-center">
          <div
            className="line"
            ref={elem}
            style={{
              transform: `translate3d(0px, 0px, 0px) scale3d(${
                isInView ? "1" : "0"
              }, ${
                isInView ? "1" : "0"
              }, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 1440 85"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              role="img"
            >
              <g filter="url(#filter0_f_1870_510)">
                <rect
                  y="33.3333"
                  width="1440"
                  height="18"
                  fill="url(#paint0_linear_1870_510)"
                ></rect>
              </g>
              <mask id="path-2-inside-1_1870_510" fill="currentColor">
                <path d="M0 33.3333H1440V51.3333H0V33.3333Z"></path>
              </mask>
              <path
                d="M0 33.3333H1440V51.3333H0V33.3333Z"
                fill="url(#paint1_linear_1870_510)"
              ></path>
              <path
                d="M0 34.3333H1440V32.3333H0V34.3333ZM1440 50.3333H0V52.3333H1440V50.3333Z"
                fill="currentColor"
                mask="url(#path-2-inside-1_1870_510)"
              ></path>
              <defs>
                <filter
                  id="filter0_f_1870_510"
                  x="-33.3333"
                  y="-8.01086e-05"
                  width="1506.67"
                  height="84.6667"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="10.6667"
                    result="effect1_foregroundBlur_1870_510"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_1870_510"
                  x1="51.0714"
                  y1="42.3333"
                  x2="78.2946"
                  y2="235.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7D2BCE"></stop>
                  <stop offset="1" stopColor="#8B5CF6"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1870_510"
                  x1="51.0714"
                  y1="42.3333"
                  x2="78.2946"
                  y2="235.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7D2BCE"></stop>
                  <stop offset="1" stopColor="#8B5CF6"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center text-[11rem] font-[700] leading-[1.2]">
            {["7", "0", "%"].map((text, key) => (
              <p
                key={key}
                className="stats_text-radial relative"
                style={text == "0" ? { zIndex: "1" } : { zIndex: "2" }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
        <p className="text-center text-3xl mt-5">
          {t("sovorir.about.students")}
        </p>
        <div className="fade"></div>
        <div className="fade is-right"></div>
      </div>
      {/* <div className="bg-primary-sovorir opacity-54 blur-[8rem] w-[10rem] h-[10rem] absolute top-0 left-0 z-[7]"></div> */}
    </div>
  );
};

export default About;
