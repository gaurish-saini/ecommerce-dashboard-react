import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as CalendarBlank } from "../assets/images/calendarBlank.svg";
import { ReactComponent as MoreOptionsIcon } from "../assets/images/moreOptionsIcon.svg";

const OrderListTable = ({
  paginatedData,
  hoveredRow,
  selectedRowIndex,
  selectedRows,
  handleSelectAll,
  allSelected,
  handleRowHover,
  handleRowLeave,
  handleRowSelection,
  statusColors,
  rowVariants,
  containerVariants,
}) => {
  return (
    <section className="lg:h-[440px] mt-3 overflow-x-auto">
      <motion.table
        className="relative z-0 w-full text-left bg-transparent text-xs leading-[18px] table-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <thead>
          <tr className="text-black/40 dark:text-white/40 border-b border-black/20 dark:border-white/20">
            <th className="w-9 py-2.5 px-1">
              <input
                type="checkbox"
                className="cursor-pointer align-sub appearance-none w-[14px] h-[14px] border rounded-[4px] checked:bg-black dark:checked:bg-perfume checked:border-black/40 dark:checked:border-white/20 checked:focus:ring-0 checked:checked:before:content-['✓'] checked:before:text-white dark:checked:before:text-black checked:before:block checked:before:-mt-0.5"
                checked={allSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th className="w-[100px] py-2.5 font-normal">Order ID</th>
            <th className="w-[214px] py-2.5 font-normal">User</th>
            <th className="w-[214px] py-2.5 pl-1 font-normal">Project</th>
            <th className="w-[270px] py-2.5 pl-2 font-normal">Address</th>
            <th className="w-48 py-2.5 pl-3 font-normal">Date</th>
            <th className="w-[110px] py-2.5 pl-4 font-normal">Status</th>
            <th className="w-12 py-2.5 font-normal">
              <></>
            </th>
          </tr>
        </thead>
        <motion.tbody>
          {paginatedData.map((row, rowIndex) => (
            <motion.tr
              key={row.id}
              onMouseEnter={() => handleRowHover(rowIndex)}
              onMouseLeave={handleRowLeave}
              className={`group text-black dark:text-white border-b border-black/5 dark:border-white/5 
              hover:border-none hover:bg-catskillWhite dark:hover:bg-white/5 hover:shadow-md hover:rounded-lg 
              transition-all duration-300 ease-in-out h-[40px]
              ${
                rowIndex === hoveredRow - 1 ||
                (selectedRowIndex !== null && rowIndex === selectedRowIndex - 1)
                  ? "border-none"
                  : "border-b"
              }
              ${
                selectedRows.includes(row.id)
                  ? "bg-catskillWhite dark:bg-white/5 rounded-lg shadow-md border-none"
                  : ""
              }`}
              variants={rowVariants}
            >
              <td className="py-[7.5px] px-1 font-normal rounded-l-lg">
                <input
                  type="checkbox"
                  className="cursor-pointer align-sub appearance-none w-[14px] h-[14px] border rounded-[4px] checked:bg-black dark:checked:bg-perfume checked:border-black/40 dark:checked:border-white/20 checked:focus:ring-0 checked:checked:before:content-['✓'] checked:before:text-white dark:checked:before:text-black checked:before:block checked:before:-mt-0.5"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleRowSelection(row.id, rowIndex)}
                />
              </td>
              <td className="py-[7.5px] font-normal">{row.id}</td>
              <td className="flex items-center gap-2 py-[7.5px] font-normal">
                <img
                  className="min-w-6 h-6 rounded-full"
                  src={row.avatar}
                  alt="Avatar"
                  loading="lazy"
                />
                {row.user}
              </td>
              <td className="py-[7.5px] pl-1 font-normal">{row.project}</td>
              <td className="py-[7.5px] pl-2 font-normal">{row.address}</td>
              <td className="py-[7.5px] pl-3 font-normal">
                <div className="flex gap-1.5 items-center">
                  <CalendarBlank />
                  {row.date}
                </div>
              </td>
              <td className="py-[7.5px] pl-4 font-normal">
                <span
                  className={`flex items-center whitespace-nowrap ${
                    statusColors[row.status]
                  }`}
                >
                  <span className="min-w-1.5 h-1.5 rounded-full bg-current mr-[5px]"></span>
                  {row.status}
                </span>
              </td>
              <td className=" rounded-r-lg">
                <div className="w-12 text-center">
                  {(hoveredRow === rowIndex ||
                    selectedRows.includes(row.id)) && (
                    <button className="p-1">
                      <MoreOptionsIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                    </button>
                  )}
                </div>
              </td>
            </motion.tr>
          ))}
        </motion.tbody>
      </motion.table>
    </section>
  );
};

export default OrderListTable;
