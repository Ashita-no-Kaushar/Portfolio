import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      role: 'Senior Data Analyst',
      company: 'TechVision Analytics',
      duration: 'Jan 2023 - Present',
      location: 'San Francisco, CA',
      description: 'Led cross-functional teams in developing predictive analytics solutions that increased operational efficiency by 35%. Implemented machine learning models for customer behavior analysis and business intelligence dashboards.',
      skills: ['Python', 'SQL', 'Tableau', 'Machine Learning', 'Statistical Analysis']
    },
    {
      role: 'Data Science Intern',
      company: 'DataFlow Solutions',
      duration: 'Jun 2022 - Dec 2022',
      location: 'New York, NY',
      description: 'Developed automated data preprocessing pipelines and created interactive visualizations for executive reporting. Collaborated with senior data scientists on A/B testing frameworks and recommendation systems.',
      skills: ['Python', 'Pandas', 'Scikit-learn', 'Power BI', 'A/B Testing']
    },
    {
      role: 'Research Assistant',
      company: 'University Data Lab',
      duration: 'Sep 2021 - May 2022',
      location: 'Boston, MA',
      description: 'Conducted research on natural language processing applications in healthcare data. Published findings in peer-reviewed conferences and contributed to open-source machine learning libraries.',
      skills: ['Python', 'NLP', 'TensorFlow', 'Research', 'Academic Writing']
    },
    {
      role: 'Business Intelligence Analyst',
      company: 'RetailMetrics Corp',
      duration: 'Mar 2021 - Aug 2021',
      location: 'Chicago, IL',
      description: 'Analyzed sales data and customer metrics to identify growth opportunities. Created automated reporting systems that reduced manual analysis time by 60% and improved decision-making processes.',
      skills: ['SQL', 'Excel', 'Power BI', 'Data Visualization', 'Business Analysis']
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 glow-text">
          Work Experience
        </h2>
        <div className="w-32 h-1 bg-blue-400 mx-auto rounded-full glow-line"></div>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-400 glow-line-vertical hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Icon - Centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                <div className="w-16 h-16 bg-black border-4 border-blue-400 rounded-full flex items-center justify-center glow-icon">
                  <Briefcase className="w-8 h-8 text-blue-400" />
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl hover:border-opacity-80 transition-all duration-300 bg-blue-400 bg-opacity-5 glow-card-hover">
                  {/* Mobile Timeline Icon */}
                  <div className="flex items-center mb-4 md:hidden">
                    <div className="w-12 h-12 bg-blue-400 bg-opacity-20 rounded-full flex items-center justify-center mr-4 glow-icon">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center text-gray-300 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 glow-text-subtle">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold mb-4 glow-text-blue">
                      {exp.company}
                    </p>
                    
                    {/* Desktop Duration and Location */}
                    <div className="hidden md:block space-y-2">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Mobile Location */}
                    <div className="md:hidden">
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center justify-center flex-shrink-0 px-4 py-2 bg-blue-400 bg-opacity-20 text-blue-400 text-sm rounded-full border border-blue-400 border-opacity-50 hover:border-opacity-100 hover:bg-opacity-30 transition-all duration-200 cursor-default glow-tool-chip"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;