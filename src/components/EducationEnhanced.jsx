import React, { useState } from "react";
import { GraduationCap, Award, BookOpen, ExternalLink, Calendar, MapPin } from 'lucide-react';

function EducationEnhanced() {
  const [expandedItem, setExpandedItem] = useState(null);

  const educationData = [
    {
      id: 'cdac',
      year: '2023',
      title: 'Centre for Development of Advanced Computing (C-DAC)',
      subtitle: 'Post Graduate Diploma in Advanced Computing',
      percentage: '58.13%',
      grade: 'First Division',
      location: 'Mumbai, India',
      icon: GraduationCap,
      gradient: 'from-purple-500 to-pink-500',
      certificateUrl: 'https://drive.google.com/file/d/1ANIcv-Imh9mUH-P-gaGAohzxCsaBspN6/view',
      highlights: [
        'Experienced in learning a diverse range of programming languages, frameworks, and software development methodologies',
        'Collaborated effectively as part of a team to create the "Vehicle Configurator" project',
        'Proficient in Java, Jakarta EE, Dotnet (C#), React.js, JavaScript, Node.js, HTML/CSS, Docker, GitHub, and Spring Boot'
      ],
      skills: ['Java', 'Spring Boot', '.NET', 'React', 'Docker', 'Microservices']
    },
    {
      id: 'be',
      year: '2017-2021',
      title: 'Bachelor of Engineering',
      subtitle: 'Mechanical Engineering',
      percentage: '67.02%',
      grade: 'First Division',
      location: 'India',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
      certificateUrl: 'https://drive.google.com/file/d/167HtW4NLlNU7zfnW2mXt5lOmv6JSGt78/view',
      highlights: [
        'Graduated with First Division',
        'Demonstrated strong teamwork skills by collaborating on the creation of a project',
        'Project: "Pneumatic Sheet Metal Cutting Machine"'
      ],
      skills: ['Mechanical Design', 'CAD', 'Project Management', 'Teamwork']
    },
    {
      id: 'hsc',
      year: '2017',
      title: 'Higher Secondary Certificate (HSC)',
      subtitle: 'Science Stream - Class 12th',
      percentage: '60.76%',
      grade: 'First Division',
      location: 'India',
      icon: BookOpen,
      gradient: 'from-green-500 to-emerald-500',
      certificateUrl: 'https://drive.google.com/file/d/15tYoysi-PbRoaUBWa3a8qaQyGP2xowe4/view',
      highlights: [
        'Passed with First Division',
        'Specialised in Physics, Chemistry, Biology and Mathematics'
      ],
      skills: ['Physics', 'Chemistry', 'Biology', 'Mathematics']
    },
    {
      id: 'ssc',
      year: '2015',
      title: 'Secondary School Certificate (SSC)',
      subtitle: 'Class 10th',
      percentage: '86.40%',
      grade: 'Distinction',
      location: 'India',
      icon: Award,
      gradient: 'from-orange-500 to-red-500',
      certificateUrl: 'https://drive.google.com/file/d/15tLxsuEP7iLYpplfIJ23ek4UZyLEBZOY/view',
      highlights: [
        'Passed with Distinction',
        'Strong foundation in all core subjects'
      ],
      skills: ['Academic Excellence']
    }
  ];

  const handleCertificateClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Timeline for larger screens */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-20"></div>
          
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            const isLeft = index % 2 === 0;
            const isExpanded = expandedItem === edu.id;
            
            return (
              <div key={edu.id} className={`relative mb-12 ${isLeft ? 'pr-1/2' : 'pl-1/2'}`}>
                <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <article 
                      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 hover:border-primary/30 cursor-pointer transform hover:-translate-y-1"
                      onClick={() => toggleExpand(edu.id)}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => e.key === 'Enter' && toggleExpand(edu.id)}
                      aria-expanded={isExpanded}
                    >
                      <div className={`card-body p-6 ${isLeft ? 'items-end' : 'items-start'}`}>
                        {/* Header */}
                        <div className={`flex items-start gap-4 w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`p-3 bg-gradient-to-br ${edu.gradient} rounded-xl shadow-lg flex-shrink-0`}>
                            <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                          </div>
                          <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                            <div className={`flex items-center gap-2 text-sm text-base-content/60 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              <Calendar className="w-4 h-4" aria-hidden="true" />
                              <span>{edu.year}</span>
                            </div>
                            <h3 className="text-xl font-bold text-base-content mb-1">
                              {edu.title}
                            </h3>
                            <p className="text-sm text-base-content/70 mb-2">
                              {edu.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <span className="badge badge-lg badge-outline">
                            {edu.percentage}
                          </span>
                          <span className={`badge badge-lg badge-success text-white`}>
                            {edu.grade}
                          </span>
                        </div>

                        {/* Expandable Content */}
                        {isExpanded && (
                          <div className={`mt-4 pt-4 border-t border-base-200 w-full ${isLeft ? 'text-right' : 'text-left'}`}>
                            <ul className="space-y-2 mb-4">
                              {edu.highlights.map((highlight, idx) => (
                                <li key={idx} className={`text-sm text-base-content/80 flex items-start gap-2 ${isLeft ? 'flex-row-reverse text-right' : ''}`}>
                                  <span className="text-primary mt-1">•</span>
                                  <span className="flex-1">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {/* Skills */}
                            <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              {edu.skills.map((skill, idx) => (
                                <span key={idx} className="badge badge-sm badge-primary badge-outline">
                                  {skill}
                                </span>
                              ))}
                            </div>

                            {/* View Certificate Button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCertificateClick(edu.certificateUrl);
                              }}
                              className="btn btn-sm btn-primary gap-2"
                              aria-label={`View ${edu.title} certificate`}
                            >
                              <ExternalLink className="w-4 h-4" aria-hidden="true" />
                              View Certificate
                            </button>
                          </div>
                        )}
                        
                        {!isExpanded && (
                          <p className="text-xs text-base-content/50 mt-2">
                            Click to view details
                          </p>
                        )}
                      </div>
                    </article>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-base-100 shadow-lg flex items-center justify-center z-10">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stack layout for mobile */}
      <div className="md:hidden space-y-6">
        {educationData.map((edu, index) => {
          const IconComponent = edu.icon;
          const isExpanded = expandedItem === edu.id;
          
          return (
            <article 
              key={edu.id}
              className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary/30 cursor-pointer transition-all duration-300"
              onClick={() => toggleExpand(edu.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleExpand(edu.id)}
              aria-expanded={isExpanded}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${edu.gradient} p-6 relative`}>
                <div className="absolute top-4 right-4 badge badge-lg bg-white/20 text-white border-white/40">
                  #{index + 1}
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-white/90 mb-2">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>{edu.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {edu.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {edu.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-body p-6">
                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-lg badge-outline">
                    {edu.percentage}
                  </span>
                  <span className="badge badge-lg badge-success text-white">
                    {edu.grade}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-base-content/60">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-base-200">
                    <ul className="space-y-2 mb-4">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-base-content/80 flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="flex-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {edu.skills.map((skill, idx) => (
                        <span key={idx} className="badge badge-sm badge-primary badge-outline">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* View Certificate Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCertificateClick(edu.certificateUrl);
                      }}
                      className="btn btn-sm btn-primary gap-2 w-full"
                      aria-label={`View ${edu.title} certificate`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      View Certificate
                    </button>
                  </div>
                )}
                
                {!isExpanded && (
                  <p className="text-sm text-base-content/60 text-center">
                    Tap to view details
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default EducationEnhanced;
