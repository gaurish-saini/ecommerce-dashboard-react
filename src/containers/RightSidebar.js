import React from "react";
import QuickInfoPanel from "../components/QuickInfoPanel";
import notificationsData from "../data/notificationsData";
import activitiesData from "../data/activitiesData";
import contactsData from "../data/contactsData";
import { motion } from "framer-motion"; // Import Framer Motion

// Animation variants for child components
const childVariants = {
  hidden: { opacity: 0, y: 20 }, // Hidden state: faded and shifted down
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }, // Transition for fade-in and slide-up
  },
};

const RightSidebar = ({ isOpen }) => {
  return (
    <aside
      className={`overflow-y-auto transition-transform duration-1000 lg:w-[19.44%] h-full absolute top-[70px] lg:top-0 right-0 flex flex-col gap-6 p-5 bg-white dark:bg-black border-l border-black/10 dark:border-white/10 ${
        !isOpen ? "translate-x-full" : ""
      }`}
    >
      {/* Apply Framer Motion to child components */}
      <motion.div initial="hidden" animate="visible" variants={childVariants}>
        <QuickInfoPanel
          sectionTitle="Notifications"
          sectionData={notificationsData}
          verticleDivision={false}
          roundedIcon={false}
          timeStamp={true}
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={childVariants}>
        <QuickInfoPanel
          sectionTitle="Activities"
          sectionData={activitiesData}
          verticleDivision={true}
          roundedIcon={true}
          timeStamp={true}
        />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={childVariants}>
        <QuickInfoPanel
          sectionTitle="Contacts"
          sectionData={contactsData}
          verticleDivision={false}
          roundedIcon={true}
          timeStamp={false}
        />
      </motion.div>
    </aside>
  );
};

export default RightSidebar;
