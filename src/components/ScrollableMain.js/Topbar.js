import React, { useState } from "react";
import Modal from "@mui/material/Modal";

const storiesData = [
  {
    id: 1,
    username: "user1",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    username: "user2",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    username: "user3",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    username: "user4",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 5,
    username: "user5",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 1,
    username: "user1",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    username: "user4",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 5,
    username: "user5",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 1,
    username: "user1",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: 1,
    username: "user1",
    imageUrl: "https://via.placeholder.com/40",
  },
  
];

const TopBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setOpenModal(true);
    // setTimeout(() => {
    //   handleCloseModal();
    // }, 3000);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedStory(null);
  };

  return (
    <div className="flex items-center justify-between h-32 ">
      <div className="flex space-x-2 w-full  justify-between">
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
        >
        </svg>
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
                <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden">
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
                className="w-full rounded-lg"
              />
            </>
          )}
          
        </div>
      </Modal>
    </div>
  );
};

export default TopBar;
