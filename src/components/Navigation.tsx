import React, { useState } from 'react';
import { Menu, X, Home, User, Zap, FolderOpen, Briefcase, GraduationCap, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'work-experience', label: 'Work Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsDrawerOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 bg-blue-400 text-black rounded-lg hover:bg-blue-500 transition-all duration-300 glow-button-solid"
        aria-label="Open navigation menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Navigation Drawer */}
      <div className={`fixed inset-0 z-50 ${isDrawerOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
            isDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsDrawerOpen(false)}
        />
        
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-black border-l border-blue-400 transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            {/* Close Button */}
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-6 right-6 p-2 text-blue-400 hover:text-blue-300 transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Title */}
            <h2 className="text-2xl font-bold text-white mb-8 glow-text">
              Navigation
            </h2>

            {/* Menu Items */}
            <nav className="space-y-4">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center space-x-4 p-3 text-left text-white hover:text-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded-lg transition-all duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;