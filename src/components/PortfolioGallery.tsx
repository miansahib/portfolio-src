import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, TrendingUp, Filter, Settings, Database, Code } from 'lucide-react';

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Biovia OneLab Implementation",
      category: "lims",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600",
      client: "Altria - Combination Products",
      duration: "Ongoing",
      team: "Cross-functional",
      impact: "Streamlined lab operations",
      description: "Leading technical and functional design specifications for Biovia OneLab and integrated systems, managing configuration files and task plans.",
      technologies: ["Biovia OneLab", "Workbook", "CisPro", "Compose", "Lantronix Devices"]
    },
    {
      id: 2,
      title: "Azure DevOps Integration",
      category: "devops",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      client: "Altria Technology Team",
      duration: "2022-Present",
      team: "Development team",
      impact: "Improved deployment efficiency",
      description: "Creating branching strategy for code management and deployment, establishing CI/CD pipelines for technology transformation projects.",
      technologies: ["Azure DevOps", "Git", "CI/CD", "Branching Strategy", "Code Management"]
    },
    {
      id: 3,
      title: "PLM Process Implementation",
      category: "plm",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      client: "Altria - Digital Transformation",
      duration: "2021-Present",
      team: "Business stakeholders",
      impact: "Enhanced process efficiency",
      description: "Created process plans and collaborated with Dassault Systemes for implementation in Biovia OneLab and 3DExperience platform.",
      technologies: ["Enovia", "3DExperience Platform", "Process Design", "PLM", "Dassault Systemes"]
    },
    {
      id: 4,
      title: "Pressure Control Equipment Analysis",
      category: "engineering",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
      client: "Baker Hughes",
      duration: "2018-2020",
      team: "5 engineers",
      impact: "65,000+ parts analyzed",
      description: "Comprehensive data analysis for pressure control equipment parts, creating design and verification plans for oil field equipment.",
      technologies: ["Windchill", "Teamcenter", "PTC Creo", "API 6A", "Quality Management"]
    },
    {
      id: 5,
      title: "ServiceNow Configuration",
      category: "itsm",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      client: "Altria IT Operations",
      duration: "2021-Present",
      team: "IT support team",
      impact: "Streamlined IT processes",
      description: "Creating configuration items, knowledge articles, service requests and incidents in ServiceNow for technology transformation initiatives.",
      technologies: ["ServiceNow", "ITSM", "Configuration Management", "Knowledge Base", "Incident Management"]
    },
    {
      id: 6,
      title: "Truck Component Design & FEA",
      category: "design",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
      client: "BrandFX Body Company",
      duration: "2018",
      team: "Design team",
      impact: "20,000 lbf towing capacity",
      description: "Designed bumper for F-450 truck composite service body with comprehensive FEA simulation for design validation.",
      technologies: ["SolidWorks", "SolidWorks Simulation", "FEA", "PDM", "Sheet Metal Design"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: portfolioItems.length },
    { id: 'lims', label: 'LIMS Systems', count: portfolioItems.filter(item => item.category === 'lims').length },
    { id: 'plm', label: 'PLM Implementation', count: portfolioItems.filter(item => item.category === 'plm').length },
    { id: 'devops', label: 'DevOps & Integration', count: portfolioItems.filter(item => item.category === 'devops').length },
    { id: 'engineering', label: 'Engineering Analysis', count: portfolioItems.filter(item => item.category === 'engineering').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Project Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Explore key projects and implementations across LIMS systems, PLM solutions, 
            and technology transformation initiatives at leading organizations.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{filter.label}</span>
                <span className="sm:hidden">{filter.label.split(' ')[0]}</span>
                <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs ${
                  activeFilter === filter.id ? 'bg-blue-500' : 'bg-gray-300'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <button className="bg-white text-gray-900 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg flex items-center space-x-1 sm:space-x-2 font-medium text-xs sm:text-sm">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-1 sm:mb-2 text-sm sm:text-base">{item.client}</p>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    </div>
                    <div className="font-medium text-gray-900 text-xs leading-tight">{item.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                    </div>
                    <div className="font-medium text-gray-900 text-xs leading-tight">{item.team}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                    </div>
                    <div className="font-medium text-gray-900 text-xs leading-tight">{item.impact}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {item.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                      +{item.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;