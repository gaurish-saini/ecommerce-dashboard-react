import React from "react";
import locationData from "../data/locationData";

const RevenueByLocation = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h4 className="text-gray-500 dark:text-gray-300 text-sm font-semibold mb-4">
        Revenue by Location
      </h4>
      <ul>
        {locationData.map((location, index) => (
          <li
            key={index}
            className="flex justify-between text-gray-700 dark:text-gray-300 mb-2"
          >
            <span>{location.city}</span> <span>{location.revenue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevenueByLocation;
