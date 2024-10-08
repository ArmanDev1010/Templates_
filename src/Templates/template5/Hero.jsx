import React from "react";

import { BottomHero, Navbar, SwiperHero } from "./";

const Hero = ({ codename }) => {
  return (
    <div className="relative w-full h-screen bg-gray-700 text-white px-[64px] !pt-[30px] py-[40px]">
      <Navbar codename={codename} />
      <BottomHero codename={codename} />
      <SwiperHero codename={codename} />
    </div>
  );
};

export default Hero;