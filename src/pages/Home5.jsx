import React, { useState } from "react";

import { Hero, ImageTrail, Projects } from "../Templates/template5";

import { CursorFollow } from "../components";

const Home5 = ({ codename }) => {
  const [height, setHeight] = useState(0);

  return (
    <div className="relative">
      <CursorFollow />
      <Hero codename={codename} setHeight={setHeight} />
      {/* <ImageTrail codename={codename} height={height} />
      <Projects codename={codename} /> */}
    </div>
  );
};

export default Home5;
