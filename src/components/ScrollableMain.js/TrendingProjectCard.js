import React from "react";

function TrendingProjectCard({ name, description, tags }) {
  return (
    <div className="mb-4 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TrendingProjectCard;
