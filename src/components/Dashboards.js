import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashboardsData from "../data/dashboardsData";
import { ReactComponent as RightArrow } from "../assets/images/rightArrow.svg";

const Dashboards = () => {
  const [activeDashboard, setActiveDashboard] = useState("Default");

  return (
    <div>
      <h4 className="text-sm px-2 py-1 text-black/40 dark:text-white/40 mb-1">
        Dashboards
      </h4>
      <ul className="flex flex-col gap-1">
        {dashboardsData.map((dashboard, index) => (
          <Link
            key={index}
            to={dashboard.link}
            className={`flex items-center py-1 pr-2 cursor-pointer ${
              activeDashboard === dashboard.name
                ? "bg-black/5 dark:bg-gray-700 rounded-lg"
                : ""
            }`}
            onClick={() => setActiveDashboard(dashboard.name)}
          >
            {/* Arrow or Pill Icon */}
            {activeDashboard === dashboard.name ? (
              <span className="w-1 h-4 rounded-full bg-black dark:bg-perfume inline-block mr-6"></span> // Pill for active dashboard
            ) : (
              <span className="ml-[13.5px] mr-[9.5px] text-black/20 dark:text-white/20">
                <RightArrow />
              </span>
            )}

            {/* Image */}
            <dashboard.image className="w-6 h-6 mr-1 text-black dark:text-white" />

            {/* Link and Name */}
            <span className="text-sm text-black dark:text-white">
              {dashboard.name}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Dashboards;
