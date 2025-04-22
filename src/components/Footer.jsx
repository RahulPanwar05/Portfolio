// components/Footer.jsx
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`py-12 border-t ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Professional Summary */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-600">
              Rahul Panwar
            </h3>
            <p className=" mb-4">
              Bridging manufacturing and digital technology with innovative
              solutions in 3D scanning, industrial automation, and software
              development.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/rahul-panwar900"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/rahulpanwar900"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-indigo-600 transition"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:rahulpanwar900@gmail.com"
                className=" hover:text-indigo-600 transition"
                aria-label="Email"
              >
                <SiGmail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-600">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className=" hover:text-indigo-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className=" hover:text-indigo-600 transition">
                  My Journey
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className=" hover:text-indigo-600 transition"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className=" hover:text-indigo-600 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className=" hover:text-indigo-600 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-600">
              Get In Touch
            </h3>
            <ul className="space-y-3 ">
              <li className="flex items-start">
                <SiGmail className="mr-3 mt-1 text-indigo-600" />
                <a
                  href="mailto:rahulpanwar900@gmail.com"
                  className="hover:text-indigo-600 transition"
                >
                  rahulpanwar900@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaLinkedin className="mr-3 mt-1 text-indigo-600" />
                <a
                  href="https://www.linkedin.com/in/rahul-panwar900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition"
                >
                  linkedin.com/in/rahul-panwar900
                </a>
              </li>
              <li className="flex items-start">
                <FaGithub className="mr-3 mt-1 text-indigo-600" />
                <a
                  href="https://github.com/rahulpanwar900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition"
                >
                  github.com/rahulpanwar900
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Rahul Panwar. All rights reserved.
            <span className="block sm:inline">
              {" "}
              Built with React and Tailwind CSS.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
