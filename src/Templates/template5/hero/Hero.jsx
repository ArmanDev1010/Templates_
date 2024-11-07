import React, { useEffect, useRef } from "react";

import { BottomHero, Navbar, SwiperHero } from "..";

const Hero = ({ codename, setHeight }) => {
  const heroHeight = useRef(null);

  useEffect(() => {
    setHeight(heroHeight.current.clientHeight);
  });

  return (
    <div
      className="!font-montserrateng relative w-full h-screen bg-gray-700 text-white px-[64px] py-[40px]"
      // style={{ paddingTop: "30px" }}
      ref={heroHeight}
    >
      <Navbar codename={codename} />
      <BottomHero codename={codename} />
      <SwiperHero codename={codename} />
    </div>
  );
};

export default Hero;
