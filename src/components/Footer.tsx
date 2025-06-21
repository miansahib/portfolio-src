import React from 'react';
import { Mail, Phone, MapPin, Linkedin, FileText, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg"></div>
              <span className="font-bold text-lg sm:text-xl">Mian Sarmad Arif</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              LIMS Technical Analyst and Technology Transformation Manager specializing in 
              Biovia OneLab, PLM systems, and digital transformation initiatives.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-medium">YES Program Alumnus</div>
                <div className="text-xs text-gray-400">US State Department Sponsored</div>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Expertise Areas</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                LIMS & Biovia OneLab
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                PLM & Enovia Systems
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                System Architecture
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Digital Transformation
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Azure DevOps
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Agile Project Management
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Technologies</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li className="hover:text-white transition-colors duration-200">
                Biovia OneLab Suite
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Enovia & 3DExperience
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Azure DevOps & ServiceNow
              </li>
              <li className="hover:text-white transition-colors duration-200">
                SQL & Database Management
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Windchill & Teamcenter
              </li>
              <li className="hover:text-white transition-colors duration-200">
                Quality Management Systems
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Get In Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-400 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a href="mailto:mian@melsii.com" className="hover:text-white transition-colors duration-200 break-all">
                  mian@melsii.com
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-400 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a href="tel:682-256-3360" className="hover:text-white transition-colors duration-200">
                  682-256-3360
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-400 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Houston, TX</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-400 text-sm sm:text-base">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a href="https://www.linkedin.com/in/miansarmad/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800">
              <a 
                href="#"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Mian Sarmad Arif. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
              Professional Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;