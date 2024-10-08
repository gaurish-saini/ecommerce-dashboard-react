import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import pagesData from "../data/pagesData";
import { ReactComponent as SearchIcon } from "../assets/images/searchIcon.svg";
import { ReactComponent as SearchKeyboardAction } from "../assets/images/searchKeyboardAction.svg";
import useOutsideClick from "../hooks/useOutsideClick";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";
import { useKeyboardShortcut } from "../hooks/useKeyboardShortcut";
import { motion } from "framer-motion"; // Import framer-motion

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const wrapperRef = useRef(null);

  // Handle the search query change and filter results
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm.length > 0) {
      const allPages = Object.values(pagesData).flatMap((section) =>
        section.items.map((item) => ({ ...item, section: section.title }))
      );

      const filteredResults = allPages.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );

      setResults(filteredResults);
      setIsDropdownVisible(true);
    } else {
      setResults([]);
      setIsDropdownVisible(false);
    }
  };

  // Handle result click (navigating to the link)
  const handleResultClick = (link) => {
    setIsDropdownVisible(false);
    navigate(link);
  };

  // Close the dropdown when clicking outside
  useOutsideClick(wrapperRef, () => setIsDropdownVisible(false));

  // Keyboard navigation in the dropdown
  const selectedIndex = useKeyboardNavigation(
    results.length,
    isDropdownVisible,
    (index) => handleResultClick(results[index].link) // Redirect on Enter
  );

  // Keyboard shortcut to focus the search input
  useKeyboardShortcut("meta+/", () => {
    document.getElementById("search-input").focus();
    setIsFocused(true); // Set focus on search input when keyboard shortcut is used
  });

  // Redirect to default dashboard if query is empty and not already on /dashboards/default
  useEffect(() => {
    if (!query && isFocused && location.pathname !== "/dashboards/default") {
      navigate("/dashboards/default");
    }
  }, [query, isFocused, location.pathname, navigate]);

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="text-sm flex items-center h-[28px] w-40 px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10">
        <span className="text-black/20 dark:text-white/20">
          <SearchIcon />
        </span>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search"
          onFocus={() => setIsFocused(true)} // Set focus when input is clicked
          onBlur={() => setIsFocused(false)} // Remove focus when input is blurred
          className="w-full ml-1 mr-2 bg-transparent text-black dark:text-white placeholder-black/20 dark:placeholder-white/20 outline-none focus:ring-0"
        />
        <span className="text-black/20 dark:text-white/20">
          <SearchKeyboardAction />
        </span>
      </div>
      {isDropdownVisible && results.length > 0 && (
        <motion.ul
          className="p-3 flex flex-col gap-1 absolute top-8 left-0 w-40 h-48 bg-gray-100 text-black shadow-lg overflow-y-auto rounded-lg z-20" // Ensure it's above the TopNav
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {results.map((result, index) => (
            <li
              key={index}
              onClick={() => handleResultClick(result.link)}
              className={`p-1 rounded-md text-sm cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-400 ${
                index === selectedIndex
                  ? "bg-gray-400 dark:bg-gray-600 text-white"
                  : ""
              }`}
            >
              {result.name}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default SearchInput;
