// ProjectModal.js
import React from "react";

const ProjectModal = ({ project, onClose }) => {
  const { projectName, description, author, image, link } = project;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="modal-container bg-white w-1/2 p-4 rounded-lg shadow-lg z-50">
        <button
          onClick={onClose}
          className="modal-close m-4 text-gray-200 bg-gray-800 px-5 hover:text-gray-900"
        >
          &times;
        </button>
        <img className="w-full max-h-64" src={image} alt={projectName} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{projectName}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <p className="text-gray-700 text-base">Author: {author}</p>
        </div>
        <div className="px-6 py-4 w-full flex justify-evenly text-center ">
          <a
            href={link}
            className="bg-bluetxt text-white text-sm font-semibold py-2 px-4 rounded-md w-full mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          <a
            href={link}
            className="bg-bluetxt text-white text-sm font-semibold py-2 px-4 rounded-md w-full ml-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fund Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
