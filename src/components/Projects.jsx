import React from "react";
import image from "../assets/image.json";
import VehicleConfigModel from "./VehicleConfigModel";
import FeedModel from "./FeedModel";

function Projects() {
  const vehicleconfigURL = image["vehicleconfig"];
  const feedsURL = image["feeds"];
  return (
    <div
      id="projectId"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={vehicleconfigURL} alt="Vehicle Configurator" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vehicle Configurator</h2>
          <p>
            Technologies used: Spring 6, Maven 3, Spring Boot 3, REST API, MySQL
            8, JPA, JUnit 4, JWT, Microservices, Docker, Web API Core, SQL
            Server, and Entity Core.
          </p>
          <div className="card-actions justify-end">
            <VehicleConfigModel />
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={feedsURL} alt="Feed App" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Feed App</h2>
          <p>
            Technologies used: Spring 6, Maven 3, Spring Boot 3, REST API, MySQL
            8, JPA, React, Javascript.
          </p>
          <div className="card-actions justify-end">
            <FeedModel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
