import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 ${
        darkMode ? "bg-gray-700 text-white" : "bg-grey text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <p>
            With over a decade of experience in manufacturing, process
            engineering, and software development, I bring a unique blend of
            industrial expertise and digital transformation to my role as
            Director – Operations & Marketing.
          </p>
          <p>
            My journey began in the automotive and ancillary manufacturing
            sector (2013-2021), where I progressed from GET to Senior Production
            Engineer, gaining hands-on experience in sheet metal manufacturing,
            CNC machining, TPM, and shop floor management. I worked extensively
            on process optimization, quality systems (MSA, SPC, APQP, FMEA), and
            OEE improvements.
          </p>
          <p>
            From 2022 to 2025, I transitioned into software development,
            expanding my skills in digital tools and automation.
          </p>
          <p>
            Now, as Director – Operations & Marketing, I lead 3D scanning, CAD
            design services, and the sales of advanced 3D scanners, offering
            solutions for metrology, industrial, and human scanning
            applications. My combined expertise in manufacturing and software
            enables me to drive technology-driven growth and innovation.
          </p>
          <p>
            Always open to discussions on 3D scanning, CAD solutions, and
            process optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
