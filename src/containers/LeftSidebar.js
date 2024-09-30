import React from "react";
import Brand from "../components/Brand";
import Favourites from "../components/Favourites";
import Dashboards from "../components/Dashboards";
import Pages from "../components/Pages";
import { motion } from "framer-motion"; // Import Framer Motion

// Define animation variants for child components
const childVariants = {
  hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and slight downward position
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }, // Smooth ease-out effect
  },
};

const LeftSidebar = ({ isOpen }) => {
  return (
    <aside
      className={`overflow-y-auto max-lg:z-10 transition-transform duration-1000 lg:w-[14.7%] h-full absolute top-[70px] lg:top-0 left-0 flex flex-col gap-4 px-4 py-6 bg-white dark:bg-black border-r border-black/10 dark:border-white/10 ${
        !isOpen ? "-translate-x-full" : ""
      }`}
    >
      {/* Apply motion.div to each component for fade-in and slide-up effect */}
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"} // Toggle based on sidebar state
        variants={childVariants}
      >
        <Brand />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"} // Toggle based on sidebar state
        variants={childVariants}
        transition={{ delay: 0.1 }} // Delay for staggered effect
      >
        <Favourites />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"} // Toggle based on sidebar state
        variants={childVariants}
        transition={{ delay: 0.2 }} // Delay for staggered effect
      >
        <Dashboards />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"} // Toggle based on sidebar state
        variants={childVariants}
        transition={{ delay: 0.3 }} // Delay for staggered effect
      >
        <Pages />
      </motion.div>
    </aside>
  );
};

export default LeftSidebar;
