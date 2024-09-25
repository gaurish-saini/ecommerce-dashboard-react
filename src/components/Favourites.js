import React, { useState } from "react";
import { Link } from "react-router-dom";
import combinedData from "../data/favouritesData";

const Favourites = () => {
  const [activeTab, setActiveTab] = useState("favorites");
  const activeTabData = combinedData.find((tab) => tab.category === activeTab);

  return (
    <div>
      <div className="flex gap-3 text-sm px-1 my-1">
        {combinedData.map((tab) => (
          <button
            key={tab.category}
            className={`px-1.5 py-1 cursor-pointer ${
              activeTab === tab.category
                ? "text-black/40 dark:text-white/40"
                : "text-black/20 hover:text-black/40 dark:text-white/20 dark:hover:text-white/40"
            }`}
            onClick={() => setActiveTab(tab.category)}
          >
            {tab.tab}
          </button>
        ))}
      </div>

      <ul className="flex flex-col gap-1">
        {activeTabData.items.map((item, index) => (
          <li key={index} className="flex items-center px-3 py-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20 mr-2.5"></span>
            <Link
              to={item.link}
              className="text-sm text-black hover:text-black/40 dark:text-white dark:hover:text-white/40 cursor-pointer"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
