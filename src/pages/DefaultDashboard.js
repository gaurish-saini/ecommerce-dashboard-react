import React from "react";
import OverviewSection from "../containers/OverviewSection";
import ProjectionsBarChart from "../components/charts/ProjectionsBarChart";
import RevenueLineChart from "../components/charts/RevenueLineChart";
import RevenueByLocation from "../components/RevenueByLocation";
import TopSellingProducts from "../components/TopSellingProducts";
import TotalSalesDonutChart from "../components/charts/TotalSalesDonutChart";

const DefaultDashboard = () => {
  return (
    <div className="max-lg:mt-[70px] p-4 lg:p-[28px] bg-white dark:bg-black flex flex-col gap-[28px]">
      <div className="flex flex-col gap-4">
        <h4 className="py-1 px-2 text-sm font-semibold text-black dark:text-white">
          eCommerce
        </h4>
        <div className="w-full flex flex-col lg:flex-row gap-[28px]">
          <div className="lg:w-1/2">
            <OverviewSection />
          </div>
          <div className="lg:w-1/2">
            <ProjectionsBarChart />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[28px]">
        <RevenueLineChart />
        <RevenueByLocation />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[28px]">
        <TopSellingProducts />
        <TotalSalesDonutChart />
      </div>
    </div>
  );
};

export default DefaultDashboard;
