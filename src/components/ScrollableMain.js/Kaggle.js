import React from "react";
import TrendingProjectCard from "./TrendingProjectCard";
import { trendingProjects } from "./Data";

const Kaggle = () => {
 

  return (
    <di className="flex h-full">
      <div className="flex flex-col items-center justify-start mt-20 w-1/3 ">
        <a href="https://data.nasa.gov/browse?limitTo=datasets">
          <div className="mb-10 bg-bluetxt text-white w-52 text-center p-4">
            Find Datasets
          </div>
        </a>
        <a href="https://onecompiler.com/">
          <div className="mb-10 bg-bluetxt text-white w-52 text-center p-4">
            Create New Project
          </div>
        </a>
      </div>
      <div className="flex justify-center items-center w-2/3">
        <div className="mt-4 w-full mx-4">
          <h2 className=" mb-2 text-center font-bold text-2xl">
            Trending Projects
          </h2>
          <div className="mt-4">
            {trendingProjects.map((project, index) => (
              <TrendingProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </di>
  );
};

export default Kaggle;
