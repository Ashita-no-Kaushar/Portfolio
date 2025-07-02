import React, { useState } from 'react';
import { ArrowLeft, FileText, Download, Edit3, Save, X } from 'lucide-react';
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

interface ProjectDocumentationProps {
  project: ProjectDocumentationData;
  onBack: () => void;
  onDetailedReport: () => void;
}

const ProjectDocumentation: React.FC<ProjectDocumentationProps> = ({
  project,
  onBack,
  onDetailedReport
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedLinks, setEditedLinks] = useState({
    documentationUrl: '',
    reportUrl: '',
    downloadUrl: ''
  });
  const [urlErrors, setUrlErrors] = useState({
    documentationUrl: '',
    reportUrl: '',
    downloadUrl: ''
  });
  const { notifications, showSuccess, showError, removeNotification } = useNotificationSystem();

  const validateUrl = (url: string): boolean => {
    if (!url.trim()) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleUrlChange = (field: keyof typeof editedLinks, value: string) => {
    setEditedLinks(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (urlErrors[field]) {
      setUrlErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSaveLinks = () => {
    const errors = { documentationUrl: '', reportUrl: '', downloadUrl: '' };
    let hasErrors = false;

    if (editedLinks.documentationUrl && !validateUrl(editedLinks.documentationUrl)) {
      errors.documentationUrl = 'Please enter a valid URL';
      hasErrors = true;
    }

    if (editedLinks.reportUrl && !validateUrl(editedLinks.reportUrl)) {
      errors.reportUrl = 'Please enter a valid URL';
      hasErrors = true;
    }

    if (editedLinks.downloadUrl && !validateUrl(editedLinks.downloadUrl)) {
      errors.downloadUrl = 'Please enter a valid URL';
      hasErrors = true;
    }

    setUrlErrors(errors);

    if (hasErrors) {
      showError('Please fix the URL errors before saving');
      return;
    }

    // In a real application, you would save these to a backend
    showSuccess('Project documentation links updated successfully');
    setIsEditMode(false);
  };

  const handleDownloadPDF = () => {
    const downloadUrl = editedLinks.downloadUrl || '#';
    
    if (downloadUrl !== '#' && validateUrl(downloadUrl)) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${project.id}-documentation.pdf`;
      link.click();
    } else {
      // Simulate PDF download for demo
      const link = document.createElement('a');
      link.href = '#';
      link.download = `${project.id}-documentation.pdf`;
      link.click();
    }
    
    showSuccess('Project documentation downloaded successfully');
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-12 max-w-5xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-6 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-200 glow-button-outline ripple-effect"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-200"
              >
                {isEditMode ? <X className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
                <span>{isEditMode ? 'Cancel' : 'Edit Links'}</span>
              </button>
              
              <button
                onClick={handleDownloadPDF}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 glow-button-solid ripple-effect"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* URL Input Fields */}
          {isEditMode && (
            <div className="mb-12 p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
              <h3 className="text-2xl font-bold text-white mb-6 glow-text-subtle">
                Edit Project Links
              </h3>
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Documentation URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={editedLinks.documentationUrl}
                    onChange={(e) => handleUrlChange('documentationUrl', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg url-input-field ${
                      urlErrors.documentationUrl ? 'url-input-error' : 
                      editedLinks.documentationUrl && validateUrl(editedLinks.documentationUrl) ? 'url-input-success' : ''
                    }`}
                    placeholder="Enter documentation URL"
                  />
                  {urlErrors.documentationUrl && (
                    <p className="text-red-400 text-sm mt-1">{urlErrors.documentationUrl}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Report URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={editedLinks.reportUrl}
                    onChange={(e) => handleUrlChange('reportUrl', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg url-input-field ${
                      urlErrors.reportUrl ? 'url-input-error' : 
                      editedLinks.reportUrl && validateUrl(editedLinks.reportUrl) ? 'url-input-success' : ''
                    }`}
                    placeholder="Enter project report URL"
                  />
                  {urlErrors.reportUrl && (
                    <p className="text-red-400 text-sm mt-1">{urlErrors.reportUrl}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Download URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={editedLinks.downloadUrl}
                    onChange={(e) => handleUrlChange('downloadUrl', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg url-input-field ${
                      urlErrors.downloadUrl ? 'url-input-error' : 
                      editedLinks.downloadUrl && validateUrl(editedLinks.downloadUrl) ? 'url-input-success' : ''
                    }`}
                    placeholder="Enter download URL"
                  />
                  {urlErrors.downloadUrl && (
                    <p className="text-red-400 text-sm mt-1">{urlErrors.downloadUrl}</p>
                  )}
                </div>
              </div>
              
              <button
                onClick={handleSaveLinks}
                className="mt-6 flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </div>
          )}

          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
              Project Documentation
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 glow-text-blue mb-4">
              {project.title}
            </h2>
            <div className="w-32 h-1 bg-blue-400 mx-auto rounded-full glow-line"></div>
          </div>

          {/* Project Overview */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 glow-text-subtle">
              Project Overview
            </h3>
            <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-400 bg-opacity-20 text-blue-400 rounded-lg border border-blue-400 border-opacity-50 glow-tool-chip"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Theory Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 glow-text-subtle">
              Theory & Methodology
            </h3>
            <div className="p-8 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.theory}
              </p>
            </div>
          </div>

          {/* Diagrams Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 glow-text-subtle">
              Architecture & Flow Diagrams
            </h3>
            <div className="grid gap-8">
              {project.diagrams.map((diagram, index) => (
                <div
                  key={index}
                  className="border border-blue-400 border-opacity-30 rounded-xl overflow-hidden hover:border-opacity-80 transition-all duration-300 glow-card-hover"
                >
                  <img
                    src={diagram}
                    alt={`${project.title} diagram ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 bg-blue-400 bg-opacity-5">
                    <p className="text-blue-400 font-semibold">
                      Diagram {index + 1}: System Architecture & Data Flow
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 glow-text-subtle">
              Key Implementation Features
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                <h4 className="text-xl font-bold text-white mb-3">Data Processing</h4>
                <p className="text-gray-300 leading-relaxed">
                  Advanced data preprocessing techniques including feature engineering, 
                  outlier detection, and data normalization for optimal model performance.
                </p>
              </div>
              
              <div className="p-6 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                <h4 className="text-xl font-bold text-white mb-3">Model Architecture</h4>
                <p className="text-gray-300 leading-relaxed">
                  Carefully designed model architecture with hyperparameter tuning 
                  and cross-validation for robust and generalizable results.
                </p>
              </div>
              
              <div className="p-6 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                <h4 className="text-xl font-bold text-white mb-3">Performance Metrics</h4>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive evaluation using multiple metrics including accuracy, 
                  precision, recall, and F1-score for thorough performance assessment.
                </p>
              </div>
              
              <div className="p-6 border border-blue-400 border-opacity-30 rounded-xl bg-blue-400 bg-opacity-5 glow-card-hover">
                <h4 className="text-xl font-bold text-white mb-3">Deployment Strategy</h4>
                <p className="text-gray-300 leading-relaxed">
                  Production-ready deployment with API endpoints, monitoring, 
                  and scalable infrastructure for real-world applications.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Report Button */}
          <div className="text-center">
            <button
              onClick={onDetailedReport}
              className="px-10 py-5 bg-blue-400 text-black font-bold text-lg rounded-lg hover:bg-blue-500 transition-all duration-200 flex items-center space-x-3 mx-auto glow-button-solid ripple-effect"
            >
              <FileText className="w-6 h-6" />
              <span>View Detailed Report</span>
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

export default ProjectDocumentation;