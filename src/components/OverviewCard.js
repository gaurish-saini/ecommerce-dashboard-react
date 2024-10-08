import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as PositiveTrendIcon } from "../assets/images/positiveTrendIcon.svg";
import { ReactComponent as NegativeTrendIcon } from "../assets/images/negativeTrendIcon.svg";
import { motion } from "framer-motion"; // Import Framer Motion

const OverviewCard = ({
  title,
  value,
  isPositive,
  percentageChange,
  cardStyle,
}) => {
  const { theme } = useContext(ThemeContext);

  // Apply theme-specific classes
  const lightClasses = {
    customers: "bg-pattensBlue text-black",
    orders: "bg-catskillWhite text-black",
    revenue: "bg-catskillWhite text-black",
    growth: "bg-linkWater text-black",
  };

  const darkClasses = {
    customers: "bg-pattensBlue",
    orders: "bg-mineShaft text-white",
    revenue: "bg-mineShaft text-white",
    growth: "bg-linkWater",
  };

  const appliedClasses =
    theme === "light" ? lightClasses[cardStyle] : darkClasses[cardStyle];

  return (
    <motion.div
      className={`p-6 rounded-2xl flex flex-col cursor-pointer ${appliedClasses}`}
      whileHover={{ scale: 1.05 }} // Slight scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on click/tap
      transition={{ type: "spring", stiffness: 300 }} // Springy effect
    >
      <h4 className="mb-2 text-sm font-semibold">{title}</h4>
      <div className="flex flex-row hover:flex-row-reverse items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 rounded-lg">
        <span className="text-2xl leading-9 font-semibold">
          {value.toLocaleString()}
        </span>
        <span className="mr-px mb-px text-xs leading-[18px] inline-flex items-center gap-[5.5px]">
          {percentageChange}
          {isPositive ? <PositiveTrendIcon /> : <NegativeTrendIcon />}
        </span>
      </div>
    </motion.div>
  );
};

export default OverviewCard;
