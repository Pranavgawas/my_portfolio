import React from 'react';
import { Code2, Award, Briefcase, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

function QuickStats() {
  const stats = [
    {
      icon: Briefcase,
      value: "5+",
      label: "Projects Completed",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Code2,
      value: "10+",
      label: "Technologies Mastered",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Award,
      value: "CDAC",
      label: "Certified Developer",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Users,
      value: "Full Stack",
      label: "Development Expertise",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <AnimatedSection animation="fadeInUp" delay={100}>
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`card bg-gradient-to-br ${stat.bgGradient} border border-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className="card-body p-6 items-center text-center">
                    <div className={`p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl shadow-lg mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </h3>
                    <p className="text-sm sm:text-base text-base-content/70 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default QuickStats;
