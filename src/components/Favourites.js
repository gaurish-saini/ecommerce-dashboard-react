import React, { useState } from "react";
import { Link } from "react-router-dom";
import combinedData from "../data/favouritesData";

const Favourites = () => {
  const [activeTab, setActiveTab] = useState("favorites");
  const activeTabData = combinedData.find((tab) => tab.category === activeTab);

  return (
    <div>
      <div className="flex gap-2 text-sm mb-1">
        {combinedData.map((tab) => (
          <button
            key={tab.category}
            className={`px-2 py-1 cursor-pointer ${
              activeTab === tab.category
                ? "text-black/40 dark:text-white/40"
                : "text-black/20 dark:text-white/20"
            }`}
            onClick={() => setActiveTab(tab.category)}
          >
            {tab.tab}
          </button>
        ))}
      </div>

      <ul className="flex flex-col gap-1">
        {activeTabData.items.map((item, index) => (
          <li key={index} className="flex items-center px-2 py-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20 mr-[7px]"></span>
            <Link
              to={item.link}
              className="text-sm text-black dark:text-white cursor-pointer"
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
