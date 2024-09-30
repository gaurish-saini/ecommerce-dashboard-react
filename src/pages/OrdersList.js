import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import OrderTable from "../containers/OrdersTable";

// Animation variants for the main content
const mainVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.3, // Stagger child animations
    },
  },
};

const OrderList = () => {
  return (
    <motion.div
      variants={mainVariants} // Apply animation to the main container
      initial="hidden"
      animate="visible"
      className="max-lg:mt-[70px] p-[28px] flex flex-col"
    >
      {/* Search, Filters, and Sort Section */}
      <motion.h4
        className="text-sm px-2 py-1 text-black dark:text-white font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Order List
      </motion.h4>

      {/* The animated table component */}
      <OrderTable />
    </motion.div>
  );
};

export default OrderList;
