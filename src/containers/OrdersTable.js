import React, { useState, useRef } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation
import orderData from "../data/orderData";
import { ReactComponent as SearchIcon } from "../assets/images/searchIcon.svg";
import { ReactComponent as Filter } from "../assets/images/filter.svg";
import { ReactComponent as Sort } from "../assets/images/sort.svg";
import { ReactComponent as Add } from "../assets/images/plus.svg";
import { ReactComponent as RightArrow } from "../assets/images/rightArrow.svg";
import { ReactComponent as CalendarBlank } from "../assets/images/calendarBlank.svg";
import { ReactComponent as MoreOptionsIcon } from "../assets/images/moreOptionsIcon.svg";
import useOutsideClick from "../hooks/useOutsideClick";

const statusColors = {
  "In Progress": "text-chetwodeBlue",
  Complete: "text-oceanGreen",
  Pending: "text-shakespeare",
  Approved: "text-goldenTainoi",
  Rejected: "text-black/40 dark:text-white/40",
};

const statusOptions = [
  { label: "In Progress", value: "In Progress" },
  { label: "Complete", value: "Complete" },
  { label: "Pending", value: "Pending" },
  { label: "Approved", value: "Approved" },
  { label: "Rejected", value: "Rejected" },
];

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2, // Stagger animation for children
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const OrderTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null); // Track the index of selected row
  const [filteredData, setFilteredData] = useState([...orderData]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]); // Track selected filters
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  const rowsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / rowsPerPage); // Calculate total pages

  const applyFiltersSortAndSearch = (filters, sortAsc, search) => {
    let filtered = orderData;
    if (filters.length > 0) {
      filtered = orderData.filter((row) => filters.includes(row.status));
    }

    if (search) {
      filtered = filtered.filter(
        (row) =>
          row.user.toLowerCase().includes(search.toLowerCase()) ||
          row.project.toLowerCase().includes(search.toLowerCase()) ||
          row.status.toLowerCase().includes(search.toLowerCase())
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      return sortAsc
        ? a.user.localeCompare(b.user)
        : b.user.localeCompare(a.user);
    });

    setFilteredData(sorted);
    setCurrentPage(1); // Reset to the first page after filtering, sorting, or searching
  };

  const sortByUser = () => {
    const newSortOrder = !isSortedAsc;
    setIsSortedAsc(newSortOrder);
    applyFiltersSortAndSearch(selectedFilters, newSortOrder, searchQuery);
  };

  const handleFilterChange = (status) => {
    const isSelected = selectedFilters.includes(status);
    const newFilters = isSelected
      ? selectedFilters.filter((filter) => filter !== status)
      : [...selectedFilters, status];

    setSelectedFilters(newFilters);
    applyFiltersSortAndSearch(newFilters, isSortedAsc, searchQuery);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    applyFiltersSortAndSearch(selectedFilters, isSortedAsc, query);
  };

  // Handle removing filters from the pills
  const removeFilter = (status) => {
    const newFilters = selectedFilters.filter((filter) => filter !== status);
    setSelectedFilters(newFilters);
    applyFiltersSortAndSearch(newFilters, isSortedAsc, searchQuery);
  };

  // Paginated data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle row selection
  const handleRowSelection = (id, rowIndex) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      setSelectedRowIndex(null); // Deselect the row index
    } else {
      setSelectedRows([...selectedRows, id]);
      setSelectedRowIndex(rowIndex); // Capture the selected row index
    }
  };

  // Handle select all rows on the current page
  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      const currentPageIds = paginatedData.map((row) => row.id);
      setSelectedRows(currentPageIds);
    }
    setAllSelected(!allSelected);
  };

  // Handle pagination next/previous
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      setSelectedRows([]);
      setAllSelected(false);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      setSelectedRows([]);
      setAllSelected(false);
    }
  };

  const handleRowHover = (index) => {
    setHoveredRow(index);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };

  // Handle specific page selection
  const handlePageSelect = (page) => {
    setCurrentPage(page);
    setSelectedRows([]);
    setAllSelected(false);
  };

  return (
    <>
      {/* Search, Filters, and Sort */}
      <motion.div
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
                  <li key={index} className="px-4 py-2 ">
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
                variants={rowVariants} // Staggered pill animation
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
      </motion.div>

      {/* Table */}
      <motion.div className="h-[440px] mt-3 pb-px">
        <motion.table
          className="relative z-0 w-full text-left bg-transparent text-xs leading-[18px] table-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <thead>
            <tr className="text-black/40 dark:text-white/40 border-b border-black/20 dark:border-white/20">
              <th className="w-9 py-2.5 px-1">
                <input
                  className="cursor-pointer align-sub appearance-none w-[14px] h-[14px] border rounded-[4px] checked:bg-black dark:checked:bg-perfume checked:border-black/40 dark:checked:border-white/20 checked:focus:ring-0 checked:checked:before:content-['✓'] checked:before:text-white dark:checked:before:text-black checked:before:block checked:before:-mt-0.5"
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="w-[100px] py-2.5 font-normal">Order ID</th>
              <th className="w-[214px] py-2.5 font-normal">User</th>
              <th className="w-[214px] py-2.5 pl-1 font-normal">Project</th>
              <th className="w-[270px] py-2.5 pl-2 font-normal">Address</th>
              <th className="w-48 py-2.5 pl-3 font-normal">Date</th>
              <th className="w-[110px] py-2.5 pl-4 font-normal">Status</th>
              <th className="w-12 py-2.5 font-normal">
                <></>
              </th>
            </tr>
          </thead>
          <motion.tbody>
            {paginatedData.map((row, rowIndex) => (
              <motion.tr
                key={row.id}
                onMouseEnter={() => handleRowHover(rowIndex)}
                onMouseLeave={handleRowLeave}
                className={`
                  group text-black dark:text-white border-b border-black/5 dark:border-white/5 
                  hover:border-none hover:bg-catskillWhite dark:hover:bg-white/5 hover:shadow-md hover:rounded-lg 
                  transition-all duration-300 ease-in-out h-[40px]
                  ${
                    rowIndex === hoveredRow - 1 ||
                    (selectedRowIndex !== null &&
                      rowIndex === selectedRowIndex - 1)
                      ? "border-none"
                      : "border-b"
                  }
                  ${
                    selectedRows.includes(row.id)
                      ? "bg-catskillWhite dark:bg-white/5 rounded-lg shadow-md border-none"
                      : ""
                  }
                `}
                variants={rowVariants} // Animate each row
              >
                <td className="py-[7.5px] px-1 font-normal rounded-l-lg">
                  <input
                    className="cursor-pointer align-sub appearance-none w-[14px] h-[14px] border rounded-[4px] checked:bg-black dark:checked:bg-perfume checked:border-black/40 dark:checked:border-white/20 checked:focus:ring-0 checked:checked:before:content-['✓'] checked:before:text-white dark:checked:before:text-black checked:before:block checked:before:-mt-0.5"
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelection(row.id, rowIndex)}
                  />
                </td>
                <td className="py-[7.5px] font-normal">{row.id}</td>
                <td className="flex items-center gap-2 py-[7.5px] font-normal">
                  <img
                    className="min-w-6 h-6 rounded-full"
                    src={row.avatar}
                    alt="Avatar"
                    loading="lazy"
                  />
                  {row.user}
                </td>
                <td className="py-[7.5px] pl-1 font-normal">{row.project}</td>
                <td className="py-[7.5px] pl-2 font-normal">{row.address}</td>
                <td className="py-[7.5px] pl-3 font-normal">
                  <div className="flex gap-1.5 items-center">
                    <CalendarBlank />
                    {row.date}
                  </div>
                </td>
                <td className="py-[7.5px] pl-4 font-normal">
                  <span
                    className={`flex items-center whitespace-nowrap ${
                      statusColors[row.status]
                    }`}
                  >
                    <span className="min-w-1.5 h-1.5 rounded-full bg-current mr-[5px]"></span>
                    {row.status}
                  </span>
                </td>
                <td className=" rounded-r-lg">
                  <div className="w-12 text-center">
                    {(hoveredRow === rowIndex ||
                      selectedRows.includes(row.id)) && (
                      <button className=" p-1">
                        <MoreOptionsIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                      </button>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      </motion.div>

      {/* Pagination */}
      <motion.div
        className="pagination-controls flex gap-2 mt-3.5 items-center justify-end"
        variants={containerVariants}
      >
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="cursor-pointer text-black dark:text-white p-1 w-7 h-7 transform rotate-180"
        >
          <RightArrow />
        </button>

        {/* Render page numbers dynamically */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageSelect(page)}
              className={`cursor-pointer text-sm p-1 w-7 h-7 ${
                currentPage === page
                  ? "bg-black/5 text-black rounded-lg dark:bg-white/10 dark:text-white"
                  : "text-black dark:text-white"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="cursor-pointer text-black dark:text-white p-1 w-6 h-6"
        >
          <RightArrow />
        </button>
      </motion.div>
    </>
  );
};

export default OrderTable;
