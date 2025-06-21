import React, { useState } from 'react';
import { Settings, Database, Code, Users, ChevronRight, CheckCircle, TrendingUp, Award } from 'lucide-react';

const ExpertiseSection = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);

  const expertiseAreas = [
    {
      icon: Settings,
      title: "LIMS & Laboratory Systems",
      subtitle: "Biovia OneLab Specialist",
      description: "Expert in Biovia OneLab (Workbook, CisPro, Compose) configuration, lab equipment integration, and laboratory information management systems.",
      technologies: ["Biovia OneLab", "Workbook", "CisPro", "Compose", "Lab Equipment Configuration", "Lantronix Devices"],
      achievements: [
        "Managing configuration files and task plans via remote application servers",
        "Configuring lab equipment and Lantronix devices for data capture",
        "Leading documentation efforts for LIMS implementations",
        "Cross-functional collaboration with Dassault Systemes for system updates"
      ]
    },
    {
      icon: Database,
      title: "System Architecture & Integration",
      subtitle: "Technical Design & Implementation",
      description: "Creating technical and functional design specifications for integrated systems, managing database operations, and ensuring seamless system connectivity.",
      technologies: ["System Architecture", "SQL", "Azure DevOps", "ServiceNow", "Database Administration"],
      achievements: [
        "Creating technical and functional design specifications",
        "Managing branching strategy for code management in Azure DevOps",
        "Creating configuration items and knowledge articles in ServiceNow",
        "Collaborating with database administrators for system updates"
      ]
    },
    {
      icon: Code,
      title: "PLM & Digital Transformation",
      subtitle: "Process Optimization & Implementation",
      description: "Leading digital transformation initiatives, implementing PLM solutions, and optimizing business processes for enhanced efficiency.",
      technologies: ["Enovia", "3DExperience Platform", "PLM", "Process Design", "Digital Transformation"],
      achievements: [
        "Created process plans for Biovia OneLab and 3DExperience platform",
        "Documented current and future state business processes",
        "Conducting stakeholder interviews for process improvement",
        "Creating training documents for workflow digitization"
      ]
    },
    {
      icon: Users,
      title: "Agile Leadership & Requirements",
      subtitle: "Cross-Functional Team Management",
      description: "Leveraging agile methodology to deliver value, managing requirements, and leading cross-functional teams in technology transformation projects.",
      technologies: ["Agile/Scrum", "Requirements Management", "SDLC", "Jira", "Confluence"],
      achievements: [
        "Attending daily Scrum meetings representing business interests",
        "Documenting and maintaining requirements from SMEs",
        "Presenting weekly updates on deliverables to core teams",
        "Leading cross-functional collaboration initiatives"
      ]
    }
  ];

  return (
    <section id="expertise" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Core Expertise Areas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Specialized knowledge in LIMS systems, digital transformation, and agile project management 
            with proven results in enterprise technology environments.
          </p>
        </div>

        {/* Expertise Navigation */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Navigation Tabs */}
          <div className="lg:w-1/3">
            <div className="space-y-3 sm:space-y-4">
              {expertiseAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveExpertise(index)}
                    className={`w-full text-left p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                      activeExpertise === index
                        ? 'bg-blue-50 border-2 border-blue-200 shadow-md'
                        : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`p-2 sm:p-3 rounded-lg flex-shrink-0 ${
                        activeExpertise === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{area.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">{area.subtitle}</p>
                      </div>
                      <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 flex-shrink-0 ${
                        activeExpertise === index ? 'rotate-90 text-blue-600' : 'text-gray-400'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {expertiseAreas[activeExpertise].title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
                  {expertiseAreas[activeExpertise].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                    <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expertiseAreas[activeExpertise].technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {expertiseAreas[activeExpertise].achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;