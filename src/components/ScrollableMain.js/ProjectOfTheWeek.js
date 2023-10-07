import React from "react";
import winner from "../../assets/prize.png";

const ProjectOfTheWeek = () => {
  return (
    <div className="rounded-lg shadow-lg relative flex h-full justify-between items-center text-bluetxt bg-bluebg">
      <div className="flex justify-center items-center flex-col w-full">
        <div className=" font-bold text-xl">
          NASA's Project of the Week
        </div>
        <div className=" font-semibold text-lg">
          Exploring the Cosmos with{" "}
          <span className="text-white ">Ishika Jain</span>
        </div>
        <div className="">Project: Helio-Expedition </div>
        <span className="my-1">
          <button className="bg-bluetxt text-white rounded-sm  text-sm px-2 mx-4">
            View Project
          </button>
          <button className="bg-bluetxt text-white rounded-sm  text-sm px-2 mx-4">
            View Profile
          </button>
        </span>
      </div>
      <div>
        <img src={winner} alt="prize" className="h-34" />
      </div>
    </div>
  );
};

export default ProjectOfTheWeek;
