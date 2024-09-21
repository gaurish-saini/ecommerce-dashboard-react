import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import totalSalesData from "../data/totalSalesData";

// Custom colors for each slice of the pie
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const TotalSalesDonutChart = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h4 className="text-gray-500 dark:text-gray-300 text-sm font-semibold mb-4">
        Total Sales
      </h4>
      <PieChart width={400} height={300}>
        <Pie
          data={totalSalesData}
          cx={200}
          cy={150}
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {totalSalesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default TotalSalesDonutChart;
