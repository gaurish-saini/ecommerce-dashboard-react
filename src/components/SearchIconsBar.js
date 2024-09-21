import React from "react";

const SearchIconsBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Icon */}
      <div>
        <button className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
          🔍 {/* You can replace this with an actual SVG icon */}
        </button>
      </div>

      {/* User-related Icons */}
      <div className="flex space-x-4">
        <button className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
          🔔 {/* Notification icon */}
        </button>
        <button className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
          ⚙️ {/* Settings icon */}
        </button>
        <button className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
          👤 {/* User profile icon */}
        </button>
      </div>
    </div>
  );
};

export default SearchIconsBar;
