import React from "react";
import { ThumbsGallery } from "./";

const Right = ({ codename }) => {
  return (
    <div className="relative w-1/2 h-full rounded-r-[25px] overflow-hidden">
      <ThumbsGallery codename={codename} />
    </div>
  );
};

export default Right;
