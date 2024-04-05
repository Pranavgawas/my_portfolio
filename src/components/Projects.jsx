import React from "react";
import image from "../assets/image.json";

function Projects() {
  const vehicleconfigURL = image["vehicleconfig"];
  const feedsURL = image["feeds"];
  return (
    <div id="projectId" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={vehicleconfigURL} alt="Vehicle Configurator" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vehicle Configurator</h2>
          <p>It is a vehicle configurator project</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn more!</button>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={feedsURL} alt="Feed App" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Feed App</h2>
          <p>It is a Feed app project</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn more!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
