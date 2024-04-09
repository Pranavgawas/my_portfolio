import React from "react";
import image from "../assets/image.json";
import VehicleConfigModel from "./Modal/VehicleConfigModel";
import FeedModel from "./Modal/FeedModel";
import CertifyMeModal from "./Modal/CertifyMeModal";
import EmployeeDetailsModal from "./Modal/EmployeeDetailsModal";
import CadScriptModal from "./Modal/CadScriptModal";

function Projects() {
  const vehicleconfigURL = image["vehicleconfig"];
  const feedsURL = image["feeds"];
  const CertifyMeURL = image["CertifyMe"];
  const EmployeeDetailsURL = image["EmployeeDetails"];
  const CadScriptURL = image["CadScript"];

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

      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={CertifyMeURL} alt="CertifyMe" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">CertifyMe</h2>
          <p>
            Technologies used: React, JavaScript, Tailwind CSS.
          </p>
          <div className="card-actions justify-end">
          <button
              className="btn btn-primary mr-2"
              onClick={() => {
                window.open(
                  "https://certify-me-liart.vercel.app/",
                  "_blank"
                );
              }}
            >
              View Website
            </button>
            <CertifyMeModal />
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={EmployeeDetailsURL} alt="EmployeeDetails" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Employee Details Management</h2>
          <p>
            Technologies used: React, JavaScript, MongoDB, Express.js, Node.js.
          </p>
          <div className="card-actions justify-end">
          <button
              className="btn btn-primary mr-2"
              onClick={() => {
                window.open(
                  "https://employee-details-management.onrender.com/",
                  "_blank"
                );
              }}
            >
              View Website
            </button>
            <EmployeeDetailsModal />
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={CadScriptURL} alt="CadScript" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">CadScript</h2>
          <p>
            Technologies used: React, JavaScript, Tailwind CSS.
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                window.open(
                  "https://cad-script.vercel.app/",
                  "_blank"
                );
              }}
            >
              View Website
            </button>
            <CadScriptModal />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;