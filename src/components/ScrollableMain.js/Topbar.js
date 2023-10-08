import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { storiesData } from "./Data";


const TopBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setOpenModal(true);
  };

  const handleVr = () => {
    setSelectedStory(1);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedStory(null);
  };

  return (
    <div className="flex items-center justify-between h-32 overflow-x-hidden">
      <div
        key={1}
        className=" w-32 rounded-full cursor-pointer text-center mx-4 mt-1 "
        onClick={() => handleVr()}
      >
        <ControlPointIcon sx={{ width: "60px", height: "60px" }} />
        <p className="font-semibold text-bluetxt">Get Avatar</p>
      </div>

      <div className="flex space-x-2 w-full justify-between">
        {storiesData.map((story) => (
          <div
            key={story.id}
            className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden cursor-pointer "
            onClick={() => handleStoryClick(story)}
          >
            <img
              src={story.imageUrl}
              alt={story.username}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 cursor-pointer"
        ></svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 cursor-pointer"
        ></svg>
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="bg-white p-4 rounded-lg w-full h-full max-w-lg">
          {selectedStory && (
            <>
              <div className="flex justify-between items-center mb-2">
                <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden bg-red-400">
                  <img
                    src={selectedStory.imageUrl}
                    alt={selectedStory.username}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-gray-600">{selectedStory.username}</span>
              </div>
              <img
                src={selectedStory.imageUrl}
                alt={selectedStory.username}
                className="w-full h-52 rounded-lg"
              />
              {selectedStory.questions.map((questionObj, index) => (
                <div key={index} className="mt-4">
                  <h3 className="text-xl font-semibold">
                    {questionObj.question}
                  </h3>
                  <ul className="mt-2">
                    {questionObj.answers.map((answer, ansIndex) => (
                      <li key={ansIndex} className="list-disc ml-4">
                        {answer}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default TopBar;
