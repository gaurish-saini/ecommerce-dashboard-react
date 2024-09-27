import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((item) => item);

  const breadcrumbsVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "auto", opacity: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} // Delay for smooth entrance
      className="text-sm flex items-center gap-2"
    >
      {pathnames.map((value, index) => {
        const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={breadcrumbsVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {index !== 0 && (
              <span className="text-black/20 dark:text-white/20">/</span>
            )}
            {isLast ? (
              <span className="px-2 py-1 text-black dark:text-white capitalize">
                {value}
              </span>
            ) : (
              <Link
                to={pathTo}
                className="px-2 py-1 tracking-wide text-black/40 dark:text-white/40 hover:underline capitalize"
              >
                {value}
              </Link>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Breadcrumbs;
