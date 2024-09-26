import React from "react";

const QuickInfoPanel = ({
  sectionTitle,
  sectionData,
  verticleDivision,
  roundedIcon,
  timeStamp,
}) => {
  return (
    <section>
      <h4 className="py-2 px-1 text-black dark:text-white text-sm font-semibold mb-2">
        {sectionTitle}
      </h4>
      <ul className="flex flex-col gap-2">
        {sectionData.map((data, index) => (
          <li
            key={index}
            className={`p-1 flex gap-2 justify-start  ${
              data.name ? "items-center" : "items-start"
            }`}
          >
            <div className="relative">
              <img
                src={data.icon}
                alt="Icon"
                width={24}
                height={24}
                className={`min-w-6 h-6 ${roundedIcon ? "rounded-full" : ""}`}
              />
              {verticleDivision && index !== sectionData.length - 1 && (
                <span className="absolute left-[50%] mt-2 w-px h-[14px] bg-black/10 dark:bg-white/10"></span>
              )}
            </div>
            <div className="w-full">
              {data.message && (
                <div className="text-sm text-black dark:text-white truncate w-48 tracking-[0.1px]">
                  {data.message}
                </div>
              )}
              {data.name && (
                <div className="text-sm text-black dark:text-white truncate w-48">
                  {data.name}
                </div>
              )}
              {timeStamp && (
                <div className="text-black/40 dark:text-white/40 text-xs leading-[18px]">
                  {data.time}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickInfoPanel;
