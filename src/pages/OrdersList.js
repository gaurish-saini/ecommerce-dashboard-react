import React from "react";
import OrderTable from "../containers/OrdersTable";

const OrderList = () => {
  return (
    <div>
      {/* Search, Filters, and Sort */}
      <div className="p-[28px] flex flex-col">
        <h4 className="text-sm px-2 py-1 text-black dark:text-white font-semibold">
          Order List
        </h4>
        <OrderTable />
      </div>
    </div>
  );
};

export default OrderList;
