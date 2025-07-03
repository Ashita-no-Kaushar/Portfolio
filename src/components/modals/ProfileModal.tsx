import React, { useState } from 'react';
import { X, ArrowLeft, Linkedin, Github, Code, Trophy, BookOpen, BarChart3, Users, FileText } from 'lucide-react';

interface ProfileModalProps {
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState<'main' | 'social' | 'research' | 'coding' | 'projects'>('main');

  const profileSections = [
    {
      id: 'social',
      name: 'Social',
      icon: Users,
      description: 'Professional networking and community'
    },
    {
      id: 'research',
      name: 'Research',
      icon: BookOpen,
      description: 'Academic publications and research work'
    },
    {
      id: 'coding',
      name: 'Coding',
      icon: Code,
      description: 'Programming challenges and competitions'
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: BarChart3,
      description: 'Data visualization and portfolio work'
    }
  ];

  const profileLinks = {
    social: [
      {
        name: 'LinkedIn',
        url: '#',
        icon: Linkedin,
        description: 'Professional network and career highlights'
      },
      {
        name: 'Twitter',
        url: '#',
        icon: Users,
        description: 'Data science discussions and insights'
      }
    ],
    research: [
      {
        name: 'Google Scholar',
        url: '#',
        icon: BookOpen,
        description: 'Academic publications and citations'
      },
      {
        name: 'ResearchGate',
        url: '#',
        icon: FileText,
        description: 'Research papers and collaborations'
      }
    ],
    coding: [
      {
        name: 'GitHub',
        url: '#',
        icon: Github,
        description: 'Code repositories and open source contributions'
      },
      {
        name: 'HackerRank',
        url: '#',
        icon: Code,
        description: 'Programming challenges and certifications'
      },
      {
        name: 'Kaggle',
        url: '#',
        icon: Trophy,
        description: 'Data science competitions and datasets'
      }
    ],
    projects: [
      {
        name: 'Tableau Public',
        url: '#',
        icon: BarChart3,
        description: 'Interactive data visualizations and dashboards'
      },
      {
        name: 'Medium',
        url: '#',
        icon: FileText,
        description: 'Technical articles and data science insights'
      }
    ]
  };

  const renderMainContent = () => (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white glow-text">
          My Profiles
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-blue-400 hover:text-blue-300 transition-colors glow-icon-hover"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileSections.map((section) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as any)}
              className="flex items-center space-x-4 p-6 border border-blue-400 border-opacity-30 rounded-xl hover:border-opacity-60 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-300 group breathing-glow floating-element text-left"
            >
              <div className="p-4 bg-blue-400 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all glow-icon">
                <IconComponent className="w-8 h-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {section.name}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {section.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );

  const renderSectionContent = (sectionId: string) => {
    const links = profileLinks[sectionId as keyof typeof profileLinks] || [];
    
    return (
      <>
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setActiveSection('main')}
            className="flex items-center justify-center p-3 bg-transparent border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-black transition-all breathing-glow"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-white glow-text">
            {profileSections.find(s => s.id === sectionId)?.name} Profiles
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-blue-400 hover:text-blue-300 transition-colors glow-icon-hover"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 border border-blue-400 border-opacity-30 rounded-xl hover:border-opacity-60 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-300 group breathing-glow floating-element"
              >
                <div className="p-3 bg-blue-400 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all glow-icon">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {link.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 bg-black border-2 border-blue-400 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto glow-modal floating-modal">
        {activeSection === 'main' && renderMainContent()}
        {activeSection !== 'main' && renderSectionContent(activeSection)}
      </div>
    </div>
  );
};

export default ProfileModal;