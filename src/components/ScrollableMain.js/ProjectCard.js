// ProjectCard.js
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  const { projectName, description, author, image, link } = project;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto rounded overflow-hidden shadow-xl m-4 max-w-xl bg-gray-300">
      <img
        className="w-full max-h-32"
        src={image}
        alt={projectName}
        draggable="false"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectName}</div>
        <p
          className="text-gray-700 text-base overflow-hidden overflow-ellipsis"
          style={{ maxHeight: "6em" }}
        >
          {description}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-around w-full gap-2">
        <button
          onClick={openModal}
          className="inline-block bg-bluetxt w-1/2 hover:bg-white text-white hover:text-bluetxt text-sm font-semibold py-2 px-4 rounded-md text-center"
        >
          View Project
        </button>
        <span className="inline-block bg-gray-400 w-1/2  text-bluetxttext-sm font-semibold py-2 px-4 rounded-md text-center">
          {author}
        </span>

        <button
          onClick={openModal}
          className="inline-block bg-bluetxt w-1/2 hover:bg-white text-white hover:text-bluetxt text-sm font-semibold py-2 px-4 rounded-md text-center"
        >
          Fund Project
        </button>
      </div>
      {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
    </div>
  );
};

export default ProjectCard;
