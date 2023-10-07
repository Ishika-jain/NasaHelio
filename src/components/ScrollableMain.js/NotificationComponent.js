import React, { useState } from "react";

const NotificationComponent = ({ notifications }) => {
  const [notificationCount, setNotificationCount] = useState(
    notifications.length
  );
  const [notificationStates, setNotificationStates] = useState(
    notifications.map(() => true)
  );

  const clearNotification = (index) => {
    const updatedNotificationStates = [...notificationStates];
    updatedNotificationStates[index] = false;
    setNotificationStates(updatedNotificationStates);
    setNotificationCount(notificationCount - 1);
  };

  const clearAllNotifications = () => {
    setNotificationStates(notifications.map(() => false));
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
        {notifications.map(
          (notification, index) =>
            notificationStates[index] && (
              <li
                key={index}
                className="py-2 pl-4 border-b bg-bluebg mb-2 pr-4 border-gray-300 shadow-2xl flex justify-between text-black font-bold"
              >
                {notification}
                <button
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => clearNotification(index)}
                >
                  Clear
                </button>
              </li>
            )
        )}
      </ul>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        onClick={clearAllNotifications}
      >
        Clear All Notifications
      </button>
    </div>
  );
};

export default NotificationComponent;
