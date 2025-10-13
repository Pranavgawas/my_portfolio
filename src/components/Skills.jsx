import React from "react";
import ProgrammingSkills from "./ProgrammingSkills";
import Divider from "./Divider.jsx";
import Miscellaneous from "./Miscellaneous.jsx";

function Skills() {
  return (
    <div id="skillsId">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Programming Skills
        </h2>
        <p className="text-base sm:text-lg text-base-content/60">
          Technologies and frameworks I work with
        </p>
      </div>
      <ProgrammingSkills />
      <Divider />
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Other Skills
        </h2>
        <p className="text-base sm:text-lg text-base-content/60">
          Tools and platforms I use daily
        </p>
      </div>
      <Miscellaneous />
    </div>
  );
}

export default Skills;
