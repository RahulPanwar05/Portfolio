// components/Projects.jsx
import React from "react";
import projectsData from "../data/projectsData";

export default function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`py-20  ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-indigo-500 pb-2">
            Industrial Tech Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={` ${
                darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-black"
              } rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2`}
            >
              <div className="p-6">
                <div className="flex justify-center">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  {project.title}
                </h3>
                <p className=" mb-4 text-center">{project.description}</p>

                <h4 className="font-semibold mb-2 ">Key Features:</h4>
                <ul className="mb-4 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span className="">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`${
                        darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-gray-100 text-gray-800"
                      } text-sm px-3 py-1 rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
