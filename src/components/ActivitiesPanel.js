import React from "react";
import activitiesData from "../data/activitiesData";

const ActivitiesPanel = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h4 className="text-gray-500 dark:text-gray-300 text-sm font-semibold mb-4">
        Activities
      </h4>
      <ul>
        {activitiesData.map((activity, index) => (
          <li
            key={index}
            className="mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded"
          >
            <div className="text-gray-900 dark:text-white">
              {activity.action}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {activity.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesPanel;
