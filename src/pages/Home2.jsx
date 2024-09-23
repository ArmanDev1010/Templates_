import React from "react";

import { Navbar, Hero } from "../Templates/template2";

const Home2 = ({ codename }) => {
  return (
    <div className="relative">
      <div
        className="z-[1] relative bg-[50%_100%] bg-no-repeat bg-cover w-full max-w-screen pb-[7rem] overflow-hidden"
        style={{
          backgroundImage: `url(/src/assets/template2/graphics/pulse.png)`,
        }}
      >
        <Navbar codename={codename} />
        <Hero codename={codename} />
        <div className="hero_fade"></div>
      </div>
    </div>
  );
};

export default Home2;
