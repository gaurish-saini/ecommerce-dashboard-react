import React from "react";
import topSellingProductsData from "../data/topSellingProductsData";

const TopSellingProducts = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h4 className="text-gray-500 dark:text-gray-300 text-sm font-semibold mb-4">
        Top Selling Products
      </h4>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2 text-gray-700 dark:text-gray-400">Name</th>
            <th className="pb-2 text-gray-700 dark:text-gray-400">Price</th>
            <th className="pb-2 text-gray-700 dark:text-gray-400">Quantity</th>
            <th className="pb-2 text-gray-700 dark:text-gray-400">Amount</th>
          </tr>
        </thead>
        <tbody>
          {topSellingProductsData.map((product, index) => (
            <tr
              key={index}
              className="border-t border-gray-200 dark:border-gray-700"
            >
              <td className="py-2 text-gray-900 dark:text-white">
                {product.name}
              </td>
              <td className="py-2 text-gray-900 dark:text-white">
                {product.price}
              </td>
              <td className="py-2 text-gray-900 dark:text-white">
                {product.quantity}
              </td>
              <td className="py-2 text-gray-900 dark:text-white">
                {product.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
