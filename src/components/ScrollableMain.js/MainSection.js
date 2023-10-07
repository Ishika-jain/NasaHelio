import React from "react";
import ProjectCard from "./ProjectCard";

const MainSection = ({ projects }) => {
  return (
    <div className="flex flex-col w-full ">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default MainSection;
