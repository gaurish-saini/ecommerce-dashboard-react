import React from "react";
import Brand from "./Brand";
import SearchIconsBar from "./SearchIconsBar";
import Favourites from "./Favourites";
import Dashboards from "./Dashboards";
import Pages from "./Pages";

const Sidebar = () => {
  return (
    <div className="w-[212px] h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-white flex flex-col">
      {/* Brand Section */}
      <Brand />

      {/* Search and Icons Bar */}
      <SearchIconsBar />

      {/* Favourites Section */}
      <Favourites />

      {/* Dashboards Section */}
      <Dashboards />

      {/* Pages Section */}
      <Pages />
    </div>
  );
};

export default Sidebar;
