import React, { useState } from 'react';
import { GraduationCap, Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react';

const Education: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Stanford University',
      duration: '2020 - 2022',
      gpa: '3.9/4.0',
      description: 'Specialized in machine learning, statistical modeling, and big data analytics. Completed thesis on "Deep Learning Applications in Healthcare Predictive Analytics" with focus on neural networks and time series forecasting.',
      courses: [
        'Advanced Machine Learning',
        'Statistical Learning Theory',
        'Deep Learning',
        'Big Data Systems',
        'Natural Language Processing',
        'Computer Vision'
      ],
      achievements: [
        'Dean\'s List for 4 consecutive semesters',
        'Outstanding Graduate Student Award',
        'Published 2 research papers in top-tier conferences'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      duration: '2016 - 2020',
      gpa: '3.8/4.0',
      description: 'Strong foundation in computer science with emphasis on algorithms, data structures, and software engineering. Completed multiple projects involving data analysis and web development.',
      courses: [
        'Data Structures and Algorithms',
        'Database Systems',
        'Software Engineering',
        'Statistics and Probability',
        'Linear Algebra',
        'Discrete Mathematics'
      ],
      achievements: [
        'Summa Cum Laude graduate',
        'CS Department Honor Society member',
        'Hackathon winner - Best Data Analytics Project'
      ]
    },
    {
      degree: 'Data Science Bootcamp',
      institution: 'General Assembly',
      duration: '2019 (Summer)',
      gpa: 'Certificate',
      description: 'Intensive 12-week program covering practical applications of data science tools and techniques. Focused on real-world projects and industry best practices.',
      courses: [
        'Python for Data Science',
        'SQL and Database Management',
        'Data Visualization with Tableau',
        'Machine Learning Fundamentals',
        'Statistical Analysis',
        'Capstone Project'
      ],
      achievements: [
        'Top 5% of cohort performance',
        'Best Capstone Project Award',
        'Mentored 3 junior students'
      ]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
          Education
        </h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full glow-line"></div>
      </div>

      <div className="space-y-8">
        {education.map((edu, index) => {
          const isExpanded = expandedCards.includes(index);
          
          return (
            <div
              key={index}
              className="border border-blue-400 border-opacity-30 rounded-lg hover:border-opacity-60 transition-all duration-300 bg-blue-400 bg-opacity-5 glow-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header - Always visible */}
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3 bg-blue-400 bg-opacity-20 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mt-3 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  
                  <button className="ml-4 p-2 text-blue-400 hover:text-blue-300 transition-colors">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded content */}
              <div className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 border-t border-blue-400 border-opacity-20 pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Relevant Coursework
                      </h4>
                      <div className="space-y-2">
                        {edu.courses.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="px-3 py-2 bg-blue-400 bg-opacity-10 text-blue-400 rounded border border-blue-400 border-opacity-30 text-sm"
                          >
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;