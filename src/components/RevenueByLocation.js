import React, { useContext } from "react";
import WorldMap from "react-svg-worldmap";
import locationData from "../data/locationData";
import { ThemeContext } from "../context/ThemeContext";

const RevenueByLocation = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const maxRevenue = 100000;

  const countryRevenueData = locationData.map((city) => ({
    country: city.country,
    value: city.revenue,
  }));

  return (
    <div className="p-6 w-1/4 bg-catskillWhite dark:bg-mineShaft rounded-2xl flex flex-col gap-4">
      <h4 className="text-black dark:text-white text-sm font-semibold">
        Revenue by Location
      </h4>

      {/* Container for the map with custom width and height */}
      <div
        className="h-[82px] overflow-hidden"
        style={{
          backgroundColor: isDarkMode ? "#FFFFFF" : "transparent", // Conditional background based on theme
        }}
      >
        <WorldMap
          color="#A8C5DA" // Set the hex color for countries
          backgroundColor="transparent" // Set map background to transparent
          size="sm" // Adjust the map size
          data={countryRevenueData}
          tooltipTextFunction={(countryName, isoCode, value) =>
            `${countryName}: $${(value / 1000).toFixed(1)}K`
          }
          richInteraction={true} // Enable rich interaction (zoom, pan, etc.)
        />
      </div>

      {/* Revenue Data with Progress Bars */}
      <ul className="flex flex-col gap-4">
        {locationData.map((city, index) => {
          const percentage = (city.revenue / maxRevenue) * 100; // Calculate percentage based on fixed maxRevenue
          return (
            <li key={index}>
              <div className="flex justify-between text-xs leading-[18px] text-black dark:text-white">
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RevenueByLocation;
