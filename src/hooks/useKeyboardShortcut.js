import { useEffect } from "react";

export const useKeyboardShortcut = (keyCombo, callback) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const keys = keyCombo.split("+");
      const isMetaKey = keys.includes("meta");
      const isCtrlKey = keys.includes("ctrl");

      if (
        (isMetaKey && e.metaKey && e.key === keys.pop()) ||
        (isCtrlKey && e.ctrlKey && e.key === keys.pop())
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
