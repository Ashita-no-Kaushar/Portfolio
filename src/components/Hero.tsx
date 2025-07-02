import React from 'react';
import { ChevronRight, User, FileText } from 'lucide-react';

interface HeroProps {
  onProfileClick: () => void;
  onResumeClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onProfileClick, onResumeClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="hero-content">
          {/* Enhanced title with GPU-accelerated glow */}
          <div className="hero-title-container">
            <h1 className="hero-title-main text-7xl md:text-9xl font-bold mb-8">
              KAUSHAR
            </h1>
            <div className="hero-title-glow text-7xl md:text-9xl font-bold mb-8" aria-hidden="true">
              KAUSHAR
            </div>
          </div>
          
          <div className="mb-12">
            <p className="text-2xl md:text-3xl text-blue-400 mb-6 font-medium hero-subtitle">
              Data Science Student
            </p>
            <p className="text-xl md:text-2xl text-white font-light italic hero-tagline">
              "Solving problems, one dataset at a time"
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center hero-buttons">
            <button
              onClick={onProfileClick}
              className="group relative px-10 py-5 bg-transparent border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-200 flex items-center space-x-3 hero-button-outline breathing-button"
            >
              <User className="w-6 h-6" />
              <span className="text-lg">My Profiles</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button
              onClick={onResumeClick}
              className="group relative px-10 py-5 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 flex items-center space-x-3 hero-button-solid breathing-button"
            >
              <FileText className="w-6 h-6" />
              <span className="text-lg">Resume</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;