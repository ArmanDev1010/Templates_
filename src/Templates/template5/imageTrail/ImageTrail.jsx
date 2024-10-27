import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { mix, distance, wrap } from "@popmotion/popcorn";
import {
  colors,
  center,
  powerOut4,
  generateSize,
  useAnimationLoop,
} from "./imagetrailutils";
import { useTranslation } from "react-i18next";

const ImagePlaceholder = ({ position, color, codename }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!position) return;
    const { xOrigin, x, yOrigin, y } = position;
    controls.start({
      x: [xOrigin, x, x],
      y: [yOrigin, y, y],
      opacity: [1, 1, 0],
      scale: [1, 1, 0.2],
      transition: {
        duration: 0.8,
        ease: ["easeOut", powerOut4, powerOut4],
        times: [0, 0.7, 1],
      },
    });
  }, [position]);

  const style = position ? position.style : {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transformTemplate={center}
      style={{
        backgroundImage: `url(/src/assets/template5/${codename}/imagetrail/${color}.jpg)`,
        ...style,
      }}
      className="w-[250px] h-[312px] absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
    />
  );
};

const ImageTrail = ({ codename, distanceThreshold = 140, height }) => {
  const { t } = useTranslation();

  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 },
  }).current;

  const imagePositions = useRef([]);

  const [index, setIndex] = useState(0);

  useAnimationLoop(() => {
    const mouseDistance = distance(mouseInfo.now, mouseInfo.prevImage);

    mouseInfo.prev = {
      x: mix(mouseInfo.prev.x || mouseInfo.now.x, mouseInfo.now.x, 0.1),
      y: mix(mouseInfo.prev.y || mouseInfo.now.y, mouseInfo.now.y, 0.1),
    };

    if (mouseDistance > distanceThreshold) {
      const newIndex = index + 1;
      const imageIndex = wrap(0, colors.length - 1, newIndex);

      imagePositions.current[imageIndex] = {
        xOrigin: mouseInfo.prev.x,
        yOrigin: mouseInfo.prev.y,
        x: mouseInfo.now.x,
        y: mouseInfo.now.y,
        style: {
          ...generateSize(),
          zIndex: imageIndex,
        },
      };

      mouseInfo.prevImage = mouseInfo.now;

      setIndex(newIndex);
    }
  });

  return (
    <div className="overflow-hidden relative w-full h-[720px] text-white bg-[#080808]">
      <img
        className="absolute top-0 left-0 w-full"
        src="/src/assets/patterns/line_grid/top_line_pattern.png"
      />
      <div
        className="w-full h-full relative"
        onMouseMove={(e) =>
          (mouseInfo.now = { x: e.pageX, y: e.pageY - height })
        }
      >
        {colors.map((color, i) => (
          <ImagePlaceholder
            position={imagePositions.current[i]}
            color={color}
            key={color}
            codename={codename}
          />
        ))}
      </div>
      <div className="overflow-y-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000000000]">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            ease: "easeIn",
            y: { duration: 0.5, delay: 1 },
          }}
          variants={{
            visible: { y: 0 },
            hidden: { y: 105 },
          }}
          className="!font-montserrat borderText_logo cursor-pointer w-fit text-center hover:text-white"
        >
          {t(`${codename}.image_trails.social_media_tag`)}
        </motion.h1>
      </div>
      <div className="!font-montserrateng absolute top-0 left-0 h-full w-full pointer-events-none">
        <div className="absolute top-[70px] left-[120px] max-w-[400px]">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeIn",
              y: { duration: 0.3, delay: 0.3 },
              opacity: { delay: 0.3 },
            }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            className="text-[24px] font-[700] mb-4 capitalize"
          >
            {t(`${codename}.image_trails.title`)}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeIn",
              y: { duration: 0.5, delay: 0.5 },
              opacity: { delay: 0.5 },
            }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            className="text-[15px] opacity-70"
          >
            {t(`${codename}.image_trails.paragraph_one`)}
          </motion.p>
        </div>
        <div className="absolute bottom-[70px] right-[120px] max-w-[400px] !pointer-events-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeIn",
              y: { duration: 0.3, delay: 0.3 },
              opacity: { delay: 0.3 },
            }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            className="text-[15px] opacity-70 cursor-default mb-7"
          >
            {t(`${codename}.image_trails.paragraph_two`)}
          </motion.p>
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeIn",
              y: { duration: 0.5, delay: 0.5 },
              opacity: { delay: 0.5 },
            }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            className="group"
          >
            <div className="bg-transparent border-[1px] cursor-pointer min-w-[220px] py-3 transition duration-200 group-hover:bg-white">
              <div className="relative overflow-hidden text-center text-[16px] font-[600]">
                <div className="group-hover:translate-y-[-110%] transition duration-300">
                  {t(`regulars.button.contact`)}
                </div>
                <div className="text-black translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                  {t(`regulars.button.contact`)}
                </div>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ImageTrail;
