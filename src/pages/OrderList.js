import React, { useState } from "react";
import orderData from "../data/orderData";
import { ReactComponent as SearchIcon } from "../assets/images/searchIcon.svg";
import { ReactComponent as Filter } from "../assets/images/filter.svg";
import { ReactComponent as Sort } from "../assets/images/sort.svg";
import { ReactComponent as Add } from "../assets/images/plus.svg";

const statusColors = {
  "In Progress": "text-purple-500",
  Complete: "text-green-500",
  Pending: "text-blue-300",
  Approved: "text-orange-500",
  Rejected: "text-gray-400",
};

const statusOptions = [
  { label: "In Progress", value: "In Progress" },
  { label: "Complete", value: "Complete" },
  { label: "Pending", value: "Pending" },
  { label: "Approved", value: "Approved" },
  { label: "Rejected", value: "Rejected" },
];

const OrderList = () => {
  const [data, setData] = useState([...orderData]);
  const [filteredData, setFilteredData] = useState([...orderData]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]); // Track selected filters
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const rowsPerPage = 10;

  // Handle filtering, sorting, and searching together
  const applyFiltersSortAndSearch = (filters, sortAsc, search) => {
    // Step 1: Filter the data first based on the status
    let filtered = data;
    if (filters.length > 0) {
      filtered = data.filter((row) => filters.includes(row.status));
    }

    // Step 2: Apply search filtering
    if (search) {
      filtered = filtered.filter(
        (row) =>
          row.user.toLowerCase().includes(search.toLowerCase()) ||
          row.project.toLowerCase().includes(search.toLowerCase()) ||
          row.status.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Step 3: Sort the filtered and searched data
    const sorted = [...filtered].sort((a, b) => {
      return sortAsc
        ? a.user.localeCompare(b.user)
        : b.user.localeCompare(a.user);
    });

    setFilteredData(sorted);
    setCurrentPage(1); // Reset to the first page after filtering, sorting, or searching
  };

  // Handle sorting by user
  const sortByUser = () => {
    const newSortOrder = !isSortedAsc;
    setIsSortedAsc(newSortOrder);
    applyFiltersSortAndSearch(selectedFilters, newSortOrder, searchQuery);
  };

  // Handle filtering by status
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
  const handleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
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
    if (currentPage < Math.ceil(filteredData.length / rowsPerPage)) {
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

  return (
    <div>
      {/* Search, Filters, and Sort */}
      <div className="p-[28px] flex flex-col">
        <h4 className="text-sm px-2 py-1 text-black dark:text-white font-semibold">
          Order List
        </h4>
        <div className="mt-4 p-2 bg-catskillWhite dark:bg-white/5 rounded-lg flex items-center justify-between">
          <div className="flex gap-2">
            <div className="cursor-pointer p-1 w-[28px] h-[28px] text-black dark:text-white">
              <Add />
            </div>
            {/* Filter Dropdown */}
            <div className="relative">
              <div
                className="cursor-pointer p-1 w-[28px] h-[28px] text-black dark:text-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Filter />
              </div>

              {isDropdownOpen && (
                <ul className="absolute bg-white border shadow-lg rounded w-40">
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
                </ul>
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
                <div
                  key={status}
                  className="flex text-xs items-center bg-gray-200 text-black px-2 py-1 rounded-full"
                >
                  {status}
                  <button
                    onClick={() => removeFilter(status)}
                    className="ml-2 text-black cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Search Input */}

          <div className="text-sm flex items-center h-[28px] w-40 px-2 py-1 rounded-lg bg-white/40 dark:bg-black/40 border border-black/10 dark:border-white/10">
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
          </div>
        </div>

        {/* Table */}
        <table className="mt-3 table-auto w-full text-left bg-transparent text-xs leading-[18px]">
          <thead>
            <tr className="text-black/40 dark:text-white/40 border-b border-black/20 dark:border-white/20">
              <th className="py-[11px] px-3">
                <input
                  class="cursor-pointer align-sub appearance-none w-[14px] h-[14px] border rounded-[4px] checked:bg-black dark:checked:bg-perfume checked:border-black/40 dark:checked:border-white/20 checked:focus:ring-0 checked:checked:before:content-['✓'] checked:before:text-white dark:checked:before:text-black checked:before:block checked:before:-mt-0.5"
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="py-[11px] px-3 font-normal">Order ID</th>
              <th className="py-[11px] px-3 font-normal">User</th>
              <th className="py-[11px] px-3 font-normal">Project</th>
              <th className="py-[11px] px-3 font-normal">Address</th>
              <th className="py-[11px] px-3 font-normal">Date</th>
              <th className="py-[11px] px-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className={`text-black dark:text-white border-b border-black/5 dark:border-white/5 ${
                  selectedRows.includes(row.id)
                    ? "bg-catskillWhite dark:bg-white/5 rounded-lg"
                    : ""
                }`}
              >
                <td className="py-[11px] px-3 font-normal">
                  <input
                    class="cursor-pointer align-sub appearance-none w-[14px] h-[14px] border rounded-[4px] checked:bg-black dark:checked:bg-perfume checked:border-black/40 dark:checked:border-white/20 checked:focus:ring-0 checked:checked:before:content-['✓'] checked:before:text-white dark:checked:before:text-black checked:before:block checked:before:-mt-0.5"
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelection(row.id)}
                  />
                </td>
                <td className="py-[11px] px-3 font-normal">{row.id}</td>
                <td className="py-[11px] px-3 font-normal">{row.user}</td>
                <td className="py-[11px] px-3 font-normal">{row.project}</td>
                <td className="py-[11px] px-3 font-normal">{row.address}</td>
                <td className="py-[11px] px-3 font-normal">{row.date}</td>
                <td className="py-[11px] px-3 font-normal">
                  <span className={statusColors[row.status]}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination-controls flex gap-4 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded bg-gray-200"
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(filteredData.length / rowsPerPage)
            }
            className="px-3 py-1 border rounded bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
