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
import projectionsData from "../../data/projectionsData";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion"; // Import Framer Motion

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
    <motion.section
      className="relative z-0 p-3 lg:px-6 lg:py-5 bg-catskillWhite dark:bg-mineShaft rounded-2xl flex flex-col items-center lg:items-start gap-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h4 className="pt-0.5 text-black dark:text-white text-sm font-semibold">
        Projections vs Actuals
      </h4>

      <ResponsiveContainer width="100%" height={175}>
        <BarChart
          data={projectionsData}
          margin={{ top: 16, right: 0, bottom: 5, left: -18 }}
        >
          <YAxis
            tick={{
              fill: axisTextColor,
              dy: -5,
              dx: -7,
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
          />

          <CartesianGrid
            stroke={gridColor}
            vertical={false}
            strokeOpacity={0.5}
          />

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "#313831",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "12px",
            }}
            itemStyle={{
              color: "#fff",
            }}
          />

          {/* Actual Bar */}
          <Bar
            dataKey="Actual"
            fill={actualFill} // Conditional color for actual
            barSize={barWidth} // Adjust bar width
            // Rounded top corners
            stackId="a"
            isAnimationActive={false}
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
    </motion.section>
  );
};

export default ProjectionsBarChart;
