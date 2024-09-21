const NotificationPanel = () => {
  const notifications = [
    "You have a bug that needs resolving.",
    "New user registered.",
    "Submitted a bug in Project X.",
  ];

  return (
    <div className="w-80 bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4">
      <h3 className="text-lg font-bold mb-4">Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="mb-2 p-2 bg-gray-200 dark:bg-gray-800 rounded"
          >
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
