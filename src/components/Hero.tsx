import React from 'react';
import { ArrowRight, Award, Users, TrendingUp, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToCollaboration = () => {
    const element = document.getElementById('collaboration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Technology Transformation Manager
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Mian Sarmad Arif
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-4xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mt-2">
                Technology Transformation Manager
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Specialized in enterprise implementation of LIMS, PLM and FEA.
            </p>

            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 mb-6 sm:mb-8">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Houston, TX</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
              <button 
                onClick={scrollToCollaboration}
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group text-sm sm:text-base"
              >
                <span>Let's Collaborate</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-sm sm:text-base"
              >
                View Experience
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900">8+</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">Technology Transformation</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">Multidisciplinary</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">Technology Integration</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">US State Dept.</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">KL-YES Program Alumnus</div>
              </div>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/my-photo.jpg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;