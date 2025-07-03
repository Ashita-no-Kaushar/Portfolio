import React from 'react';
import { ArrowLeft, Download, BarChart3, TrendingUp, Settings, Target } from 'lucide-react';
import NotificationSystem from './ui/NotificationSystem';
import { useNotificationSystem } from '../hooks/useNotificationSystem';

interface ProjectDocumentationData {
  id: string;
  title: string;
  theory: string;
  diagrams: string[];
  techStack: string[];
  description: string;
}

interface ProjectDetailedReportProps {
  project: ProjectDocumentationData;
  onBack: () => void;
}

const ProjectDetailedReport: React.FC<ProjectDetailedReportProps> = ({
  project,
  onBack
}) => {
  const { notifications, showSuccess, removeNotification } = useNotificationSystem();

  const handleDownload = () => {
    // Simulate PDF download for demo
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${project.id}-detailed-report.pdf`;
    link.click();
    
    showSuccess('Detailed report downloaded successfully');
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-12 max-w-6xl">
          {/* Header */}
          <div className="relative mb-12">
            <button
              onClick={onBack}
              className="absolute left-0 top-0 flex items-center justify-center p-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-200 glow-button-outline ripple-effect"
              aria-label="Back to documentation"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
              Detailed Technical Report
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 glow-text-blue mb-4">
              {project.title}
            </h2>
            <div className="w-32 h-1 bg-blue-400 mx-auto rounded-full glow-line"></div>
          </div>

          {/* Executive Summary */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center glow-text-subtle">
              <Target className="w-8 h-8 text-blue-400 mr-3" />
              Executive Summary
            </h3>
            <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                This comprehensive report details the development and implementation of {project.title.toLowerCase()}, 
                a cutting-edge data science solution designed to address complex real-world challenges through 
                advanced machine learning techniques and statistical analysis.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                The project demonstrates proficiency in end-to-end data science workflows, from data acquisition 
                and preprocessing to model deployment and performance monitoring, showcasing both technical depth 
                and practical application in solving business problems.
              </p>
            </div>
          </section>

          {/* Methodology */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center glow-text-subtle">
              <Settings className="w-8 h-8 text-blue-400 mr-3" />
              Methodology & Approach
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                <h4 className="text-xl font-bold text-white mb-4">Data Collection & Preprocessing</h4>
                <ul className="text-gray-300 space-y-3">
                  <li>• Comprehensive data quality assessment and cleaning</li>
                  <li>• Feature engineering and selection techniques</li>
                  <li>• Handling missing values and outlier detection</li>
                  <li>• Data normalization and standardization</li>
                </ul>
              </div>
              
              <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                <h4 className="text-xl font-bold text-white mb-4">Model Development</h4>
                <ul className="text-gray-300 space-y-3">
                  <li>• Algorithm selection and comparison</li>
                  <li>• Hyperparameter optimization</li>
                  <li>• Cross-validation and model evaluation</li>
                  <li>• Ensemble methods and model stacking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results & Performance */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center glow-text-subtle">
              <BarChart3 className="w-8 h-8 text-blue-400 mr-3" />
              Results & Performance Analysis
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover h-full">
                  <h4 className="text-2xl font-bold text-white mb-6">Key Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-blue-400 bg-opacity-10 rounded-lg border border-blue-400 border-opacity-20">
                      <div className="text-4xl font-bold text-blue-400 mb-2 glow-text-blue">94.7%</div>
                      <div className="text-gray-300 font-semibold">Accuracy</div>
                    </div>
                    <div className="text-center p-6 bg-blue-400 bg-opacity-10 rounded-lg border border-blue-400 border-opacity-20">
                      <div className="text-4xl font-bold text-blue-400 mb-2 glow-text-blue">92.3%</div>
                      <div className="text-gray-300 font-semibold">Precision</div>
                    </div>
                    <div className="text-center p-6 bg-blue-400 bg-opacity-10 rounded-lg border border-blue-400 border-opacity-20">
                      <div className="text-4xl font-bold text-blue-400 mb-2 glow-text-blue">91.8%</div>
                      <div className="text-gray-300 font-semibold">Recall</div>
                    </div>
                    <div className="text-center p-6 bg-blue-400 bg-opacity-10 rounded-lg border border-blue-400 border-opacity-20">
                      <div className="text-4xl font-bold text-blue-400 mb-2 glow-text-blue">0.93</div>
                      <div className="text-gray-300 font-semibold">F1-Score</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-6 leading-relaxed">
                    The model demonstrates exceptional performance across all key metrics, with particular 
                    strength in maintaining high precision while achieving robust recall rates.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                  <h4 className="text-lg font-bold text-white mb-3">Model Complexity</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1 glow-text-blue">O(n log n)</div>
                    <div className="text-sm text-gray-300">Time Complexity</div>
                  </div>
                </div>
                
                <div className="p-6 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                  <h4 className="text-lg font-bold text-white mb-3">Training Time</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1 glow-text-blue">2.3 hrs</div>
                    <div className="text-sm text-gray-300">Total Duration</div>
                  </div>
                </div>
                
                <div className="p-6 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                  <h4 className="text-lg font-bold text-white mb-3">Data Volume</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1 glow-text-blue">1.2M</div>
                    <div className="text-sm text-gray-300">Records Processed</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center glow-text-subtle">
              <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
              Technical Implementation Details
            </h3>
            <div className="space-y-8">
              <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                <h4 className="text-2xl font-bold text-white mb-6">Architecture Overview</h4>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  The solution employs a modular architecture with clear separation of concerns, 
                  enabling scalability and maintainability. The data pipeline incorporates robust 
                  error handling and monitoring capabilities for production deployment.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-blue-400 bg-opacity-10 rounded-lg border border-blue-400 border-opacity-20 text-center">
                    <div className="font-bold text-blue-400 mb-2 text-lg">Data Layer</div>
                    <div className="text-sm text-gray-300">ETL Pipeline</div>
                  </div>
                  <div className="p-6 bg-blue-400 bg-opacity-10 rounded-lg border border-blue-400 border-opacity-20 text-center">
                    <div className="font-bold text-blue-400 mb-2 text-lg">Model Layer</div>
                    <div className="text-sm text-gray-300">ML Pipeline</div>
                  </div>
                  <div className="p-6 bg-blue-400 bg-opacity-10 rounded-lg border border-blue-400 border-opacity-20 text-center">
                    <div className="font-bold text-blue-400 mb-2 text-lg">API Layer</div>
                    <div className="text-sm text-gray-300">REST Endpoints</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                  <h4 className="text-xl font-bold text-white mb-4">Key Technologies</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Python 3.9+ with scikit-learn ecosystem</li>
                    <li>• Advanced feature engineering pipelines</li>
                    <li>• Docker containerization for deployment</li>
                    <li>• RESTful API with FastAPI framework</li>
                    <li>• Comprehensive logging and monitoring</li>
                  </ul>
                </div>
                
                <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                  <h4 className="text-xl font-bold text-white mb-4">Production Considerations</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Automated model retraining pipeline</li>
                    <li>• A/B testing framework integration</li>
                    <li>• Performance monitoring and alerting</li>
                    <li>• Scalable cloud infrastructure setup</li>
                    <li>• Data privacy and security compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 glow-text-subtle">Conclusion & Future Work</h3>
            <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                This project successfully demonstrates the application of advanced data science techniques 
                to solve real-world problems. The robust methodology, comprehensive evaluation, and 
                production-ready implementation showcase both technical expertise and practical understanding 
                of machine learning deployment challenges.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Future enhancements could include integration of deep learning architectures, 
                real-time streaming capabilities, and expanded feature engineering to further 
                improve model performance and business impact.
              </p>
            </div>
          </section>

          {/* Download Button */}
          <div className="text-center">
            <button
              onClick={handleDownload}
              className="px-12 py-5 bg-blue-400 text-black font-bold text-xl rounded-lg hover:bg-blue-500 transition-all duration-200 flex items-center space-x-3 mx-auto glow-button-solid ripple-effect"
            >
              <Download className="w-6 h-6" />
              <span>Download Complete Report (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      <NotificationSystem
        notifications={notifications}
        onRemove={removeNotification}
      />
    </>
  );
};

export default ProjectDetailedReport;