import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectDocumentation from '../components/ProjectDocumentation';
import NotFound from '../components/NotFound';
import { ProjectDocumentationData } from '../App';

// Project data - in a real app, this would come from an API or database
const projectsData: Record<string, ProjectDocumentationData> = {
  'fraud-detection': {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    theory: 'This project implements a sophisticated fraud detection system using ensemble machine learning techniques. The approach combines Random Forest, XGBoost, and Isolation Forest algorithms to identify fraudulent credit card transactions. The system employs advanced feature engineering techniques including transaction frequency analysis, spending pattern recognition, and temporal behavior modeling. The ensemble approach helps reduce false positives while maintaining high detection rates for actual fraud cases.',
    diagrams: [
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=500',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
    ],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'XGBoost'],
    description: 'Advanced machine learning system using ensemble methods to detect fraudulent transactions with 94.7% accuracy.'
  },
  'sentiment-analysis': {
    id: 'sentiment-analysis',
    title: 'Social Media Sentiment Analysis',
    theory: 'This deep learning project focuses on analyzing sentiment in social media posts using state-of-the-art natural language processing techniques. The system combines LSTM networks for sequential pattern recognition with BERT transformers for contextual understanding. The model processes text data through multiple preprocessing stages including tokenization, embedding, and attention mechanisms to accurately classify sentiment as positive, negative, or neutral.',
    diagrams: [
      'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
    ],
    techStack: ['Python', 'TensorFlow', 'LSTM', 'BERT', 'NLP'],
    description: 'Deep learning model analyzing social media sentiment using LSTM networks and BERT transformers.'
  },
  'sales-dashboard': {
    id: 'sales-dashboard',
    title: 'Interactive Sales Dashboard',
    theory: 'This comprehensive dashboard provides real-time sales analytics with advanced forecasting capabilities. Built using Plotly and Dash, it features interactive visualizations that allow users to explore sales data across multiple dimensions. The system incorporates Prophet algorithm for time series forecasting, enabling accurate sales predictions. The dashboard includes KPI tracking, trend analysis, and drill-down capabilities for detailed insights.',
    diagrams: [
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
    ],
    techStack: ['Python', 'Plotly', 'Dash', 'Prophet', 'Streamlit'],
    description: 'Real-time sales analytics dashboard with predictive forecasting and interactive visualizations.'
  },
  'customer-segmentation': {
    id: 'customer-segmentation',
    title: 'Customer Segmentation Analysis',
    theory: 'This project employs advanced clustering techniques to segment customers based on their purchasing behavior and characteristics. Using K-means clustering combined with RFM (Recency, Frequency, Monetary) analysis, the system identifies distinct customer groups for targeted marketing. The analysis includes feature scaling, optimal cluster determination using elbow method and silhouette analysis, and comprehensive visualization of customer segments.',
    diagrams: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
    ],
    techStack: ['Python', 'Scikit-learn', 'K-means', 'RFM Analysis', 'Tableau'],
    description: 'Advanced clustering analysis using K-means and RFM methodology for targeted marketing strategies.'
  },
  'recommendation-engine': {
    id: 'recommendation-engine',
    title: 'Movie Recommendation System',
    theory: 'This hybrid recommendation system combines collaborative filtering and content-based approaches to provide personalized movie recommendations. The system uses matrix factorization techniques like SVD and NMF to identify latent factors in user-movie interactions. Content-based filtering analyzes movie features such as genre, director, and cast to find similar movies. The hybrid approach addresses cold start problems and improves recommendation accuracy.',
    diagrams: [
      'https://images.pexels.com/photos/7991761/pexels-photo-7991761.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
    ],
    techStack: ['Python', 'Surprise', 'Matrix Factorization', 'Collaborative Filtering'],
    description: 'Hybrid recommendation system combining collaborative filtering and content-based approaches.'
  },
  'medical-classifier': {
    id: 'medical-classifier',
    title: 'Medical Image Classifier',
    theory: 'This deep learning project develops a convolutional neural network for medical image classification to assist in diagnostic processes. Using transfer learning with pre-trained ResNet architectures, the model achieves high accuracy in classifying medical images. The system includes data augmentation techniques, proper validation strategies, and interpretability features using Grad-CAM to highlight important regions in medical images.',
    diagrams: [
      'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800&h=500'
    ],
    techStack: ['Python', 'PyTorch', 'CNN', 'ResNet', 'Transfer Learning'],
    description: 'CNN-based medical image classification system using transfer learning for diagnostic assistance.'
  }
};

const ProjectDocumentationPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectDocumentationData | null>(null);

  useEffect(() => {
    if (projectId && projectsData[projectId]) {
      setProject(projectsData[projectId]);
    } else {
      setProject(null);
    }
  }, [projectId]);

  const handleBack = () => {
    navigate('/#projects');
  };

  const handleDetailedReport = () => {
    if (projectId) {
      navigate(`/project/${projectId}/report`);
    }
  };

  if (!project) {
    return <NotFound />;
  }

  return (
    <ProjectDocumentation
      project={project}
      onBack={handleBack}
      onDetailedReport={handleDetailedReport}
    />
  );
};

export default ProjectDocumentationPage;