import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../components/utility/Accordion";
import pagesData from "../data/pagesData";

const Pages = () => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-sm px-2 py-1 text-black/40 dark:text-white/40">
        Pages
      </h4>
      {/* Dynamically Render Accordions with Icons */}
      {Object.keys(pagesData).map((sectionKey, index) => {
        const section = pagesData[sectionKey];
        const IconComponent = section.icon; // Use IconComponent directly

        return (
          <Accordion
            key={index}
            title={section.title}
            IconComponent={IconComponent} // Passing the icon as a component
          >
            <ul>
              {section.items.map((item, subIndex) => (
                <li
                  key={subIndex}
                  className="text-sm text-black dark:text-white py-1 pl-[28px] pr-2"
                >
                  <Link to={item.link} className="ml-6">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Pages;
