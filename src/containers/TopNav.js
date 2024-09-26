import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Breadcrumbs from "../components/utility/Breadcrumbs";
import SearchInput from "../components/SearchInput";
import { ReactComponent as Sun } from "../assets/images/sun.svg";
import { ReactComponent as Star } from "../assets/images/star.svg";
import { ReactComponent as Bell } from "../assets/images/bell.svg";
import { ReactComponent as Sidebar } from "../assets/images/sidebar.svg";
import { ReactComponent as TimeHistory } from "../assets/images/timeHistory.svg";

const TopNav = ({ toggleLeftSidebar, toggleRightSidebar }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center px-[28px] py-5 bg-white dark:bg-black border-b border-black/10 dark:border-white/10">
      <div className="flex items-center gap-2">
        <span
          className="p-1 cursor-pointer text-black dark:text-white"
          onClick={toggleLeftSidebar}
        >
          <Sidebar />
        </span>
        <span className="p-1 cursor-pointer text-black dark:text-white">
          <Star />
        </span>
        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-5">
        <SearchInput />
        <div className="flex gap-[13px] items-center">
          <span
            className="p-1 cursor-pointer text-black dark:text-white"
            onClick={toggleTheme}
          >
            <Sun />
          </span>
          <TimeHistory className="text-black dark:text-white" />
          <Bell className="text-black dark:text-white" />
          <span
            className="p-1 cursor-pointer text-black dark:text-white"
            onClick={toggleRightSidebar}
          >
            <Sidebar />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
