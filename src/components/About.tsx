import React from 'react';
import { Brain, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
          About Me
        </h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full glow-line"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm Kaushar, a passionate data science enthusiast with a deep fascination for uncovering 
            hidden patterns in data and transforming raw information into actionable insights. My journey 
            in data science combines strong analytical thinking with cutting-edge technology.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            With expertise in machine learning, statistical analysis, and data visualization, I strive 
            to bridge the gap between complex data and meaningful business solutions. Every dataset 
            tells a story, and I'm here to help tell it.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <span className="px-4 py-2 bg-blue-400 bg-opacity-20 text-blue-400 rounded-full border border-blue-400 glow-tag">
              Problem Solver
            </span>
            <span className="px-4 py-2 bg-blue-400 bg-opacity-20 text-blue-400 rounded-full border border-blue-400 glow-tag">
              Analytical Thinker
            </span>
            <span className="px-4 py-2 bg-blue-400 bg-opacity-20 text-blue-400 rounded-full border border-blue-400 glow-tag">
              Innovation Driven
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-start space-x-4 p-6 border border-blue-400 border-opacity-30 rounded-lg hover:border-opacity-60 transition-all duration-300 glow-card">
            <div className="p-3 bg-blue-400 bg-opacity-20 rounded-lg">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Mindset</h3>
              <p className="text-gray-300">
                Leveraging statistical methods and machine learning algorithms to extract meaningful insights from complex datasets.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 border border-blue-400 border-opacity-30 rounded-lg hover:border-opacity-60 transition-all duration-300 glow-card">
            <div className="p-3 bg-blue-400 bg-opacity-20 rounded-lg">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Goal-Oriented</h3>
              <p className="text-gray-300">
                Focused on delivering practical solutions that drive business value and create measurable impact.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 border border-blue-400 border-opacity-30 rounded-lg hover:border-opacity-60 transition-all duration-300 glow-card">
            <div className="p-3 bg-blue-400 bg-opacity-20 rounded-lg">
              <Lightbulb className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Continuous Learner</h3>
              <p className="text-gray-300">
                Always exploring new technologies and methodologies to stay at the forefront of data science innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;