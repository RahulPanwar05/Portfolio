import React from "react";
import skillsData from "../data/skillData";

const SkillCard = ({ category, skills, darkMode }) => {
  return (
    <div
      className={`rounded-lg shadow-md p-6 h-full border  ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h3 className="text-xl font-bold mb-4 ">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills?.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1  rounded-full text-sm  ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`py-20  ${
        darkMode ? "bg-gray-700 text-white" : "bg-grey text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1  mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData?.map((category, index) => (
            <SkillCard
              key={index}
              category={category.category}
              skills={category.skills}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
