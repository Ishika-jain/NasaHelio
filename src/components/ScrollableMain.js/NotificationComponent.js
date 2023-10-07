import React, { useState } from "react";

const NotificationComponent = ({ notifications }) => {
  const [notificationCount, setNotificationCount] = useState(
    notifications.length
  );

  const clearNotifications = () => {
    setNotificationCount(0);
  };

  return (
    <div className="p-4">
      <div className="mb-4"></div>
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
        You have {notificationCount}{" "}
        {notificationCount === 1 ? "notification" : "notifications"}.
      </div>
      <ul className="mt-4 flex flex-col">
        {notifications.map((notification, index) => (
          <li key={index} className="py-2 border-b border-gray-300 flex justify-between">
            {notification}
            <button className="ml-2 bg-red-500 text-white px-2 py-1 rounded ">
              Clear
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-32"
        onClick={clearNotifications}
      >
        Clear Notifications
      </button>
    </div>
  );
};

export default NotificationComponent;
