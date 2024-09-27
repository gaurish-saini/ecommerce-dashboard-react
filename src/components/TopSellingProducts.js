import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation
import topSellingProductsData from "../data/topSellingProductsData";

// Define animation variants for the section and table rows
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const TopSellingProducts = () => {
  return (
    <motion.section
      className="p-6 w-[74%] bg-catskillWhite dark:bg-mineShaft rounded-2xl"
      variants={containerVariants} // Apply animation to the section
      initial="hidden"
      animate="visible"
    >
      <motion.h4
        className="text-black dark:text-white text-sm font-semibold mb-1"
        variants={itemVariants} // Animate the header
      >
        Top Selling Products
      </motion.h4>

      <motion.table className="w-full text-left text-xs leading-[18px]">
        <motion.thead variants={containerVariants}>
          <motion.tr
            className="border-b border-black/20 dark:border-white/20 text-black/40 dark:text-white/40 font-normal"
            variants={headerVariants} // Apply animation to the table row
          >
            <motion.th
              className="w-56 py-[11px] font-normal"
              variants={headerVariants}
            >
              Name
            </motion.th>
            <motion.th
              className="w-[130px] px-3.5 font-normal"
              variants={headerVariants}
            >
              Price
            </motion.th>
            <motion.th
              className="w-[130px] px-3.5 font-normal"
              variants={headerVariants}
            >
              Quantity
            </motion.th>
            <motion.th
              className="w-[130px] px-3.5 font-normal"
              variants={headerVariants}
            >
              Amount
            </motion.th>
          </motion.tr>
        </motion.thead>

        <motion.tbody>
          {topSellingProductsData.map((product, index) => (
            <motion.tr
              key={index}
              className="text-black dark:text-white hover:bg-perfume/10"
              variants={itemVariants} // Animate each table row
            >
              <td className="py-[11px]">{product.name}</td>
              <td className="py-[11px] px-3.5">{product.price}</td>
              <td className="py-[11px] px-3.5">{product.quantity}</td>
              <td className="py-[11px] px-3.5">{product.amount}</td>
            </motion.tr>
          ))}
        </motion.tbody>
      </motion.table>
    </motion.section>
  );
};

export default TopSellingProducts;
