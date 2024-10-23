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

const ImageTrail = ({ codename, distanceThreshold = 140 }) => {
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
    <div className="overflow-hidden relative w-full h-[720px] text-white">
      <div
        className="w-full h-full relative bg-[#0D0F0E]"
        onMouseMove={(e) => (mouseInfo.now = { x: e.pageX, y: e.pageY - 1000 })}
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
      <div className="group cursor-pointer w-fit text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000000000]">
        <h1 className="borderText_logo group-hover:text-white pointer-events-none">
          @brainyblueprints
        </h1>
      </div>
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
        <div className="absolute top-[70px] left-[120px] max-w-[400px]">
          <p className="text-[24px] font-[700] mb-4 capitalize">
            Crafting inspiring residential & commercial spaces
          </p>
          <p className="text-[15px] opacity-70">
            We released more than 150 commercial and private projects all around
            the world, providing our clients with custom solutions in stylish,
            functional, and well-thought-out designs.
          </p>
        </div>
        <div className="absolute bottom-[70px] right-[120px] max-w-[400px] !pointer-events-auto">
          <p className="text-[15px] opacity-70 cursor-default mb-7">
            Fill out the form below if you want to order the project, ask for
            prices, or get an offer. Our manager will contact you as soon as
            possible to clarify all the details.
          </p>
          <div className="group bg-transparent border-[1px] cursor-pointer min-w-[220px] py-3 transition duration-200 hover:bg-white">
            <div className="relative overflow-hidden text-center text-[16px] font-[500]">
              <div className="group-hover:translate-y-[-110%] transition duration-300">
                {t(`regulars.button.contact`)}
              </div>
              <div className="text-black translate-y-[110%] group-hover:translate-y-[0%] transition duration-300 absolute top-0 bottom-0 left-0 right-0">
                {t(`regulars.button.contact`)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTrail;
