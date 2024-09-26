import React from "react";

import { Left, Right } from "./";

const Hero = ({ codename }) => {
  return (
    <div className="h-screen w-full p-[1rem]">
      <div className="flex w-full h-full">
        <Left codename={codename} />
        <Right codename={codename} />
      </div>
    </div>
  );
};

export default Hero;
