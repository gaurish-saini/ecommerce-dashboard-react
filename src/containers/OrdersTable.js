import React, { useState, useRef } from "react";
import orderData from "../data/orderData";
import useOutsideClick from "../hooks/useOutsideClick";
import TableOperations from "../components/TableOperations";
import OrderListTable from "../components/OrderListTable";
import Pagination from "../components/utility/Pagination";

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
      <TableOperations
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        statusOptions={statusOptions}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
        removeFilter={removeFilter}
        sortByUser={sortByUser}
        containerVariants={containerVariants}
        dropdownVariants={dropdownVariants}
        rowVariants={rowVariants}
      />

      <OrderListTable
        paginatedData={paginatedData}
        hoveredRow={hoveredRow}
        selectedRowIndex={selectedRowIndex}
        selectedRows={selectedRows}
        allSelected={allSelected}
        handleSelectAll={handleSelectAll}
        handleRowHover={handleRowHover}
        handleRowLeave={handleRowLeave}
        handleRowSelection={handleRowSelection}
        statusColors={statusColors}
        rowVariants={rowVariants}
        containerVariants={containerVariants}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageSelect={handlePageSelect}
      />
    </>
  );
};

export default OrderTable;
