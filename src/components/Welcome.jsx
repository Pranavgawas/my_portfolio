import React from "react";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";
import Footer from "./Footer.jsx";
import Skills from "./Skills.jsx";
import Divider from "./Divider.jsx";
import Certification from "./Certification.jsx";
import Hero from "./Hero.jsx";
import Resume from "./Resume.jsx";
import AnimatedSection from "./AnimatedSection.jsx";

function Welcome() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Divider />
      <AnimatedSection animation="fadeInUp" delay={200}>
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-left">
            Projects :
          </h1>
          <Projects />
        </section>
      </AnimatedSection>
      <Divider />
      <AnimatedSection animation="fadeInUp" delay={100}>
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-left">
            Education :
          </h1>
          <Education />
        </section>
      </AnimatedSection>
      <Divider />
      <AnimatedSection animation="fadeInUp" delay={150}>
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <Skills />
        </section>
      </AnimatedSection>
      <Divider />
      <AnimatedSection animation="fadeInUp" delay={100}>
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-left">
            Certifications and Badges :
          </h1>
          <Certification />
        </section>
      </AnimatedSection>
      <Divider />
      <AnimatedSection animation="fadeInUp" delay={100}>
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center sm:text-left">
            Resume :
          </h1>
          <Resume />
        </section>
      </AnimatedSection>
      <Divider />
      <Footer />
    </div>
  );
}

export default Welcome;
