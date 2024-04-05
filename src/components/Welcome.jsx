import React from "react";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";
import Footer from "./Footer.jsx";
import Skills from "./Skills.jsx";
import Divider from "./Divider.jsx";
import Certification from "./Certification.jsx";
import Hero from "./Hero.jsx";

function Welcome() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Divider />
      <h1 className="mb-4 text-4xl font-bold">Projects :</h1>
      <Projects />
      <Divider />
      <h1 className="mb-4 text-4xl font-bold">Education :</h1>
      <Education />
      <Divider />
      <Skills />
      <Divider />
      <h1 className="mb-4 text-4xl font-bold">Certifications and Badges :</h1>
      <Certification />
      <Divider />
      <Footer />
    </div>
  );
}

export default Welcome;
