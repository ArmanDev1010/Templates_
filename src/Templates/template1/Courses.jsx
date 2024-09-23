import React, { useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Course from "./Course";

const Courses = () => {
  const { t } = useTranslation();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "sticky";
  });

  return (
    <div id="courses" className="relative">
      <motion.div
        style={{ opacity }}
        className="absolute left-1/2 -translate-x-1/2 w-fit h-screen"
        ref={targetRef}
      >
        <motion.div
          style={{ scale, position }}
          className="top-10 left-1/2 -translate-x-1/2 pointer-events-none"
        >
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
            className="h-points text-7xl text-center font-[500]"
            dangerouslySetInnerHTML={{
              __html: t("sovorir.courses.title"),
            }}
          ></motion.h2>
        </motion.div>
      </motion.div>
      <Course />
      <div className="bg-primary-sovorir opacity-54 blur-[8rem] w-[10rem] h-[20rem] absolute top-0 left-0 z-[2]"></div>
    </div>
  );
};

export default Courses;
