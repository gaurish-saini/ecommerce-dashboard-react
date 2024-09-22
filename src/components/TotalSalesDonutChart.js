import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { ThemeContext } from "../context/ThemeContext"; // Assuming you have ThemeContext for dark mode
import totalSalesData from "../data/totalSalesData";

// Custom colors for light and dark mode
const LIGHT_COLORS = ["#1C1C1C", "#95A4FC", "#BAEDBD", "#B1E3FF"];
const DARK_COLORS = ["#C6C7F8", "#95A4FC", "#BAEDBD", "#B1E3FF"];

const TotalSalesDonutChart = () => {
  const { theme } = useContext(ThemeContext); // Get theme context
  const isDarkMode = theme === "dark";

  const COLORS = isDarkMode ? DARK_COLORS : LIGHT_COLORS;

  const total = totalSalesData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="p-6 w-[202px] bg-catskillWhite dark:bg-mineShaft rounded-2xl flex flex-col gap-4">
      <h4 className="text-black dark:text-white text-sm font-semibold">
        Total Sales
      </h4>

      {/* Donut Chart */}
      <div className="flex justify-center">
        <PieChart width={120} height={120}>
          <Pie
            data={totalSalesData}
            cx="50%"
            cy="50%"
            innerRadius={32} // Adjust inner radius to make it more like a donut
            outerRadius={50} // Adjust outer radius
            cornerRadius={8} // Rounded corners for the segments
            paddingAngle={3} // Space between segments
            dataKey="value"
          >
            {totalSalesData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]} // Dynamic color based on theme
                stroke="none"
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `${((value / total) * 100).toFixed(2)}%`} // Show percentage
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
        </PieChart>
      </div>

      {/* Sales Labels */}
      <ul className="mt-4 text-xs leading-[18px] flex flex-col gap-3 text-black dark:text-gray-300">
        {totalSalesData.map((entry, index) => (
          <li key={index} className="flex justify-between">
            <div className="flex items-center">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              {entry.name}
            </div>
            <span>${entry.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalSalesDonutChart;
