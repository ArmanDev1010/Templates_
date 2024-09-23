import React from "react";

import { Left, Right } from "./";
import { useTranslation } from "react-i18next";

const Hero = ({ codename }) => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen w-full bg-[var(--primary-color)] flex"
      style={{
        "--primary-color": t(`${codename}.paints.primary`),
      }}
    >
      <Left codename={codename} />
      <Right codename={codename} />
    </div>
  );
};

export default Hero;
