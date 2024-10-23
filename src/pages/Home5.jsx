import React from "react";

import { Hero, ImageTrail } from "../Templates/template5";

const Home5 = ({ codename }) => {
  return (
    <div className="relative">
      <Hero codename={codename} />
      <ImageTrail codename={codename} />
    </div>
  );
};

export default Home5;
