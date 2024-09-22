import { useState, useEffect } from "react";

export const useKeyboardNavigation = (
  listLength,
  isDropdownVisible,
  onEnter
) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = (e) => {
    if (isDropdownVisible && listLength > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex === listLength - 1 ? 0 : prevIndex + 1
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex <= 0 ? listLength - 1 : prevIndex - 1
        );
      } else if (e.key === "Enter" && selectedIndex !== -1) {
        onEnter(selectedIndex);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [listLength, selectedIndex, isDropdownVisible]);

  return selectedIndex;
};
