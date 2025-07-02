import React from 'react';
import { Brain, BarChart3, Eye, Code, Database, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const skillDomains = [
    {
      title: 'Data Analysis',
      icon: BarChart3,
      description: 'Statistical analysis, data cleaning, and exploratory data analysis',
      level: 'Advanced'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      description: 'Supervised and unsupervised learning, model optimization',
      level: 'Intermediate'
    },
    {
      title: 'Data Visualization',
      icon: Eye,
      description: 'Interactive dashboards, storytelling with data',
      level: 'Advanced'
    },
    {
      title: 'Programming',
      icon: Code,
      description: 'Python, R, SQL for data science applications',
      level: 'Advanced'
    },
    {
      title: 'Big Data',
      icon: Database,
      description: 'Handling large datasets, distributed computing',
      level: 'Beginner'
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      description: 'AWS, Google Cloud for scalable data solutions',
      level: 'Intermediate'
    }
  ];

  const tools = [
    'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly',
    'Scikit-learn', 'TensorFlow', 'Keras', 'Jupyter', 'R', 'SQL',
    'Tableau', 'Power BI', 'Excel', 'Git', 'Docker', 'AWS',
    'Google Colab', 'VS Code', 'Anaconda', 'Apache Spark'
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'text-green-400 border-green-400';
      case 'Intermediate': return 'text-blue-400 border-blue-400';
      case 'Beginner': return 'text-yellow-400 border-yellow-400';
      default: return 'text-blue-400 border-blue-400';
    }
  };

  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 glow-text">
          Skills & Expertise
        </h2>
        <div className="w-32 h-1 bg-blue-400 mx-auto rounded-full glow-line"></div>
      </div>

      {/* Skill Domains */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {skillDomains.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.title}
              className="skill-card p-8 border border-blue-400 border-opacity-30 rounded-xl hover:border-opacity-80 transition-all duration-300 bg-blue-400 bg-opacity-5 glow-card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-blue-400 bg-opacity-20 rounded-full group-hover:bg-opacity-40 transition-all duration-300 glow-icon">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-blue-400 transition-colors duration-300">
                {skill.title}
              </h3>
              
              <p className="text-gray-300 text-center mb-4 leading-relaxed">
                {skill.description}
              </p>
              
              <div className="flex justify-center">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getLevelColor(skill.level)} bg-opacity-20 glow-level-tag`}>
                  {skill.level}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tools Used */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-8 glow-text-subtle">
          Tools Used
        </h3>
        <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <span
              key={tool}
              className="tool-chip px-5 py-3 bg-blue-400 bg-opacity-10 text-blue-400 rounded-lg border border-blue-400 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 transition-all duration-200 cursor-default glow-tool-chip"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;