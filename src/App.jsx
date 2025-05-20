// App.jsx
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
