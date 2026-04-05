import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import EducationEnhanced from "./EducationEnhanced.jsx";
import Footer from "./Footer.jsx";
import Skills from "./Skills.jsx";
import GlowingDivider from "./GlowingDivider.jsx";
import Certification from "./Certification.jsx";
import Hero from "./Hero.jsx";
import Contact from "./Contact.jsx";
import FloatingParticles from "./FloatingParticles.jsx";
import CustomCursor from "./CustomCursor.jsx";
import PageLoader from "./PageLoader.jsx";
import SectionHeader from "./SectionHeader.jsx";

function Welcome() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-neo-bg-primary text-neo-text-primary selection:bg-neo-purple/30 ${loading ? 'overflow-hidden h-screen' : ''}`}>
        <FloatingParticles />
        <CustomCursor />
        
        <Navbar />
        
        <main id="main-content" className="relative z-10">
          <Hero />
          
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <GlowingDivider />
            
            <section id="projectId" className="py-20" aria-label="Projects Section">
              <SectionHeader 
                title="Featured Projects" 
                subtitle="My Work"
              />
              <Projects />
            </section>

            <GlowingDivider />

            <section id="educationId" className="py-20" aria-label="Education Section">
              <SectionHeader 
                title="Educational Journey" 
                subtitle="Academic background"
              />
              <EducationEnhanced />
            </section>

            <GlowingDivider />

            <section id="skillsId" className="py-20" aria-label="Skills Section">
              <Skills />
            </section>

            <GlowingDivider />

            <section id="certificateId" className="py-20" aria-label="Certifications Section">
              <SectionHeader 
                title="Certifications & Achievements" 
                subtitle="Professional Badges"
              />
              <Certification />
            </section>

            <GlowingDivider />

            <section id="contactId" className="py-20" aria-label="Contact Section">
              <SectionHeader 
                title="Let's Start a Conversation" 
                subtitle="Get in touch"
                className="text-center flex-col items-center"
              />
              <Contact />
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default Welcome;
