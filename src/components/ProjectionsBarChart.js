import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import projectionsData from "../data/projectionsData";
import { ThemeContext } from "../context/ThemeContext";

const ProjectionsBarChart = () => {
  const { theme } = useContext(ThemeContext); // Access dark mode from context

  const isDarkMode = theme === "dark"; // Check if dark mode is active
  const barWidth = 20; // Adjust bar width

  const projectionFill = isDarkMode ? "#A8C5DA" : "#A8C5DA"; // Dark vs Light for projection
  const actualFill = isDarkMode ? "#A8C5DA" : "#A8C5DA"; // Dark vs Light for actual
  const gridColor = isDarkMode ? "#444" : "#E2E8F0"; // Dark vs Light grid color
  const axisTextColor = isDarkMode ? "#CBD5E0" : "#1C1C1C"; // Dark vs Light axis text color
  const axisLineColor = isDarkMode ? "#CBD5E0" : "#1C1C1C"; // X-axis color

  return (
    <div className="p-4 bg-catskillWhite dark:bg-mineShaft rounded-2xl flex flex-col gap-4 h-full">
      <h4 className="text-black dark:text-white text-sm font-semibold">
        Projections vs Actuals
      </h4>

      <ResponsiveContainer width="100%" height={175}>
        <BarChart
          data={projectionsData}
          margin={{ top: 10, right: 0, bottom: 0, left: -21 }}
        >
          {/* Y-Axis without axis line, only numbers */}
          <YAxis
            tick={{
              fill: axisTextColor, // Font color
              dy: -5, // Move tick labels up
              dx: -5,
              fontSize: 12, // Font size
              fontWeight: 400, // Font weight
              opacity: 0.4, // Opacity of tick labels
            }} // Set tick color based on dark mode
            axisLine={false} // Hide axis line
            tickLine={false} // Hide tick line
            domain={[0, 30000]} // Manually set the domain to match the design
            ticks={[0, 10000, 20000, 30000]} // Set ticks manually as per design
            tickFormatter={(value) =>
              value === 0 ? value : `${value / 1000}M`
            }
          />

          {/* X-Axis for months */}
          <XAxis
            dataKey="Month"
            tick={{
              fill: axisTextColor, // Move tick labels up
              dy: 10,
              fontSize: 12, // Font size
              fontWeight: 400, // Font weight
              opacity: 0.4,
            }} // Adjust tick color
            axisLine={{ stroke: axisLineColor }}
            tickLine={false} // Hide tick line
            strokeOpacity={0.3}
          />

          {/* Solid horizontal lines for Cartesian grid */}
          <CartesianGrid
            stroke={gridColor}
            vertical={false}
            strokeOpacity={0.5}
          />

          {/* Bars for Actual and Projections */}
          <Tooltip cursor={{ fill: "transparent" }} />

          {/* Actual Bar */}
          <Bar
            dataKey="Actual"
            fill={actualFill} // Conditional color for actual
            barSize={barWidth} // Adjust bar width
            // Rounded top corners
            stackId="a"
          />

          {/* Projection Bar (overlapping with actual) */}
          <Bar
            dataKey="Projection"
            fill={projectionFill} // Conditional color for projection
            barSize={barWidth} // Same bar width for overlap
            opacity={0.5} // Slightly transparent to allow overlap
            radius={[4, 4, 0, 0]}
            stackId="a"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsBarChart;
