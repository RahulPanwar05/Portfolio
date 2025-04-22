import React from "react";
import Profile from "../assets/Images/profile.jpg";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`pt-24 md:pt-36 min-h-screen flex flex-col justify-center  ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Rahul Panwar
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6  dark:text-gray-300">
            Mechanical Engineer | 3D Scanning & Digital Manufacturing | Software
            Developer
          </h2>
          <p className="mb-8 max-w-2xl">
            Bridging industrial expertise with digital transformation through
            innovative solutions in manufacturing, 3D scanning, and software
            development.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#experience"
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-md transition-all duration-300"
            >
              View Experience
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden mx-auto border-4 border-blue-600 dark:border-blue-400 shadow-xl">
            <img
              src={Profile}
              alt="Rahul Panwar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
