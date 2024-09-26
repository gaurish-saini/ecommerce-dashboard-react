import React from "react";
import OverviewCard from "../components/OverviewCard";
import overviewData from "../data/overviewData";
import { Link } from "react-router-dom";

const OverviewSection = () => {
  return (
    <section className="grid grid-cols-2 gap-[28px]">
      <OverviewCard
        title="Customers"
        value={overviewData.customers.value}
        percentageChange={overviewData.customers.percentageChange}
        isPositive={true}
        cardStyle="customers"
      />
      <Link to="/orders">
        <OverviewCard
          title="Orders"
          value={overviewData.orders.value}
          percentageChange={overviewData.orders.percentageChange}
          isPositive={false}
          cardStyle="orders"
        />
      </Link>
      <OverviewCard
        title="Revenue"
        value={overviewData.revenue.value}
        percentageChange={overviewData.revenue.percentageChange}
        isPositive={true}
        cardStyle="revenue"
      />
      <OverviewCard
        title="Growth"
        value={overviewData.growth.value}
        percentageChange={overviewData.growth.percentageChange}
        isPositive={true}
        cardStyle="growth"
      />
    </section>
  );
};

export default OverviewSection;
