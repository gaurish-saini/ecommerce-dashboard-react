import React from "react";
import favouritesData from "../data/favouritesData";
import { Link } from "react-router-dom";

const Favourites = () => {
  return (
    <div className="p-4">
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-2">
        Favourites
      </h4>
      <ul>
        {favouritesData.map((item, index) => (
          <li key={index} className="py-2">
            <Link
              to={item.link}
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

export default Favourites;
