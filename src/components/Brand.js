import React from "react";
import brandLogo from "../assets/images/brandLogo.png";

const Brand = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={brandLogo} alt="Brand Logo" className="w-6 h-6" />
      <div className="text-sm text-black dark:text-white">ByeWind</div>
    </div>
  );
};

export default Brand;
