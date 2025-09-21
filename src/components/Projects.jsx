import React, { useState, useEffect } from "react";
import image from "../assets/image.json";
import VehicleConfigModel from "./Modal/VehicleConfigModel";
import FeedModel from "./Modal/FeedModel";
import CertifyMeModal from "./Modal/CertifyMeModal";
import EmployeeDetailsModal from "./Modal/EmployeeDetailsModal";
import CadScriptModal from "./Modal/CadScriptModal";
import SmartImage from "./SmartImage";
import AnimatedSection from "./AnimatedSection";
import { SkeletonCard } from "./SkeletonLoaders";

function Projects() {
  const [loading, setLoading] = useState(true);
  
  const vehicleconfigURL = image["vehicleconfig"];
  const feedsURL = image["feeds"];
  const CertifyMeURL = image["CertifyMe"];
  const EmployeeDetailsURL = image["EmployeeDetails"];
  const CadScriptURL = image["CadScript"];

  const projects = [
    {
      title: "Vehicle Configurator",
      description: "Technologies used: Spring 6, Maven 3, Spring Boot 3, REST API, MySQL 8, JPA, JUnit 4, JWT, Microservices, Docker, Web API Core, SQL Server, and Entity Core.",
      image: vehicleconfigURL,
      modal: VehicleConfigModel,
      buttons: []
    },
    {
      title: "Feed App", 
      description: "Technologies used: Spring 6, Maven 3, Spring Boot 3, REST API, MySQL 8, JPA, React, Javascript.",
      image: feedsURL,
      modal: FeedModel,
      buttons: []
    },
    {
      title: "CertifyMe",
      description: "Technologies used: React, JavaScript, Tailwind CSS.",
      image: CertifyMeURL,
      modal: CertifyMeModal,
      buttons: [
        {
          text: "View Website",
          url: "https://certify-me-liart.vercel.app/"
        }
      ]
    },
    {
      title: "Employee Details Management",
      description: "Technologies used: React, JavaScript, MongoDB, Express.js, Node.js.",
      image: EmployeeDetailsURL,
      modal: EmployeeDetailsModal,
      buttons: [
        {
          text: "View Website", 
          url: "https://employee-details-management.onrender.com/"
        }
      ]
    },
    {
      title: "CadScript",
      description: "Technologies used: React, JavaScript, Tailwind CSS.",
      image: CadScriptURL,
      modal: CadScriptModal,
      buttons: [
        {
          text: "View Website",
          url: "https://cad-script.vercel.app/"
        }
      ]
    }
  ];

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[...Array(5)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div
        id="projectId"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        {projects.map((project, index) => {
          const ModalComponent = project.modal;
          return (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 150}
              duration={600}
            >
              <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <figure className="h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    fallbackSrc="https://via.placeholder.com/400x300/374151/9CA3AF?text=Project+Image"
                  />
                </figure>
                <div className="card-body p-4 sm:p-6">
                  <h2 className="card-title text-lg sm:text-xl lg:text-2xl font-bold text-base-content mb-3">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base text-base-content/80 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="card-actions justify-end mt-auto flex-wrap gap-2">
                    {project.buttons.map((button, btnIndex) => (
                      <button
                        key={btnIndex}
                        className="btn btn-primary btn-sm sm:btn-md min-h-[44px] px-4 sm:px-6 text-sm sm:text-base"
                        onClick={() => window.open(button.url, "_blank")}
                      >
                        {button.text}
                      </button>
                    ))}
                    <ModalComponent />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
