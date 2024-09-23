import React from "react";

const Navbar = ({ codename }) => {
  return (
    <div className="relative px-[5%]">
      <div className="max-w-[1680px] mx-auto my-0">
        <div className="flex items-center justify-center pt-[50px] pb-[30px]">
          <img
            src={`/src/assets/template2/logos/${codename}.png`}
            alt="logo"
            style={{ width: "230px", height: "auto" }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
