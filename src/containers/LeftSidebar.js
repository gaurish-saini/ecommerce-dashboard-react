import React from "react";
import Brand from "../components/Brand";
import Favourites from "../components/Favourites";
import Dashboards from "../components/Dashboards";
import Pages from "../components/Pages";

const LeftSidebar = ({ isOpen }) => {
  return (
    <div
      className={`max-w-[212px] flex flex-col gap-4 px-4 py-5 h-screen bg-white dark:bg-black border-r border-black/10 dark:border-white/10 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Brand />
      <Favourites />
      <Dashboards />
      <Pages />
    </div>
  );
};

export default LeftSidebar;
