// components/Contact.jsx
import React from "react";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (can connect to Formspree, EmailJS, etc.)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className={`py-20 ${
        darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-indigo-500 pb-2">
            Let's Collaborate
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-indigo-600 mt-1">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:rahulpanwar900@gmail.com"
                    className=" hover:text-indigo-600 transition"
                  >
                    rahul.panwar900@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-indigo-600 mt-1">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/rahul-panwar900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-indigo-600 transition"
                  >
                    linkedin.com/in/rahul-panwar900
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-indigo-600 mt-1">
                  <FaGithub size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a
                    href="https://github.com/rahulpanwar900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-indigo-600 transition"
                  >
                    github.com/rahulpanwar900
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Discussion Topics</h4>
                <ul className="space-y-2 ">
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600">•</span>
                    <span>3D Scanning & Digital Manufacturing Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600">•</span>
                    <span>Industrial Automation & Robotics Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600">•</span>
                    <span>WebRTC Applications for Industrial Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-600">•</span>
                    <span>Process Optimization in Manufacturing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3  border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message about 3D scanning, industrial automation, or software development..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition w-full"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
