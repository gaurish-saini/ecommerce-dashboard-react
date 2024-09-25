import React from "react";
import brandLogo from "../assets/images/brandLogo.png";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/" className="flex items-center gap-2 px-1">
      <img src={brandLogo} alt="Brand Logo" className="w-6 h-6" />
      <div className="text-sm text-black dark:text-white">ByeWind</div>
    </Link>
  );
};

export default Brand;
