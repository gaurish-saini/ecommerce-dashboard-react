import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import revenueData from "../data/revenueData";

const RevenueLineChart = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h4 className="text-gray-500 dark:text-gray-300 text-sm font-semibold mb-4">
        Revenue
      </h4>
      <LineChart width={600} height={300} data={revenueData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="current" stroke="#8884d8" />
        <Line type="monotone" dataKey="previous" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default RevenueLineChart;
