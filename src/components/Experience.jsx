import React from "react";
import experienceData from "../data/experienceData";

const ExperienceCard = ({ title, company, period, description, darkMode }) => {
  return (
    <div
      className={`mb-10 border-l-4  pl-5  ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className=" font-medium">{company}</span>
        <span className="text-sm px-3 py-1 rounded-full">{period}</span>
      </div>
      <ul className="list-disc list-inside space-y-1">
        {description.map((item, index) => (
          <li key={index} className="ml-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`py-20  ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {experienceData?.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
