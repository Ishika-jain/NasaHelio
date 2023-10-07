import React from "react";
import CarouselComponent from "../ScrollableMain.js/CarouselComponent";
import ProjectOfTheWeek from "../ScrollableMain.js/ProjectOfTheWeek";
import Leaderboard from "../ScrollableMain.js/Leaderboard";
import QuestionOverlay from "./QuestionOverlay";

const RightSidebar = () => {
  return (
    <div className="h-full flex flex-col p-4 rounded-lg py-2 ">
      <div className="w-full h-1/5 mb-2 rounded-lg shadow-2xl">
        <CarouselComponent />
      </div>
      <div className="w-full h-1/5 my-2 rounded-lg shadow-2xl">
        <ProjectOfTheWeek />
      </div>
      <div className="w-full h-2/5  my-2 rounded-lg shadow-2xl">
        <Leaderboard />
      </div>
      <div className="w-full h-1/5 my-2 rounded-lg shadow-2xl">
        <QuestionOverlay/>
      </div>
    </div>
  );
};

export default RightSidebar;
