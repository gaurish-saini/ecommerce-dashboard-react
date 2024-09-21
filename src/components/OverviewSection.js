import React from "react";
import OverviewCard from "../components/OverviewCard";
import overviewData from "../data/overviewData";

const OverviewSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <OverviewCard
        title="Customers"
        value={overviewData.customers.value}
        percentageChange={overviewData.customers.percentageChange}
        isPositive={true}
      />
      <OverviewCard
        title="Orders"
        value={overviewData.orders.value}
        percentageChange={overviewData.orders.percentageChange}
        isPositive={false}
      />
      <OverviewCard
        title="Revenue"
        value={overviewData.revenue.value}
        percentageChange={overviewData.revenue.percentageChange}
        isPositive={true}
      />
      <OverviewCard
        title="Growth"
        value={overviewData.growth.value}
        percentageChange={overviewData.growth.percentageChange}
        isPositive={true}
      />
    </div>
  );
};

export default OverviewSection;
