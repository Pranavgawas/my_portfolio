import React, { useState } from "react";
import { GraduationCap, Award, BookOpen, ExternalLink, Calendar, MapPin, ChevronDown, Sparkles } from 'lucide-react';

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
      gradient: 'from-purple-500 via-purple-600 to-pink-500',
      bgGradient: 'from-purple-500/5 via-purple-600/5 to-pink-500/5',
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
      gradient: 'from-blue-500 via-blue-600 to-cyan-500',
      bgGradient: 'from-blue-500/5 via-blue-600/5 to-cyan-500/5',
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
      gradient: 'from-green-500 via-green-600 to-emerald-500',
      bgGradient: 'from-green-500/5 via-green-600/5 to-emerald-500/5',
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
      gradient: 'from-orange-500 via-orange-600 to-red-500',
      bgGradient: 'from-orange-500/5 via-orange-600/5 to-red-500/5',
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
          {/* Center line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30"></div>
          
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            const isLeft = index % 2 === 0;
            const isExpanded = expandedItem === edu.id;
            
            return (
              <div key={edu.id} className={`relative mb-16 ${isLeft ? 'pr-1/2' : 'pl-1/2'}`}>
                <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <article 
                      className={`group card bg-gradient-to-br ${edu.bgGradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-base-200/50 hover:border-primary/30 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden`}
                      onClick={() => toggleExpand(edu.id)}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => e.key === 'Enter' && toggleExpand(edu.id)}
                      aria-expanded={isExpanded}
                    >
                      {/* Animated gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className={`card-body p-6 relative z-10 ${isLeft ? 'items-end' : 'items-start'}`}>
                        {/* Header */}
                        <div className={`flex items-start gap-4 w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`p-3 bg-gradient-to-br ${edu.gradient} rounded-2xl shadow-lg flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <IconComponent className="w-7 h-7 text-white" aria-hidden="true" />
                          </div>
                          <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                            <div className={`flex items-center gap-2 text-sm text-base-content/60 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              <Calendar className="w-4 h-4" aria-hidden="true" />
                              <span className="font-medium">{edu.year}</span>
                            </div>
                            <h3 className="text-xl font-bold text-base-content mb-1 group-hover:text-primary transition-colors duration-300">
                              {edu.title}
                            </h3>
                            <p className="text-sm text-base-content/70 mb-3 font-medium">
                              {edu.subtitle}
                            </p>
                            <div className={`flex items-center gap-1.5 text-xs text-base-content/50 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Stats with enhanced styling */}
                        <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <span className="badge badge-lg badge-outline border-2 font-semibold hover:scale-105 transition-transform">
                            📊 {edu.percentage}
                          </span>
                          <span className={`badge badge-lg bg-gradient-to-r ${edu.gradient} text-white border-0 font-semibold shadow-md hover:scale-105 transition-transform`}>
                            🏆 {edu.grade}
                          </span>
                        </div>

                        {/* Expandable Content */}
                        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                          <div className={`pt-4 border-t border-base-200/50 w-full ${isLeft ? 'text-right' : 'text-left'}`}>
                            <ul className="space-y-3 mb-4">
                              {edu.highlights.map((highlight, idx) => (
                                <li key={idx} className={`text-sm text-base-content/80 flex items-start gap-2 ${isLeft ? 'flex-row-reverse text-right' : ''} animate-fadeIn`} style={{animationDelay: `${idx * 100}ms`}}>
                                  <span className={`text-transparent bg-gradient-to-r ${edu.gradient} bg-clip-text mt-1 font-bold`}>✦</span>
                                  <span className="flex-1 leading-relaxed">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {/* Skills */}
                            <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              {edu.skills.map((skill, idx) => (
                                <span key={idx} className={`badge badge-sm bg-gradient-to-r ${edu.gradient} text-white border-0 shadow-sm hover:scale-110 transition-transform`}>
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
                              className={`btn btn-sm bg-gradient-to-r ${edu.gradient} text-white border-0 gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300`}
                              aria-label={`View ${edu.title} certificate`}
                            >
                              <ExternalLink className="w-4 h-4" aria-hidden="true" />
                              View Certificate
                            </button>
                          </div>
                        </div>
                        
                        {!isExpanded && (
                          <div className={`flex items-center gap-1.5 text-xs text-base-content/40 mt-3 ${isLeft ? 'justify-end' : 'justify-start'} group-hover:text-primary transition-colors`}>
                            <span>Click to view details</span>
                            <ChevronDown className="w-3.5 h-3.5 animate-bounce" aria-hidden="true" />
                          </div>
                        )}
                      </div>
                    </article>
                  </div>

                  {/* Timeline Dot with enhanced styling */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br ${edu.gradient} rounded-full border-4 border-base-100 shadow-xl flex items-center justify-center z-10 group-hover:scale-125 transition-all duration-300`}>
                    <span className="text-white text-sm font-bold">{index + 1}</span>
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
              className="group card bg-base-100 shadow-xl border border-base-200 hover:border-primary/30 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              onClick={() => toggleExpand(edu.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && toggleExpand(edu.id)}
              aria-expanded={isExpanded}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${edu.gradient} p-6 relative overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                </div>
                
                <div className="absolute top-4 right-4 badge badge-lg bg-white/20 text-white border-white/40 backdrop-blur-sm font-bold">
                  #{index + 1}
                </div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-white/90 mb-2">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span className="font-semibold">{edu.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                      {edu.title}
                    </h3>
                    <p className="text-sm text-white/90 font-medium">
                      {edu.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-body p-6">
                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-lg badge-outline border-2 font-semibold">
                    📊 {edu.percentage}
                  </span>
                  <span className={`badge badge-lg bg-gradient-to-r ${edu.gradient} text-white border-0 font-semibold shadow-md`}>
                    🏆 {edu.grade}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-base-content/60 px-3 py-1 bg-base-200/50 rounded-full">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="mt-4 pt-4 border-t border-base-200">
                    <ul className="space-y-3 mb-4">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-base-content/80 flex items-start gap-2 animate-fadeIn" style={{animationDelay: `${idx * 100}ms`}}>
                          <span className={`text-transparent bg-gradient-to-r ${edu.gradient} bg-clip-text mt-1 font-bold`}>✦</span>
                          <span className="flex-1 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {edu.skills.map((skill, idx) => (
                        <span key={idx} className={`badge badge-sm bg-gradient-to-r ${edu.gradient} text-white border-0 shadow-sm`}>
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
                      className={`btn btn-sm bg-gradient-to-r ${edu.gradient} text-white border-0 gap-2 w-full hover:scale-105 hover:shadow-lg transition-all duration-300`}
                      aria-label={`View ${edu.title} certificate`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      View Certificate
                    </button>
                  </div>
                </div>
                
                {!isExpanded && (
                  <div className="flex items-center justify-center gap-1.5 text-sm text-base-content/60 mt-2 group-hover:text-primary transition-colors">
                    <span>Tap to view details</span>
                    <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
                  </div>
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
