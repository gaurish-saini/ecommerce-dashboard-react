import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">ByeWind</div>
      <ul className="flex-1">
        <li className="p-4">
          <Link
            to="/dashboard"
            className="hover:bg-gray-300 dark:hover:bg-gray-700 block p-2 rounded"
          >
            Dashboard
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="/ecommerce"
            className="hover:bg-gray-300 dark:hover:bg-gray-700 block p-2 rounded"
          >
            eCommerce
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="/projects"
            className="hover:bg-gray-300 dark:hover:bg-gray-700 block p-2 rounded"
          >
            Projects
          </Link>
        </li>
      </ul>
      <div className="p-4">
        <Link
          to="/settings"
          className="hover:bg-gray-300 dark:hover:bg-gray-700 block p-2 rounded"
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
