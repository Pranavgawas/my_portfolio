import React from "react";
import ProgrammingSkills from "./ProgrammingSkills";
import Miscellaneous from "./Miscellaneous.jsx";
import SectionHeader from "./SectionHeader.jsx";
import GlowingDivider from "./GlowingDivider.jsx";

function Skills() {
  return (
    <div id="skillsId" className="space-y-16">
      <section aria-label="Programming Languages and Frameworks">
        <SectionHeader 
          title="Programming Expertise" 
          subtitle="Core Technologies"
        />
        <ProgrammingSkills />
      </section>
      
      <GlowingDivider className="opacity-30" />
      
      <section aria-label="Other Tools and Platforms">
        <SectionHeader 
          title="Technical Toolkit" 
          subtitle="Misc. Skills"
        />
        <Miscellaneous />
      </section>
    </div>
  );
}

export default Skills;
