import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaEthereum,
  FaMicrophone,
  FaVideo,
  FaJs,
  FaHardHat,
  FaPodcast,
  FaCode,
  FaHtml5,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiSolidity,
  SiWeb3Dotjs,
  SiOpensea,
  SiObsstudio,
} from "react-icons/si";

// Skills Section
function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Frontend Development"
  );

  const skills = {
    "Frontend Development": [
      FaReact,
      SiVite,
      SiTailwindcss,
      FaJs,
      FaCode,
      FaHtml5,
    ],
    "Smart Contract Development": [
      SiSolidity,
      FaHardHat,
      FaEthereum,
      SiWeb3Dotjs,
      SiOpensea,
      "/logos/blockchain-logo.png",
    ],
    "Media Broadcasting": [
      FaMicrophone,
      FaVideo,
      SiObsstudio,
      FaPodcast,
      "/vmix.jpg",
      ,
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Skills & Tools</h1>
      <div className="flex justify-center space-x-4 mb-6">
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedCategory === category
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills[selectedCategory].map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md text-center flex justify-center items-center"
          >
            {typeof skill === "string" ? (
              <img
                src={skill}
                alt="Skill Logo"
                className="w-16 h-16 object-contain"
              />
            ) : (
              React.createElement(skill, {
                className: "text-4xl text-blue-400",
              })
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
