import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import revenueData from "../../data/revenueData";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion"; // Import framer-motion

const RevenueLineChart = () => {
  const { theme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";
  const gridColor = isDarkMode ? "#444" : "#E2E8F0";
  const axisTextColor = isDarkMode ? "#CBD5E0" : "#1C1C1C";
  const axisLineColor = isDarkMode ? "#CBD5E0" : "#1C1C1C";
  const previousWeekColor = isDarkMode ? "#A8C5DA" : "#A8C5DA";
  const currentWeekColor = isDarkMode ? "#C6C7F8" : "#1C1C1C";

  const currentWeekTotal = "$58,211";
  const previousWeekTotal = "$68,768";

  return (
    <motion.section
      className="p-3 lg:p-6 lg:w-[74%] bg-catskillWhite dark:bg-mineShaft rounded-2xl flex flex-col gap-4"
      initial={{ opacity: 0, y: 50 }} // Start below the screen with 0 opacity
      animate={{ opacity: 1, y: 0 }} // Fade in and slide up
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
    >
      <div className="flex flex-col lg:flex-row items-center lg:divide-x gap-4">
        <h4 className="text-black dark:text-white text-sm font-semibold">
          Revenue
        </h4>
        <div className="flex items-center gap-2 lg:gap-5 lg:pl-6">
          <span className="lg:pl-1 lg:pr-2 lg:pb-0.5 flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: currentWeekColor, // Apply dynamic background color
              }}
            />
            <span className="text-xs leading-[18px] text-black dark:text-white">
              Current Week{" "}
              <span className="ml-[3px] font-semibold">{currentWeekTotal}</span>
            </span>
          </span>
          <span className="lg:pl-1 lg:pr-2 lg:pb-0.5 flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: previousWeekColor, // Apply dynamic background color
              }}
            />
            <span className="text-xs leading-[18px] text-black dark:text-white">
              Previous Week{" "}
              <span className="ml-[3px] font-semibold">
                {previousWeekTotal}
              </span>
            </span>
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={232}>
        <LineChart
          data={revenueData}
          margin={{ top: 25, right: -20, bottom: -1, left: -20 }} // Add margin to accommodate the custom legend
        >
          <CartesianGrid
            stroke={gridColor}
            vertical={false}
            strokeOpacity={0.5}
          />

          <XAxis
            dataKey="Month"
            tick={{
              fill: axisTextColor,
              dy: 7,
              fontSize: 12,
              fontWeight: 400,
              opacity: 0.4,
            }}
            axisLine={{ stroke: axisLineColor }}
            tickLine={false}
            strokeOpacity={0.3}
            strokeWidth={1}
            padding={{ left: 50, right: 65 }}
          />

          <YAxis
            tick={{
              fill: axisTextColor,
              dy: -18,
              dx: -5,
              fontSize: 12,
              fontWeight: 400,
              opacity: 0.4,
            }}
            axisLine={false}
            tickLine={false}
            domain={[0, 30000]}
            ticks={[0, 10000, 20000, 30000]}
            tickFormatter={(value) =>
              value === 0 ? value : `${value / 1000}M`
            }
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#313831", // Tooltip background
              border: "none",
              borderRadius: "8px", // Rounded corners
              color: "#fff", // Text color based on theme
              fontSize: "12px", // Font size
            }}
            itemStyle={{
              color: "#fff", // Text color for individual items
            }}
          />

          {/* Current Line (Black) */}
          <Line
            type="monotone"
            dataKey="Current"
            stroke={currentWeekColor}
            strokeWidth={3}
            dot={false}
          />

          {/* Previous Line (Blue) */}
          <Line
            type="monotone"
            dataKey="Previous"
            stroke={previousWeekColor}
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.section>
  );
};

export default RevenueLineChart;
