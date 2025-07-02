import React, { useState } from 'react';
import { X, FileText, Video, Eye, Download, ArrowLeft, BarChart3, Brain, Database, Save, Edit3, Check } from 'lucide-react';
import NotificationSystem from '../ui/NotificationSystem';
import { useNotificationSystem } from '../../hooks/useNotificationSystem';
import { useResumeData } from '../../hooks/useResumeData';

interface ResumeModalProps {
  onClose: () => void;
}

type ResumeStep = 'role-selection' | 'format-selection' | 'preview' | 'video-preview';
type ResumeRole = 'dataAnalyst' | 'dataScientist' | 'dataEngineer';
type ResumeFormat = 'text' | 'video';

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState<ResumeStep>('role-selection');
  const [selectedRole, setSelectedRole] = useState<ResumeRole | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<ResumeFormat | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedLinks, setEditedLinks] = useState<{
    preview: string;
    download: string;
  }>({ preview: '', download: '' });
  const [urlErrors, setUrlErrors] = useState<{
    preview: string;
    download: string;
  }>({ preview: '', download: '' });
  const { notifications, showSuccess, showError, removeNotification } = useNotificationSystem();
  const { resumeData, loading, error } = useResumeData();

  const roleIcons = {
    dataAnalyst: BarChart3,
    dataScientist: Brain,
    dataEngineer: Database
  };

  const validateUrl = (url: string): boolean => {
    if (!url.trim()) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleUrlChange = (field: 'preview' | 'download', value: string) => {
    setEditedLinks(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (urlErrors[field]) {
      setUrlErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSaveLinks = () => {
    const errors = { preview: '', download: '' };
    let hasErrors = false;

    if (!validateUrl(editedLinks.preview)) {
      errors.preview = 'Please enter a valid URL';
      hasErrors = true;
    }

    if (!validateUrl(editedLinks.download)) {
      errors.download = 'Please enter a valid URL';
      hasErrors = true;
    }

    setUrlErrors(errors);

    if (hasErrors) {
      showError('Please fix the URL errors before saving');
      return;
    }

    // In a real application, you would save these to a backend
    showSuccess('Resume links updated successfully');
    setIsEditMode(false);
  };

  const handleRoleSelection = (role: ResumeRole) => {
    setSelectedRole(role);
    setCurrentStep('format-selection');
  };

  const handleFormatSelection = (format: ResumeFormat) => {
    setSelectedFormat(format);
    if (format === 'video') {
      setCurrentStep('video-preview');
    } else {
      setCurrentStep('preview');
    }
    
    // Initialize edit links with current data
    if (selectedRole && resumeData) {
      const roleData = resumeData[selectedRole];
      const links = format === 'text' ? roleData.textResume : roleData.videoResume;
      setEditedLinks({
        preview: links.preview,
        download: links.download
      });
    }
  };

  const handlePreview = () => {
    if (!selectedRole || !selectedFormat || !resumeData) return;
    
    const roleData = resumeData[selectedRole];
    const links = selectedFormat === 'text' ? roleData.textResume : roleData.videoResume;
    const previewUrl = isEditMode ? editedLinks.preview : links.preview;
    
    if (previewUrl !== '#' && validateUrl(previewUrl)) {
      window.open(previewUrl, '_blank');
    }
    
    showSuccess(`${roleData.title} ${selectedFormat === 'text' ? 'resume' : 'video resume'} preview opened`);
  };

  const handleDownload = () => {
    if (!selectedRole || !selectedFormat || !resumeData) return;
    
    const roleData = resumeData[selectedRole];
    const links = selectedFormat === 'text' ? roleData.textResume : roleData.videoResume;
    const downloadUrl = isEditMode ? editedLinks.download : links.download;
    
    if (downloadUrl !== '#' && validateUrl(downloadUrl)) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `Kaushar_${roleData.title.replace(' ', '_')}_${selectedFormat === 'text' ? 'Resume.pdf' : 'Video.mp4'}`;
      link.click();
    }
    
    showSuccess(`${roleData.title} ${selectedFormat === 'text' ? 'resume' : 'video resume'} downloaded successfully`);
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'format-selection':
        setCurrentStep('role-selection');
        setSelectedRole(null);
        break;
      case 'preview':
      case 'video-preview':
        setCurrentStep('format-selection');
        setSelectedFormat(null);
        setIsEditMode(false);
        break;
      default:
        setCurrentStep('role-selection');
    }
  };

  const renderRoleSelection = () => (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white glow-text">
          Choose Your Role
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-blue-400 hover:text-blue-300 transition-colors glow-icon-hover"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <p className="text-gray-300 text-center mb-8 text-lg">
        Select the role that best matches your career focus to get the most relevant resume version.
      </p>

      {loading && (
        <div className="text-center py-8">
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading resume options...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-8">
          <p className="text-red-400 mb-4">Error loading resume data: {error}</p>
          <p className="text-gray-300">Using fallback options...</p>
        </div>
      )}

      {resumeData && (
        <div className="grid gap-6 mb-8">
          {Object.entries(resumeData).map(([roleKey, roleData]) => {
            const IconComponent = roleIcons[roleKey as ResumeRole];
            return (
              <button
                key={roleKey}
                onClick={() => handleRoleSelection(roleKey as ResumeRole)}
                className="flex items-center space-x-6 p-6 border border-blue-400 border-opacity-30 rounded-xl hover:border-opacity-60 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-300 group breathing-glow floating-element text-left"
              >
                <div className="p-4 bg-blue-400 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all glow-icon">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {roleData.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {roleData.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </>
  );

  const renderFormatSelection = () => {
    if (!selectedRole || !resumeData) return null;
    
    const roleData = resumeData[selectedRole];
    
    return (
      <>
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-black transition-all breathing-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <h2 className="text-2xl font-bold text-white glow-text">
            {roleData.title} Resume
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-blue-400 hover:text-blue-300 transition-colors glow-icon-hover"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-300 text-center mb-8">
          Choose your preferred resume format for the {roleData.title} position.
        </p>

        <div className="space-y-6 mb-8">
          <button
            onClick={() => handleFormatSelection('text')}
            className="w-full p-6 border border-blue-400 border-opacity-30 rounded-lg hover:border-opacity-60 transition-all duration-300 bg-blue-400 bg-opacity-5 floating-element text-left group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-400 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Text Resume
                </h3>
                <p className="text-gray-300 text-sm">Traditional PDF format with detailed experience</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleFormatSelection('video')}
            className="w-full p-6 border border-blue-400 border-opacity-30 rounded-lg hover:border-opacity-60 transition-all duration-300 bg-blue-400 bg-opacity-5 floating-element text-left group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-400 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all">
                <Video className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Video Resume
                </h3>
                <p className="text-gray-300 text-sm">Personal introduction and project highlights</p>
              </div>
            </div>
          </button>
        </div>
      </>
    );
  };

  const renderTextResumePreview = () => {
    if (!selectedRole || !resumeData) return null;
    
    const roleData = resumeData[selectedRole];
    
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-black transition-all breathing-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <h2 className="text-xl font-bold text-white">
            {roleData.title} Resume Preview
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
              aria-label={isEditMode ? "Cancel edit" : "Edit links"}
            >
              {isEditMode ? <X className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* URL Input Fields */}
        {isEditMode && (
          <div className="mb-6 p-6 border border-blue-400 border-opacity-30 rounded-lg bg-blue-400 bg-opacity-5">
            <h3 className="text-lg font-semibold text-white mb-4">Edit Resume Links</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preview URL
                </label>
                <input
                  type="url"
                  value={editedLinks.preview}
                  onChange={(e) => handleUrlChange('preview', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg url-input-field ${
                    urlErrors.preview ? 'url-input-error' : 
                    editedLinks.preview && validateUrl(editedLinks.preview) ? 'url-input-success' : ''
                  }`}
                  placeholder="Enter preview URL"
                />
                {urlErrors.preview && (
                  <p className="text-red-400 text-sm mt-1">{urlErrors.preview}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Download URL
                </label>
                <input
                  type="url"
                  value={editedLinks.download}
                  onChange={(e) => handleUrlChange('download', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg url-input-field ${
                    urlErrors.download ? 'url-input-error' : 
                    editedLinks.download && validateUrl(editedLinks.download) ? 'url-input-success' : ''
                  }`}
                  placeholder="Enter download URL"
                />
                {urlErrors.download && (
                  <p className="text-red-400 text-sm mt-1">{urlErrors.download}</p>
                )}
              </div>
              <button
                onClick={handleSaveLinks}
                className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        )}

        <div className="bg-white text-black p-6 rounded-lg max-h-96 overflow-y-auto floating-element mb-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">KAUSHAR</h1>
            <p className="text-gray-600">{roleData.title}</p>
            <p className="text-sm text-gray-600">kaushar.data@gmail.com | +1 (555) 123-4567</p>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-bold text-blue-600 border-b border-gray-300 pb-1 mb-2">OBJECTIVE</h3>
              <p className="text-gray-700">{roleData.description}</p>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 border-b border-gray-300 pb-1 mb-2">EDUCATION</h3>
              <div className="mb-2">
                <p className="font-semibold">Master of Science in Data Science</p>
                <p className="text-gray-600">Stanford University • 2020-2022 • GPA: 3.9/4.0</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 border-b border-gray-300 pb-1 mb-2">EXPERIENCE</h3>
              <div className="mb-2">
                <p className="font-semibold">Senior {roleData.title}</p>
                <p className="text-gray-600">TechVision Analytics • Jan 2023 - Present</p>
                <p className="text-xs">Specialized in {roleData.description.toLowerCase()}...</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-blue-600 border-b border-gray-300 pb-1 mb-2">SKILLS</h3>
              <p className="text-xs">Python, R, SQL, Machine Learning, TensorFlow, AWS, Tableau...</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePreview}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-transparent border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-all breathing-glow"
          >
            <Eye className="w-5 h-5" />
            <span>Full Preview</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-400 text-black rounded-lg hover:bg-blue-500 transition-all breathing-glow"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </button>
        </div>
      </>
    );
  };

  const renderVideoResumePreview = () => {
    if (!selectedRole || !resumeData) return null;
    
    const roleData = resumeData[selectedRole];
    
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-black transition-all breathing-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <h2 className="text-xl font-bold text-white">
            {roleData.title} Video Resume
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
              aria-label={isEditMode ? "Cancel edit" : "Edit links"}
            >
              {isEditMode ? <X className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* URL Input Fields */}
        {isEditMode && (
          <div className="mb-6 p-6 border border-blue-400 border-opacity-30 rounded-lg bg-blue-400 bg-opacity-5">
            <h3 className="text-lg font-semibold text-white mb-4">Edit Video Resume Links</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Video URL
                </label>
                <input
                  type="url"
                  value={editedLinks.preview}
                  onChange={(e) => handleUrlChange('preview', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg url-input-field ${
                    urlErrors.preview ? 'url-input-error' : 
                    editedLinks.preview && validateUrl(editedLinks.preview) ? 'url-input-success' : ''
                  }`}
                  placeholder="Enter video URL"
                />
                {urlErrors.preview && (
                  <p className="text-red-400 text-sm mt-1">{urlErrors.preview}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Video Download URL
                </label>
                <input
                  type="url"
                  value={editedLinks.download}
                  onChange={(e) => handleUrlChange('download', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg url-input-field ${
                    urlErrors.download ? 'url-input-error' : 
                    editedLinks.download && validateUrl(editedLinks.download) ? 'url-input-success' : ''
                  }`}
                  placeholder="Enter video download URL"
                />
                {urlErrors.download && (
                  <p className="text-red-400 text-sm mt-1">{urlErrors.download}</p>
                )}
              </div>
              <button
                onClick={handleSaveLinks}
                className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        )}

        <div className="bg-gray-900 rounded-lg p-6 mb-6 floating-element">
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Video className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <p className="text-blue-400 text-lg font-semibold">{roleData.title} Video Resume</p>
                <p className="text-gray-300 text-sm mt-2">Duration: 2:30 minutes</p>
              </div>
            </div>
          </div>
          
          <div className="text-left text-sm text-gray-300 space-y-2">
            <p>• Personal introduction and career journey as a {roleData.title}</p>
            <p>• Key projects and achievements showcase</p>
            <p>• Technical skills demonstration</p>
            <p>• Professional goals and aspirations in {roleData.title.toLowerCase()} field</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePreview}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-transparent border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition-all breathing-glow"
          >
            <Eye className="w-5 h-5" />
            <span>Full Screen</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-400 text-black rounded-lg hover:bg-blue-500 transition-all breathing-glow"
          >
            <Download className="w-5 h-5" />
            <span>Download Video</span>
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <div className="relative z-10 bg-black border-2 border-blue-400 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto glow-modal floating-modal">
          {currentStep === 'role-selection' && renderRoleSelection()}
          {currentStep === 'format-selection' && renderFormatSelection()}
          {currentStep === 'preview' && renderTextResumePreview()}
          {currentStep === 'video-preview' && renderVideoResumePreview()}
        </div>
      </div>

      <NotificationSystem
        notifications={notifications}
        onRemove={removeNotification}
      />
    </>
  );
};

export default ResumeModal;