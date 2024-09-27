import React, { useContext } from "react";
import { motion } from "framer-motion";
import WorldMap from "react-svg-worldmap";
import locationData from "../data/locationData";
import { ThemeContext } from "../context/ThemeContext";

// Define animations for the container and list items
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const RevenueByLocation = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const maxRevenue = 100000;

  const countryRevenueData = locationData.map((city) => ({
    country: city.country,
    value: city.revenue,
  }));

  return (
    <motion.section
      className="px-6 py-[18px] w-[23%] bg-catskillWhite dark:bg-mineShaft rounded-2xl flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h4
        className="p-1 text-black dark:text-white text-sm font-semibold"
        variants={itemVariants}
      >
        Revenue by Location
      </motion.h4>

      {/* Container for the map with custom width and height */}
      <motion.div
        className="h-[82px] overflow-hidden"
        style={{
          backgroundColor: isDarkMode ? "#FFFFFF" : "transparent",
        }}
        variants={itemVariants}
      >
        <WorldMap
          color="#A8C5DA"
          backgroundColor="transparent"
          size="sm"
          data={countryRevenueData}
          tooltipTextFunction={(countryName, isoCode, value) =>
            `${countryName}: $${(value / 1000).toFixed(1)}K`
          }
          richInteraction={true}
        />
      </motion.div>

      {/* Revenue Data with Progress Bars */}
      <motion.ul className="flex flex-col gap-[17px]">
        {locationData.map((city, index) => {
          const percentage = (city.revenue / maxRevenue) * 100;
          return (
            <motion.li key={index} className="" variants={itemVariants}>
              <div className="pl-1 flex justify-between text-xs leading-[18px] text-black dark:text-white">
                <span>{city.city}</span>
                <span>{city.revenue / 1000}K</span>
              </div>
              {/* Progress bar */}
              <div className="h-0.5 w-full bg-pigeonPost/40 rounded-full">
                <div
                  className="h-0.5 bg-pigeonPost rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.section>
  );
};

export default RevenueByLocation;
