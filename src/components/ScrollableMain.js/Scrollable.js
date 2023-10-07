import React from "react";
import TopBar from "./Topbar";
import { Outlet } from "react-router-dom";

const Scrollable = () => {
  return (
    <div className="rounded-lg p-2 ">
      <TopBar/>
      <Outlet />
    </div>
  );
};

export default Scrollable;
