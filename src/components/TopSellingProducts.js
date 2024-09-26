import React from "react";
import topSellingProductsData from "../data/topSellingProductsData";

const TopSellingProducts = () => {
  return (
    <section className="p-6 w-3/4 bg-catskillWhite dark:bg-mineShaft rounded-2xl flex flex-col gap-4">
      <h4 className="text-black dark:text-white text-sm font-semibold mb-1">
        Top Selling Products
      </h4>
      <table className="w-full text-left text-xs leading-[18px]">
        <thead>
          <tr className="border-b border-black/20 dark:border-white/20 text-black/40 dark:text-white/40 font-normal">
            <th className="py-[11px] font-normal">Name</th>
            <th className="py-[11px] font-normal">Price</th>
            <th className="py-[11px] font-normal">Quantity</th>
            <th className="py-[11px] font-normal">Amount</th>
          </tr>
        </thead>
        <tbody>
          {topSellingProductsData.map((product, index) => (
            <tr
              key={index}
              className="text-black dark:text-white hover:bg-perfume/10"
            >
              <td className="py-[11px]">{product.name}</td>
              <td className="py-[11px]">{product.price}</td>
              <td className="py-[11px]">{product.quantity}</td>
              <td className="py-[11px]">{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TopSellingProducts;
