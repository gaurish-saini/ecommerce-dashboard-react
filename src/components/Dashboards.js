import React from "react";
import dashboardsData from "../data/dashboardsData"; // Assuming the dashboardsData is properly set
import { Link } from "react-router-dom";

const Dashboards = () => {
  return (
    <div className="p-4">
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-2">
        Dashboards
      </h4>
      <ul>
        {dashboardsData.map((item, index) => (
          <li key={index} className="py-2">
            <Link
              to={item.link} // This is the key: Ensure this points to /dashboard/default
              className="hover:bg-gray-300 dark:hover:bg-gray-700 block p-2 rounded"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboards;
