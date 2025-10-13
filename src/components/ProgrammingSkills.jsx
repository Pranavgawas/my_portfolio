import React from "react";
import { Coffee, Code2, Zap, Braces, Database } from "lucide-react";

function ProgrammingSkills() {
  const skills = [
    {
      name: "Java",
      description: "Java, Jakarta EE, Spring Boot, JPA, Hibernate etc.",
      icon: Coffee,
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      name: ".NET",
      description: ".NET (C#), Blazor, Entity Core, ADO.NET, ASP.NET MVC, LINQ.",
      icon: Code2,
      gradient: "from-purple-500 to-blue-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      name: "JavaScript",
      description: "JavaScript, React, jQuery, Node.js.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    },
    {
      name: "React",
      description: "React, Bootstrap, React Bootstrap, HTML, CSS, Tailwind CSS.",
      icon: Braces,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20"
    },
    {
      name: "MySQL",
      description: "MySQL, SQL Server, Database Design, Query Optimization.",
      icon: Database,
      gradient: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    }
  ];

  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <div 
            key={index}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-200 hover:border-primary/30 overflow-hidden group"
          >
            {/* Gradient header */}
            <div className={`relative h-24 bg-gradient-to-br ${skill.gradient} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
              <div className="relative z-10">
                <IconComponent className="w-12 h-12 text-white drop-shadow-lg" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="card-body p-5 sm:p-6">
              <h2 className="card-title text-lg sm:text-xl font-bold text-base-content mb-2">
                {skill.name}
              </h2>
              <p className="text-sm text-base-content/70 leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProgrammingSkills;
