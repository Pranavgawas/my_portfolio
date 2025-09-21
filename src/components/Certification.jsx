import React, { useState, useEffect } from "react";
import { 
  Settings, 
  BookOpen, 
  Code2, 
  Zap, 
  Palette,
  ExternalLink 
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { SkeletonCertification } from "./SkeletonLoaders";

function Certification() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

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

  const certifications = [
    {
      title: "Hardware and Networking",
      description: "Professional certification in computer hardware and networking",
      handler: handleHardwareAndNetworking,
      icon: Settings,
      color: "text-blue-500"
    },
    {
      title: "Precat",
      description: "Pre-CAT examination certification",
      handler: handlePrecat,
      icon: BookOpen,
      color: "text-green-500"
    },
    {
      title: "HackerRank",
      description: "Programming challenges and coding assessments",
      handler: handleHackerRank,
      icon: Code2,
      color: "text-emerald-500"
    },
    {
      title: "LeetCode",
      description: "Algorithm and data structure problem solving",
      handler: handleLeetCode,
      icon: Zap,
      color: "text-yellow-500"
    },
    {
      title: "Autodesk CAD/CAM/CAE",
      description: "Computer-aided design and manufacturing specialization",
      handler: handleCadCamCae,
      icon: Palette,
      color: "text-purple-500"
    }
  ];

  if (loading) {
    return (
      <div id="certificateId" className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...Array(5)].map((_, index) => (
            <SkeletonCertification key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id="certificateId" className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 100}
              duration={500}
            >
              <div
                onClick={cert.handler}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 p-4 sm:p-6 min-h-[120px] sm:min-h-[140px] border border-base-200 hover:border-primary/20"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`flex-shrink-0 p-2 sm:p-3 rounded-lg bg-base-200/50 ${cert.color}`}>
                    <IconComponent size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-base-content leading-tight mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-primary font-medium">
                    View Certificate
                  </span>
                  <ExternalLink size={14} className="text-primary" />
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}

export default Certification;
