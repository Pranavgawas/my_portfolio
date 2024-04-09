import React from "react";

function VehicleConfigModel() {
  const vehicleConfigModal = () => {
    const modal = document.getElementById("vehicleConfig");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={vehicleConfigModal}>
        Learn More!
      </button>
      <dialog id="vehicleConfig" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Vehicle Configurator</h3>
          <p className="py-4">
            <ul>
              <li>
                Developed a B2B portal using Spring 6, Maven 3, Spring Boot 3,
                REST API, MySQL 8, JPA, JUnit 4, JWT, Microservices, Docker, Web
                API Core, SQL Server, and Entity Core.
              </li>
              <li>
                Designed for a car leasing company, allowing rental car
                companies to purchase cars in bulk and offer them to customers.
              </li>
              <li>
                Database-driven website providing detailed car specifications.
              </li>
              <li>
                Users can select a car model, customize interior and exterior
                features (body color, seats, music system), and place orders.
              </li>
              <li>
                Invoice generation in PDF format based on the configuration,
                emailed to the client.
              </li>
              <li>
                Developed using Microservices and Docker for scalability and
                efficiency.
              </li>
            </ul>
          </p>

          <div className="modal-action">
            <form method="dialog">
            <button
                className="btn mr-2"
                onClick={() => {
                  window.open(
                    "https://github.com/Pranavgawas/VehicleConfigurator",
                    "_blank"
                  );
                }}
              >
                View java Code
              </button>
              <button
                className="btn mr-2"
                onClick={() => {
                  window.open(
                    "https://github.com/Pranavgawas/DotnetVehicleConfigurator",
                    "_blank"
                  );
                }}
              >
                View .NET Code
              </button>
              <button
                className="btn mr-2"
                onClick={() => {
                  window.open(
                    "https://github.com/Pranavgawas/VehicleConfiguratorFrontEnd",
                    "_blank"
                  );
                }}
              >
                View React Code
              </button>
              <button
                className="btn btn-primary mr-2"
                onClick={(e) => {
                  e.preventDefault();
                  const modal = document.getElementById("vehicleConfig");
                  if (modal) {
                    modal.close();
                  }
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default VehicleConfigModel;