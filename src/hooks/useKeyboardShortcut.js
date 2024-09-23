import { useEffect } from "react";

export const useKeyboardShortcut = (keyCombo, callback) => {
  useEffect(() => {
    const keys = keyCombo.split("+");
    const lastKey = keys.slice(-1)[0]; // Safely get the last key without mutation
    const isMetaKey = keys.includes("meta");
    const isCtrlKey = keys.includes("ctrl");

    const handleKeyDown = (e) => {
      if (
        (isMetaKey && e.metaKey && e.key === lastKey) ||
        (isCtrlKey && e.ctrlKey && e.key === lastKey)
      ) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyCombo, callback]);
};
