import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Profile from "../../assets/prize.png";

const LeftSidebar = () => {
  return (
    <div className="h-full rounded-lg flex flex-col justify-start items-center p-4">
      <div className="my-8 w-full flex justify-center">
        <div className="flex items-center space-x-3 mb-12">
          <Avatar
            src={Profile}
            alt="User Profile"
            sx={{ width: 150, height: 150 }}
            className="bg-gray-900"
          />
        </div>
      </div>

      <nav className="flex justify-center w-full">
        <ul className="list-none">
          <li className="mb-12">
            <Link
              to="/main"
              className="flex items-center text-bluetxt hover:text-white"
            >
              <HomeIcon className="w-6 h-6 mr-2" />
              <span className="text-xl font-semibold">Home</span>
            </Link>
          </li>
          <li className="mb-12">
            <Link
              to="/simulate"
              className="flex items-center text-bluetxt hover:text-white"
            >
              <PlayCircleIcon className="w-6 h-6 mr-2" />
              <span className="text-xl font-semibold">Simulate</span>
            </Link>
          </li>
          <li className="mb-12">
            <Link
              to="/kaggle"
              className="flex items-center text-bluetxt hover:text-white"
            >
              <EmojiEventsIcon className="w-6 h-6 mr-2" />
              <span className="text-xl font-semibold">Compete</span>
            </Link>
          </li>
          <li className="mb-12">
            <Link
              to="/notification"
              className="flex items-center text-bluetxt hover:text-white"
            >
              <NotificationsIcon className="w-6 h-6 mr-2" />
              <span className="text-xl font-semibold">Notification</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSidebar;
