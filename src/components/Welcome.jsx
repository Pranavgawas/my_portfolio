import React from "react";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";
import Footer from "./Footer.jsx";
import Skills from "./Skills.jsx";
import Divider from "./Divider.jsx";
import Certification from "./Certification.jsx";
import Hero from "./Hero.jsx";
import Contact from "./Contact.jsx";
import AnimatedSection from "./AnimatedSection.jsx";
import QuickStats from "./QuickStats.jsx";
import BackToTop from "./BackToTop.jsx";

function Welcome() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Divider />
        <QuickStats />
        <Divider />
        <AnimatedSection animation="fadeInUp" delay={200}>
          <section id="projectId" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" aria-labelledby="projects-heading">
            <div className="text-center sm:text-left mb-8 sm:mb-12">
              <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Projects
              </h2>
              <p className="text-base sm:text-lg text-base-content/60 max-w-2xl">
                Explore my recent work and contributions
              </p>
            </div>
            <Projects />
          </section>
        </AnimatedSection>
        <Divider />
        <AnimatedSection animation="fadeInUp" delay={100}>
          <section id="educationId" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" aria-labelledby="education-heading">
            <div className="text-center sm:text-left mb-8 sm:mb-12">
              <h2 id="education-heading" className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-base sm:text-lg text-base-content/60 max-w-2xl">
                My academic journey and qualifications
              </p>
            </div>
            <Education />
          </section>
        </AnimatedSection>
        <Divider />
        <AnimatedSection animation="fadeInUp" delay={150}>
          <section id="skillsId" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <Skills />
          </section>
        </AnimatedSection>
        <Divider />
        <AnimatedSection animation="fadeInUp" delay={100}>
          <section id="certificateId" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" aria-labelledby="certifications-heading">
            <div className="text-center sm:text-left mb-8 sm:mb-12">
              <h2 id="certifications-heading" className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Certifications & Badges
              </h2>
              <p className="text-base sm:text-lg text-base-content/60 max-w-2xl">
                Professional certifications and achievements
              </p>
            </div>
            <Certification />
          </section>
        </AnimatedSection>
        <Divider />
        <AnimatedSection animation="fadeInUp" delay={100}>
          <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg text-base-content/60 max-w-2xl mx-auto">
                Let's connect and discuss opportunities
              </p>
            </div>
            <Contact />
          </section>
        </AnimatedSection>
        <Divider />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Welcome;
