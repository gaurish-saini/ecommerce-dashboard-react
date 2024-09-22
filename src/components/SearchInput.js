import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import pagesData from "../data/pagesData";
import { ReactComponent as SearchIcon } from "../assets/images/searchIcon.svg";
import { ReactComponent as SearchKeyboardAction } from "../assets/images/searchKeyboardAction.svg";
import useOutsideClick from "../hooks/useOutsideClick";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

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

  const handleResultClick = (link) => {
    setIsDropdownVisible(false);
    navigate(link);
  };

  // Use the custom hook to detect outside clicks
  useOutsideClick(wrapperRef, () => setIsDropdownVisible(false));

  // Keyboard shortcut for search focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault();
        document.getElementById("search-input").focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
          className="w-full ml-1 mr-2 bg-transparent text-black dark:text-white placeholder-black/20 dark:placeholder-white/20 outline-none focus:ring-0"
        />
        <span className="text-black/20 dark:text-white/20">
          <SearchKeyboardAction />
        </span>
      </div>
      {isDropdownVisible && results.length > 0 && (
        <ul className="p-3 flex flex-col gap-1 absolute top-8 left-0 w-40 h-48 bg-gray-100 text-black shadow-lg overflow-y-auto rounded-lg z-10">
          {results.map((result, index) => (
            <li
              key={index}
              onClick={() => handleResultClick(result.link)}
              className="p-1 rounded-md text-sm cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-400"
            >
              {result.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
