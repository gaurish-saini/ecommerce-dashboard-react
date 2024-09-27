import React from "react";
import OverviewCard from "../components/OverviewCard";
import overviewData from "../data/overviewData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Cards start off hidden and slightly below
  visible: { opacity: 1, y: 0 }, // Slide up and fade in
};

const OverviewSection = () => {
  return (
    <motion.section
      className="grid grid-cols-2 gap-[28px]"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }} // Stagger animation between cards
    >
      <motion.div variants={cardVariants} transition={{ duration: 0.5 }}>
        <OverviewCard
          title="Customers"
          value={overviewData.customers.value}
          percentageChange={overviewData.customers.percentageChange}
          isPositive={true}
          cardStyle="customers"
        />
      </motion.div>

      <motion.div variants={cardVariants} transition={{ duration: 0.5 }}>
        <Link to="/orders">
          <OverviewCard
            title="Orders"
            value={overviewData.orders.value}
            percentageChange={overviewData.orders.percentageChange}
            isPositive={false}
            cardStyle="orders"
          />
        </Link>
      </motion.div>

      <motion.div variants={cardVariants} transition={{ duration: 0.5 }}>
        <OverviewCard
          title="Revenue"
          value={overviewData.revenue.value}
          percentageChange={overviewData.revenue.percentageChange}
          isPositive={true}
          cardStyle="revenue"
        />
      </motion.div>

      <motion.div variants={cardVariants} transition={{ duration: 0.5 }}>
        <OverviewCard
          title="Growth"
          value={overviewData.growth.value}
          percentageChange={overviewData.growth.percentageChange}
          isPositive={true}
          cardStyle="growth"
        />
      </motion.div>
    </motion.section>
  );
};

export default OverviewSection;
