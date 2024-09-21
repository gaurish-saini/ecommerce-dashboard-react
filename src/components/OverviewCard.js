import React from "react";

const OverviewCard = ({ title, value, percentageChange, isPositive }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg flex flex-col">
      <h4 className="text-gray-500 dark:text-gray-300 text-sm font-semibold mb-1">
        {title}
      </h4>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </span>
        <span
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {percentageChange}
        </span>
      </div>
    </div>
  );
};

export default OverviewCard;
