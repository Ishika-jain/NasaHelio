import React from "react";

const ProjectCard = ({ project }) => {
  const { projectName, description, author, image, link } = project;

  return (
    <div className="mx-auto rounded overflow-hidden shadow-xl m-4 max-w-xl bg-whitebg">
      <img className="w-full max-h-32" src={image} alt={projectName} draggable="false" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectName}</div>
        <p
          className="text-gray-700 text-base overflow-hidden overflow-ellipsis"
          style={{ maxHeight: "6em" }}
        >
          {description}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-around">
        <span className="inline-block bg-bluetxt hover:bg-white text-white hover:text-bluetxt font-semibold py-2 px-4 rounded-xl">
          {author}
        </span>
        <a
          href={link}
          className="inline-block bg-bluetxt hover:bg-white text-white  hover:text-bluetxt font-semibold py-2 px-4 rounded-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
