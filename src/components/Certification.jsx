import React from "react";
import image from "../assets/image.json";

function Certification() {
  const HardwareNetworkingURL = image["HardwareAndNetworking"];
  const PrecatURL = image["Precat"];
  const HackerRankURL = image["HackerRank"];
  const LeetCodeURL = image["LeetCode"];
  const CadCamCae = image["CadCamCae"];

  const handleHardwareAndNetworking = () => {
    window.open(
      "https://drive.google.com/file/d/14lMUVkzOm1QGJKpFYbO2GKNqYTDvJwXf/view",
      "_blank"
    );
  };

  const handlePrecat = () => {
    window.open(
      "https://drive.google.com/file/d/1iDZCrAr-jyE9i5yI4TtGXaXUCIzwubt_/view",
      "_blank"
    );
  };

  const handleHackerRank = () => {
    window.open("https://www.hackerrank.com/profile/pranavgawas1999", "_blank");
  };

  const handleLeetCode = () => {
    window.open("https://leetcode.com/pranavgawas1999/", "_blank");
  };

  const handleCadCamCae = () => {
    window.open(
      "https://www.coursera.org/account/accomplishments/specialization/YL7UHT3T6MXB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
      "_blank"
    );
  };

  return (
    <div
      id="certificateId"
      className="grid grid-cols-2 gap-4 md:flex md:gap-0 md:space-x-4"
    >
      <div
        onClick={handleHardwareAndNetworking}
        className="card bg-white shadow-lg rounded-lg overflow-hidden w-32 h-32"
      >
        <img
          src={HardwareNetworkingURL}
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div>
          <h6 className="text-lg font-semibold text-gray-800">
            Hardware and Networking
          </h6>
        </div>
      </div>

      <div
        onClick={handlePrecat}
        className="card bg-white shadow-lg rounded-lg overflow-hidden w-32 h-32"
      >
        <img
          src={PrecatURL}
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div>
          <h6 className="text-lg font-semibold text-gray-800">Precat</h6>
        </div>
      </div>
      <div
        onClick={handleHackerRank}
        className="card bg-white shadow-lg rounded-lg overflow-hidden w-32 h-32"
      >
        <img
          src={HackerRankURL}
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div>
          <h6 className="text-lg font-semibold text-gray-800">HackerRank</h6>
        </div>
      </div>
      <div
        onClick={handleLeetCode}
        className="card bg-white shadow-lg rounded-lg overflow-hidden w-32 h-32"
      >
        <img
          src={LeetCodeURL}
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div className="p-2">
          <div>
            <h6 className="text-lg font-semibold text-gray-800">LeetCode</h6>
          </div>
        </div>
      </div>

      <div
        onClick={handleCadCamCae}
        className="card bg-white shadow-lg rounded-lg overflow-hidden w-32 h-32"
      >
        <img
          src={CadCamCae}
          alt="Image"
          className="w-full h-full object-cover"
        />
        <div className="p-2">
          <div>
            <h6 className="text-lg font-semibold text-gray-800">
              Autodesk CAD/CAM/CAE
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certification;
