import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ReactComponent as SearchIcon } from "../assets/images/searchIcon.svg";
import { ReactComponent as Filter } from "../assets/images/filter.svg";
import { ReactComponent as Sort } from "../assets/images/sort.svg";
import { ReactComponent as Add } from "../assets/images/plus.svg";
import useOutsideClick from "../hooks/useOutsideClick";

// Define the animation variants (if needed) here

const TableOperations = ({
  searchQuery,
  handleSearchChange,
  statusOptions,
  isDropdownOpen,
  setIsDropdownOpen,
  selectedFilters,
  handleFilterChange,
  removeFilter,
  sortByUser,
  containerVariants,
  dropdownVariants,
  rowVariants,
}) => {
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  return (
    <motion.section
      className="relative z-20 mt-4 p-2 bg-catskillWhite dark:bg-white/5 rounded-lg flex items-center justify-between"
      variants={containerVariants} // Apply staggered animation
      initial="hidden"
      animate="visible"
    >
      <div className="flex gap-2">
        <div className="cursor-pointer p-1 w-[28px] h-[28px] text-black dark:text-white">
          <Add />
        </div>
        {/* Filter Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="cursor-pointer p-1 w-[28px] h-[28px] text-black dark:text-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Filter />
          </div>
          {isDropdownOpen && (
            <motion.ul
              className="absolute bg-white border shadow-lg rounded w-40"
              variants={dropdownVariants} // Animate dropdown
              initial="hidden"
              animate="visible"
            >
              {statusOptions.map((status, index) => (
                <li key={index} className="px-4 py-2">
                  <label className="text-sm flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-2 cursor-pointer align-sub appearance-none w-4 h-4 border rounded-[4px] checked:bg-black dark:checked:bg-perfume checked:border-black/40 dark:checked:border-white/20 checked:focus:ring-0 checked:checked:before:content-['✓'] checked:before:text-white dark:checked:before:text-black checked:before:block checked:before:-mt-[3px]"
                      checked={selectedFilters.includes(status.value)}
                      onChange={() => handleFilterChange(status.value)}
                    />
                    {status.label}
                  </label>
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Sort Button */}
        <div
          className="cursor-pointer p-1 w-[28px] h-[28px] text-black dark:text-white"
          onClick={sortByUser}
        >
          <Sort />
        </div>

        {/* Pills for selected filters */}
        <div className="flex gap-2 ml-6">
          {selectedFilters.map((status) => (
            <motion.div
              key={status}
              className="flex text-xs items-center bg-gray-200 text-black px-2 py-1 rounded-full"
              variants={rowVariants}
            >
              {status}
              <button
                onClick={() => removeFilter(status)}
                className="ml-2 text-black cursor-pointer"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <motion.div
        className="text-sm flex items-center h-[28px] w-40 px-2 py-1 rounded-lg bg-white/40 dark:bg-black/40 border border-black/10 dark:border-white/10"
        variants={rowVariants}
      >
        <span className="text-black/20 dark:text-white/20">
          <SearchIcon />
        </span>
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
          className="w-full ml-1 mr-2 bg-transparent text-black dark:text-white placeholder-black/20 dark:placeholder-white/20 outline-none focus:ring-0"
        />
      </motion.div>
    </motion.section>
  );
};

export default TableOperations;
