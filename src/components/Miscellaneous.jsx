import React from "react";
import image from "../assets/image.json";

function Miscellaneous() {
  const dockerURL = image["docker"];
  const gitURL = image["git"];
  const bashURL = image["bash"];

  return (
    <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={dockerURL} alt="Docker" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Docker</h2>
          <p>Docker is a containerization platform</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={gitURL} alt="Git" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Git</h2>
          <p>Git is a version control system</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={bashURL} alt="Bash" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Bash</h2>
          <p>Bash is a Unix shell and command language</p>
        </div>
      </div>
    </div>
  );
}

export default Miscellaneous;
