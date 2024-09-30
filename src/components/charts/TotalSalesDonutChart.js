import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { motion } from "framer-motion"; // Import framer-motion for animation
import { ThemeContext } from "../../context/ThemeContext";
import totalSalesData from "../../data/totalSalesData";

// Custom colors for light and dark mode
const LIGHT_COLORS = ["#1C1C1C", "#95A4FC", "#BAEDBD", "#B1E3FF"];
const DARK_COLORS = ["#C6C7F8", "#95A4FC", "#BAEDBD", "#B1E3FF"];

// Animation variants for surrounding elements
const listVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

// Animation for individual list items
const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const TotalSalesDonutChart = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const COLORS = isDarkMode ? DARK_COLORS : LIGHT_COLORS;
  const total = totalSalesData.reduce((acc, item) => acc + item.value, 0);

  return (
    <motion.section
      className="p-3 lg:p-6 lg:w-[23%] bg-catskillWhite dark:bg-mineShaft rounded-2xl flex flex-col gap-4"
      initial="hidden"
      animate="visible"
      variants={listVariants} // Apply animation to the surrounding section
    >
      <motion.h4
        className="lg:px-0.5 max-lg:text-center tracking-wide text-black dark:text-white text-sm font-semibold"
        variants={listItemVariants} // Animate the heading
      >
        Total Sales
      </motion.h4>

      {/* Donut Chart */}
      <div className="flex justify-center">
        <PieChart width={120} height={120}>
          <Pie
            data={totalSalesData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            cornerRadius={8}
            paddingAngle={3}
            dataKey="value"
          >
            {totalSalesData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `${((value / total) * 100).toFixed(2)}%`}
            contentStyle={{
              backgroundColor: "#313831",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "12px",
            }}
            itemStyle={{ color: "#fff" }}
          />
        </PieChart>
      </div>

      {/* Sales Labels */}
      <motion.ul
        className="text-xs leading-[18px] flex flex-col gap-3 text-black dark:text-gray-300"
        variants={listVariants} // Stagger the fade and slide-in animation for the list items
      >
        {totalSalesData.map((entry, index) => (
          <motion.li
            key={index}
            className="py-0.5 pl-3 flex justify-between hover:bg-black/5 dark:hover:bg-white/5 rounded-lg"
            variants={listItemVariants} // Apply animation to each item
          >
            <div className="flex items-center">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mr-1"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="tracking-wide">{entry.name}</span>
            </div>
            <span className="w-[53px]">${entry.value.toFixed(2)}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default TotalSalesDonutChart;
