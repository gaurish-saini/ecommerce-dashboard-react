import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const TopNav = ({ toggleLeftSidebar, toggleRightSidebar }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded bg-gray-700 text-white"
        />
        <button className="bg-gray-700 p-2 rounded" onClick={toggleLeftSidebar}>
          Toggle Left Sidebar
        </button>
        <button
          className="bg-gray-700 p-2 rounded"
          onClick={toggleRightSidebar}
        >
          Toggle Right Sidebar
        </button>
        <button className="bg-gray-700 p-2 rounded" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
