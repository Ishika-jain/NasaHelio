import React from "react";
import Scrollable from "../ScrollableMain.js/Scrollable";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import "./../../App.css";

const Landing = () => {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="w-1/6 bg-trans m-4 rounded-lg">
        <LeftSidebar />
      </div>
      <div className="w-3/6 mx-auto bg-trans m-4 rounded-lg overflow-y-scroll scrollbar-none antiscroll">
        <Scrollable />
      </div>
      <div className="w-2/6 bg-trans m-4 rounded-lg">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Landing;
