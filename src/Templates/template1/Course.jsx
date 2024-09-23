import React, { useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";

import { useTranslation } from "react-i18next";

const Course = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section
      ref={targetRef}
      className="relative z-[3] h-[300vh] bg-transparent"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {[
            "smm",
            "graphicdesign",
            "dataanalytics",
            "e-commerce",
            "copywriting",
            "adsmanagerpro",
          ].map((text, key) => {
            return <Card text={text} key={key} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ text }) => {
  const { t } = useTranslation();

  return (
    <div className="group relative w-[650px] h-[450px] overflow-hidden bg-secondary-sovorir rounded-[40px] border-4 border-thirdly-sovorir transition duration-300 hover:-translate-y-6 cursor-pointer">
      <div className="absolute z-[4] bottom-14 pl-5 py-7 transition duration-300 w-full bg-thirdly-sovorir group-hover:bg-white">
        <h2 className="text-5xl uppercase text-left font-[500] text-[#ffff]">
          <div className="relative overflow-hidden">
            <div className="group-hover:translate-y-[-110%] transition duration-300">
              {t(`sovorir.hero.course.${text}`)}
            </div>
            <div className="text-primary-sovorir translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
              {t(`sovorir.hero.course.${text}`)}
            </div>
          </div>
        </h2>
      </div>
      <div
        className="absolute z-[3] w-full h-full bg-contain bg-center bg-no-repeat bottom-0 -right-[8rem]"
        style={{
          backgroundImage: `url(/src/components/sovorir/assets/carousel_transparent/${text}.png)`,
        }}
      ></div>
    </div>
  );
};

export default Course;
