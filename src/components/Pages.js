import React, { useState } from "react";
import pagesData from "../data/pagesData";
import { Link } from "react-router-dom";

const Pages = () => {
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  return (
    <div className="p-4">
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-2">
        Pages
      </h4>

      {/* User Profile Accordion */}
      <button
        onClick={() => setIsUserProfileOpen(!isUserProfileOpen)}
        className="hover:bg-gray-300 dark:hover:bg-gray-700 block p-2 rounded w-full text-left"
      >
        User Profile
        <span className="float-right">{isUserProfileOpen ? "▲" : "▼"}</span>
      </button>

      {isUserProfileOpen && (
        <ul className="pl-4 mt-2">
          {pagesData.userProfile.map((item, index) => (
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
      )}

      {/* Other Pages */}
      <ul className="mt-2">
        {pagesData.otherPages.map((item, index) => (
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

export default Pages;
