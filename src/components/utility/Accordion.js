import React, { useState } from "react";
import { ReactComponent as RightArrow } from "../../assets/images/rightArrow.svg";

const Accordion = ({ title, IconComponent, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Accordion Header with Icon */}
      <button
        onClick={toggleAccordion}
        className="py-1 flex rounded-lg items-center w-full text-left hover:bg-black/5 dark:hover:bg-gray-700 cursor-pointer"
      >
        <span
          className={`ml-[12.5px] mr-[7.5px] text-black/20 dark:text-white/20 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <RightArrow />
        </span>

        {/* Render the icon dynamically */}
        {IconComponent && (
          <IconComponent className="ml-0.5 mr-[5px] text-black dark:text-white" />
        )}

        <span className="text-sm text-black dark:text-white">{title}</span>
      </button>

      {/* Accordion Body */}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "mt-1 max-h-screen" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
