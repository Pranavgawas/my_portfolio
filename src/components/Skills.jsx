import React from "react";
import ProgrammingSkills from "./ProgrammingSkills";
import Divider from "./Divider.jsx";
import Miscellaneous from "./Miscellaneous.jsx";

function Skills() {
  return (
    <div id="skillsId">
      <h1 className="mb-4 text-4xl font-bold">Programming Skills :</h1>
      <ProgrammingSkills />
      <Divider />
      <h1 className="mb-4 text-4xl font-bold">Other Skills :</h1>
      <Miscellaneous />
    </div>
  );
}

export default Skills;
