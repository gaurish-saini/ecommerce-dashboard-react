import React from "react";
import notificationsData from "../data/notificationsData";

const NotificationsPanel = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h4 className="text-gray-500 dark:text-gray-300 text-sm font-semibold mb-4">
        Notifications
      </h4>
      <ul>
        {notificationsData.map((notification, index) => (
          <li
            key={index}
            className="mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded"
          >
            <div className="text-gray-900 dark:text-white">
              {notification.message}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {notification.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
