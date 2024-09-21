import React from "react";
import OverviewSection from "../components/OverviewSection";
import ProjectionsBarChart from "../components/ProjectionsBarChart";
import RevenueLineChart from "../components/RevenueLineChart";
import RevenueByLocation from "../components/RevenueByLocation";
import TopSellingProducts from "../components/TopSellingProducts";
import TotalSalesDonutChart from "../components/TotalSalesDonutChart";

const DefaultDashboard = () => {
  return (
    <div className="p-6">
      {/* Overview Section */}
      <OverviewSection />

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ProjectionsBarChart />
        <RevenueByLocation />
      </div>

      {/* Revenue Line Chart */}
      <div className="mt-6">
        <RevenueLineChart />
      </div>

      {/* Top Selling Products and Total Sales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <TopSellingProducts />
        <TotalSalesDonutChart />
      </div>
    </div>
  );
};

export default DefaultDashboard;
