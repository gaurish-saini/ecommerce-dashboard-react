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
import revenueData from "../data/revenueData";
import { ThemeContext } from "../context/ThemeContext";

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
    <div className="p-4 w-[662px] bg-catskillWhite dark:bg-mineShaft rounded-2xl flex flex-col gap-4 h-full">
      <svg width="0" height="0">
        <defs>
          <radialGradient
            id="blueLineGradient"
            cx="45.49%"
            cy="12.02%"
            r="53.78%"
            fx="45.49%"
            fy="12.02%"
          >
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="rgba(217, 217, 217, 0)" />
          </radialGradient>
        </defs>
      </svg>
      <div className="flex items-center divide-x gap-4">
        <h4 className="text-black dark:text-white text-sm font-semibold">
          Revenue
        </h4>
        <div className="flex items-center gap-4 pl-4">
          <span className="flex items-center gap-[5px]">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: currentWeekColor, // Apply dynamic background color
              }}
            />
            <span className="text-xs leading-[18px] text-black dark:text-white">
              Current Week{" "}
              <span className="font-semibold">{currentWeekTotal}</span>
            </span>
          </span>
          <span className="flex items-center gap-[5px]">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: previousWeekColor, // Apply dynamic background color
              }}
            />
            <span className="text-xs leading-[18px] text-black dark:text-white">
              Previous Week{" "}
              <span className="font-semibold">{previousWeekTotal}</span>
            </span>
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={revenueData}
          margin={{ top: 30, right: 20, bottom: 0, left: -10 }} // Add margin to accommodate the custom legend
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
              dy: 10,
              fontSize: 12,
              fontWeight: 400,
              opacity: 0.4,
            }}
            axisLine={{ stroke: axisLineColor }}
            tickLine={false}
            strokeOpacity={0.3}
            padding={{ left: 30, right: 30 }}
          />

          <YAxis
            tick={{
              fill: axisTextColor,
              dy: -5,
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

          <Tooltip />

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
    </div>
  );
};

export default RevenueLineChart;
