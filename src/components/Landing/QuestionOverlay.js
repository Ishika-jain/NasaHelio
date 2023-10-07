import React from "react";
import "../../App.css";
import LockIcon from "@mui/icons-material/Lock";

const QuestionOverlay = () => {
  const question =
    "What is the name of NASA's space telescope that observes distant galaxies and nebulae?";
  const option = ["Hubble Space Telescope", "James Webb Space Telescope"];

  return (
    <div className="overlay rounded-lg">
      <div className="bg-bluebg p-4 rounded-lg shadow-lg text-bluetxt">
        <div className="text-lg font-semibold">{question}</div>
        <div className="m-2 flex justify-around">
          <div
            className="text-md bg-bluetxt text-white p-1 z-0"
            style={{ opacity: 0.5 }}
          >
            {option[0]}
          </div>
          <div
            className="text-md bg-bluetxt text-white p-1 z-0"
            style={{ opacity: 0.5 }}
          >
            {option[1]}
          </div>
        </div>
      </div>
      <div className="fixed w-96 h-28 flex  flex-col justify-center items-center text-gray-900">
        <LockIcon sx={{ fontSize: 90 }} />
        <p className="font-sm font-semibold bg-gray-900 text-gray-200 px-2">Opening at 7pm</p>
      </div>
    </div>
  );
};

export default QuestionOverlay;
