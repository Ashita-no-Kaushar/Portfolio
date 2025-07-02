import React, { useState } from 'react';
import { ExternalLink, Github, FileText, Code, Database, BarChart3, Brain } from 'lucide-react';

interface ProjectDocumentationData {
  id: string;
  title: string;
  theory: string;
  diagrams: string[];
  techStack: string[];
  description: string;
}

interface ProjectsProps {
  onDocumentationClick: (project: ProjectDocumentationData) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onDocumentationClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filters = [
    { name: 'All', icon: Code },
    { name: 'ML', icon: Brain },
    { name: 'DL', icon: Brain },
    { name: 'Dashboard', icon: BarChart3 },
    { name: 'Analysis', icon: Database }
  ];

  const projects = [
    {
      id: 'fraud-detection',
      title: 'Credit Card Fraud Detection',
      category: 'ML',
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Advanced machine learning system using ensemble methods to detect fraudulent transactions with 94.7% accuracy.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'XGBoost'],
      liveUrl: '#',
      githubUrl: '#',
      documentation: {
        id: 'fraud-detection',
        title: 'Credit Card Fraud Detection',
        theory: 'This project implements a sophisticated fraud detection system using ensemble machine learning techniques. The approach combines Random Forest, XGBoost, and Isolation Forest algorithms to identify fraudulent credit card transactions. The system employs advanced feature engineering techniques including transaction frequency analysis, spending pattern recognition, and temporal behavior modeling. The ensemble approach helps reduce false positives while maintaining high detection rates for actual fraud cases.',
        diagrams: [
          'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=500',
          'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
        ],
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'XGBoost'],
        description: 'Advanced machine learning system using ensemble methods to detect fraudulent transactions with 94.7% accuracy.'
      }
    },
    {
      id: 'sentiment-analysis',
      title: 'Social Media Sentiment Analysis',
      category: 'DL',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Deep learning model analyzing social media sentiment using LSTM networks and BERT transformers.',
      techStack: ['Python', 'TensorFlow', 'LSTM', 'BERT', 'NLP'],
      liveUrl: '#',
      githubUrl: '#',
      documentation: {
        id: 'sentiment-analysis',
        title: 'Social Media Sentiment Analysis',
        theory: 'This deep learning project focuses on analyzing sentiment in social media posts using state-of-the-art natural language processing techniques. The system combines LSTM networks for sequential pattern recognition with BERT transformers for contextual understanding. The model processes text data through multiple preprocessing stages including tokenization, embedding, and attention mechanisms to accurately classify sentiment as positive, negative, or neutral.',
        diagrams: [
          'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
        ],
        techStack: ['Python', 'TensorFlow', 'LSTM', 'BERT', 'NLP'],
        description: 'Deep learning model analyzing social media sentiment using LSTM networks and BERT transformers.'
      }
    },
    {
      id: 'sales-dashboard',
      title: 'Interactive Sales Dashboard',
      category: 'Dashboard',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Real-time sales analytics dashboard with predictive forecasting and interactive visualizations.',
      techStack: ['Python', 'Plotly', 'Dash', 'Prophet', 'Streamlit'],
      liveUrl: '#',
      githubUrl: '#',
      documentation: {
        id: 'sales-dashboard',
        title: 'Interactive Sales Dashboard',
        theory: 'This comprehensive dashboard provides real-time sales analytics with advanced forecasting capabilities. Built using Plotly and Dash, it features interactive visualizations that allow users to explore sales data across multiple dimensions. The system incorporates Prophet algorithm for time series forecasting, enabling accurate sales predictions. The dashboard includes KPI tracking, trend analysis, and drill-down capabilities for detailed insights.',
        diagrams: [
          'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
        ],
        techStack: ['Python', 'Plotly', 'Dash', 'Prophet', 'Streamlit'],
        description: 'Real-time sales analytics dashboard with predictive forecasting and interactive visualizations.'
      }
    },
    {
      id: 'customer-segmentation',
      title: 'Customer Segmentation Analysis',
      category: 'Analysis',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Advanced clustering analysis using K-means and RFM methodology for targeted marketing strategies.',
      techStack: ['Python', 'Scikit-learn', 'K-means', 'RFM Analysis', 'Tableau'],
      liveUrl: '#',
      githubUrl: '#',
      documentation: {
        id: 'customer-segmentation',
        title: 'Customer Segmentation Analysis',
        theory: 'This project employs advanced clustering techniques to segment customers based on their purchasing behavior and characteristics. Using K-means clustering combined with RFM (Recency, Frequency, Monetary) analysis, the system identifies distinct customer groups for targeted marketing. The analysis includes feature scaling, optimal cluster determination using elbow method and silhouette analysis, and comprehensive visualization of customer segments.',
        diagrams: [
          'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
        ],
        techStack: ['Python', 'Scikit-learn', 'K-means', 'RFM Analysis', 'Tableau'],
        description: 'Advanced clustering analysis using K-means and RFM methodology for targeted marketing strategies.'
      }
    },
    {
      id: 'recommendation-engine',
      title: 'Movie Recommendation System',
      category: 'ML',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'Hybrid recommendation system combining collaborative filtering and content-based approaches.',
      techStack: ['Python', 'Surprise', 'Matrix Factorization', 'Collaborative Filtering'],
      liveUrl: '#',
      githubUrl: '#',
      documentation: {
        id: 'recommendation-engine',
        title: 'Movie Recommendation System',
        theory: 'This hybrid recommendation system combines collaborative filtering and content-based approaches to provide personalized movie recommendations. The system uses matrix factorization techniques like SVD and NMF to identify latent factors in user-movie interactions. Content-based filtering analyzes movie features such as genre, director, and cast to find similar movies. The hybrid approach addresses cold start problems and improves recommendation accuracy.',
        diagrams: [
          'https://images.pexels.com/photos/7991761/pexels-photo-7991761.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
        ],
        techStack: ['Python', 'Surprise', 'Matrix Factorization', 'Collaborative Filtering'],
        description: 'Hybrid recommendation system combining collaborative filtering and content-based approaches.'
      }
    },
    {
      id: 'medical-classifier',
      title: 'Medical Image Classifier',
      category: 'DL',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      description: 'CNN-based medical image classification system using transfer learning for diagnostic assistance.',
      techStack: ['Python', 'PyTorch', 'CNN', 'ResNet', 'Transfer Learning'],
      liveUrl: '#',
      githubUrl: '#',
      documentation: {
        id: 'medical-classifier',
        title: 'Medical Image Classifier',
        theory: 'This deep learning project develops a convolutional neural network for medical image classification to assist in diagnostic processes. Using transfer learning with pre-trained ResNet architectures, the model achieves high accuracy in classifying medical images. The system includes data augmentation techniques, proper validation strategies, and interpretability features using Grad-CAM to highlight important regions in medical images.',
        diagrams: [
          'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
        ],
        techStack: ['Python', 'PyTorch', 'CNN', 'ResNet', 'Transfer Learning'],
        description: 'CNN-based medical image classification system using transfer learning for diagnostic assistance.'
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 glow-text">
          Projects
        </h2>
        <div className="w-32 h-1 bg-blue-400 mx-auto rounded-full glow-line"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-16">
        <div className="flex flex-wrap gap-4 p-2 bg-blue-400 bg-opacity-5 rounded-xl border border-blue-400 border-opacity-20">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`filter-btn px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  activeFilter === filter.name
                    ? 'bg-blue-400 text-black glow-button-solid'
                    : 'bg-transparent text-blue-400 hover:bg-blue-400 hover:bg-opacity-20 glow-button-outline'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{filter.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card bg-black border border-blue-400 border-opacity-30 rounded-xl overflow-hidden hover:border-opacity-80 transition-all duration-300 glow-card-hover group floating-card"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-400 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              
              {/* Hover Overlay */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center p-6 animate-fade-in">
                  <h4 className="text-lg font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-400 bg-opacity-20 text-blue-400 text-xs rounded border border-blue-400 border-opacity-50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-blue-400 bg-opacity-20 text-blue-400 text-xs rounded border border-blue-400 border-opacity-50">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-blue-400 bg-opacity-20 text-blue-400 text-xs rounded-full border border-blue-400 border-opacity-50 glow-category-tag">
                  {project.category}
                </span>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-blue-400 text-black text-sm font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 flex items-center justify-center space-x-2 ripple-effect"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live</span>
                </a>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-transparent border border-blue-400 text-blue-400 text-sm font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-200 flex items-center justify-center space-x-2 ripple-effect"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                
                <button
                  onClick={() => onDocumentationClick(project.documentation)}
                  className="flex-1 px-4 py-2 bg-transparent border border-blue-400 text-blue-400 text-sm font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-200 flex items-center justify-center space-x-2 ripple-effect"
                >
                  <FileText className="w-4 h-4" />
                  <span>Docs</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;