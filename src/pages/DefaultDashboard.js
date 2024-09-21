import React from "react";
import OverviewSection from "../components/OverviewSection";
import ProjectionsBarChart from "../components/ProjectionsBarChart";
import RevenueLineChart from "../components/RevenueLineChart";
import RevenueByLocation from "../components/RevenueByLocation";

const DefaultDashboard = () => {
  return (
    <div className="p-6">
      {/* Overview Section */}
      <OverviewSection />

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Projections vs Actuals */}
        <ProjectionsBarChart />

        {/* Revenue by Location */}
        <RevenueByLocation />
      </div>

      {/* Revenue Line Chart */}
      <div className="mt-6">
        <RevenueLineChart />
      </div>
    </div>
  );
};

export default DefaultDashboard;
