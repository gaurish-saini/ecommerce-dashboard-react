import React from "react";
import OverviewSection from "../components/OverviewSection";
import ProjectionsBarChart from "../components/ProjectionsBarChart";
import RevenueLineChart from "../components/RevenueLineChart";
import RevenueByLocation from "../components/RevenueByLocation";
import TopSellingProducts from "../components/TopSellingProducts";
import TotalSalesDonutChart from "../components/TotalSalesDonutChart";

const DefaultDashboard = () => {
  return (
    <div className="p-[28px] bg-white dark:bg-black">
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-semibold text-black dark:text-white">
          eCommerce
        </h4>
        <div className="w-full flex gap-[28px]">
          <div className="w-1/2">
            <OverviewSection />
          </div>
          <div className="w-1/2">
            <ProjectionsBarChart />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <RevenueLineChart />
        <RevenueByLocation />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <TopSellingProducts />
        <TotalSalesDonutChart />
      </div>
    </div>
  );
};

export default DefaultDashboard;
