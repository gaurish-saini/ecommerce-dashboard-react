import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as RightArrow } from "../../assets/images/rightArrow.svg";

const Pagination = ({
  currentPage,
  totalPages,
  handlePageSelect,
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <motion.section className="pagination-controls flex gap-2 mt-3.5 items-center justify-end">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="cursor-pointer p-1 w-7 h-7 transform rotate-180"
      >
        <RightArrow />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageSelect(page)}
            className={`cursor-pointer text-sm p-1 w-7 h-7 ${
              currentPage === page
                ? "bg-black/5 text-black rounded-lg dark:bg-white/10 dark:text-white"
                : "text-black dark:text-white"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="cursor-pointer p-1 w-6 h-6"
      >
        <RightArrow />
      </button>
    </motion.section>
  );
};

export default Pagination;
