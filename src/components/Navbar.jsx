import React, { useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold">
                Rahul Panwar
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  } transition-all duration-300`}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full hover:${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                } transition-all duration-300`}
              >
                {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 mr-2 rounded-full hover:${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              } transition-all duration-300`}
            >
              {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md hover:${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              } transition-all duration-300`}
            >
              {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                } transition-all duration-300`}
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
