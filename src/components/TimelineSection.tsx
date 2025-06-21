import React, { useState } from 'react';
import { Calendar, MapPin, Award, BookOpen, ChevronDown, ChevronUp, Building } from 'lucide-react';

const TimelineSection = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const timelineData = [
    {
      year: "Oct 2021 - Present",
      title: "Manager Technology Transformation",
      company: "Altria",
      location: "Richmond, VA",
      type: "role",
      description: "Leading technology transformation initiatives for combination products technology team, managing LIMS implementations and cross-functional collaboration.",
      highlights: [
        "Creating technical and functional design specifications for Biovia OneLab and integrated systems",
        "Managing configuration file updates via remote login into application servers",
        "Leading documentation efforts by gathering information from internal and external resources",
        "Creating branching strategy for code management and deployment in Azure DevOps",
        "Cross-functional collaboration with Dassault Systemes for application updates and issue resolution",
        "Configuring lab equipment and Lantronix devices to capture data from OneLab",
        "Created process plans and worked with Dassault Systemes for implementation in Biovia OneLab",
        "Conducting stakeholder interviews to capture business processes and identify improvement opportunities",
        "Creating training documents to streamline and accelerate adoption of digitized workflows",
        "Presenting weekly updates on deliverables to core team members"
      ],
      technologies: ["Biovia OneLab", "Enovia", "Azure DevOps", "ServiceNow", "SQL", "3DExperience Platform"]
    },
    {
      year: "Nov 2018 - Jun 2020",
      title: "Mechanical Engineer",
      company: "Baker Hughes, a GE company",
      location: "Houston, TX",
      type: "role",
      description: "Analyzed data for pressure control equipment, created design and verification plans, and led engineering teams for customer requirements delivery.",
      highlights: [
        "Analyzed data for 65,000+ Pressure Control equipment parts for specifications and classification",
        "Created Design Process Plans (DPP), Design Verification Plans (DVP) and Test Procedures",
        "Completed more than 20 Engineering Work Requests (EWRs) from North America region",
        "Revised test specifications for hydrostatic and gas tests for QMS compliance",
        "Used Windchill and Teamcenter for document control and change management",
        "Led a team of 5 mechanical engineers for effective and on-time delivery",
        "Created 45 unitized assemblies in PTC Creo for Baker Hughes product catalogue",
        "Created and updated 200+ parts, assemblies, and components according to API 6A 21st ed."
      ],
      technologies: ["Windchill", "Teamcenter", "PTC Creo", "API 6A", "Quality Management Systems"]
    },
    {
      year: "Aug 2018 - Nov 2018",
      title: "Design Engineer",
      company: "BrandFX Body Company",
      location: "Fort Worth, TX",
      type: "role",
      description: "Designed truck components and created detailed installation manuals for composite service bodies.",
      highlights: [
        "Designed a bumper for F-450 truck composite service body with 20,000 lbf towing capacity",
        "Performed FEA simulation for design validation on SolidWorks Simulation",
        "Designed detailed installation manual for F-150 truck composite inserts",
        "Designed sheet metal parts and created detailed drawings for composite truck bodies",
        "Performed drawing and CAD part revisions on Product Data Management (PDM SolidWorks)"
      ],
      technologies: ["SolidWorks", "SolidWorks Simulation", "PDM", "FEA", "Sheet Metal Design"]
    },
    {
      year: "Jan 2017 - May 2018",
      title: "Software Support (Student Assistant)",
      company: "University of Texas at Arlington",
      location: "Arlington, TX",
      type: "role",
      description: "Provided software support, led technology surveys, and managed security compliance projects.",
      highlights: [
        "Designed standard SolidWorks instruction manual reducing inquiries by 20%",
        "Led team of 8 lab assistants to conduct annual technology survey",
        "Received more than double (323) responses compared to previous year",
        "Managed security compliance project of university devices achieving 100% compliance"
      ],
      technologies: ["SolidWorks", "Technical Documentation", "Project Management"]
    },
    {
      year: "Aug 2016 - May 2018",
      title: "Master of Engineering in Mechanical Engineering",
      company: "University of Texas at Arlington",
      location: "Arlington, TX",
      type: "education",
      description: "Specialized in Analytic Methods with merit-based scholarship recognition.",
      highlights: [
        "Merit-based scholarship recipient",
        "Specialized in Analytic Methods",
        "Completed advanced coursework in mechanical engineering principles",
        "Developed analytical and problem-solving skills"
      ]
    }
  ];

  const certifications = [
    "Google Data Analytics Specialization",
    "Requirements Engineering - University of Colorado",
    "Mastering User Stories",
    "Wharton Materiality of ESG Factors"
  ];

  const honors = [
    "US State Department Sponsored KL-YES Alumnus",
    "AYUSA Award for Community Service (50+ hours in 3 months)",
    "Youth Leadership Summit (San Jose, CA) - Top 50 exchange students worldwide"
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'role':
        return <Building className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'education':
        return <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'role':
        return 'bg-blue-600 text-white';
      case 'education':
        return 'bg-teal-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            A comprehensive timeline of my career progression, highlighting key roles, achievements, 
            and the development of expertise in LIMS systems and technology transformation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Timeline Items */}
          <div className="space-y-6 sm:space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full ${getTypeColor(item.type)} flex items-center justify-center shadow-lg z-10`}>
                  {getTypeIcon(item.type)}
                </div>

                {/* Content Card */}
                <div className="ml-6 sm:ml-8 flex-1 min-w-0">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-medium text-blue-600 mb-1">
                            {item.year}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 pr-2">
                            {item.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 mb-2 sm:mb-3 space-y-1 sm:space-y-0">
                            <span className="font-medium text-sm sm:text-base">{item.company}</span>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="text-xs sm:text-sm">{item.location}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base pr-2">
                            {item.description}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleExpanded(index)}
                          className="ml-2 sm:ml-4 p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                        >
                          {expandedItems.includes(index) ? 
                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" /> : 
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                          }
                        </button>
                      </div>

                      {/* Expanded Content */}
                      {expandedItems.includes(index) && (
                        <div className="border-t border-gray-200 pt-3 sm:pt-4">
                          <div className="mb-3 sm:mb-4">
                            <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Key Responsibilities & Achievements</h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {item.highlights.map((highlight, highlightIndex) => (
                                <li key={highlightIndex} className="flex items-start space-x-2">
                                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-600 text-xs sm:text-sm">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {item.technologies && (
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Technologies & Tools</h4>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {item.technologies.map((tech, techIndex) => (
                                  <span 
                                    key={techIndex}
                                    className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Honors */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Certifications */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600" />
              Certifications & Courses
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Honors */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-orange-600" />
              Honors & Leadership
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {honors.map((honor, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">{honor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;