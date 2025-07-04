import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ProjectDocumentationPage from './pages/ProjectDocumentationPage';
import ProjectDetailedReportPage from './pages/ProjectDetailedReportPage';
import NotFound from './components/NotFound';
import NotificationSystem from './components/ui/NotificationSystem';
import { useNotificationSystem } from './hooks/useNotificationSystem';

export interface ProjectDocumentationData {
  id: string;
  title: string;
  theory: string;
  diagrams: string[];
  techStack: string[];
  description: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { notifications, removeNotification } = useNotificationSystem();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Routes>
          {/* Home page with all sections */}
          <Route path="/" element={<HomePage />} />
          
          {/* Project documentation routes */}
          <Route path="/project/:projectId" element={<ProjectDocumentationPage />} />
          <Route path="/project/:projectId/report" element={<ProjectDetailedReportPage />} />
          
          {/* Redirect old hash-based routes to home with scroll */}
          <Route path="/home" element={<Navigate to="/#home" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/skills" element={<Navigate to="/#skills" replace />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/work-experience" element={<Navigate to="/#work-experience" replace />} />
          <Route path="/education" element={<Navigate to="/#education" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          
          {/* 404 page for any unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <NotificationSystem
          notifications={notifications}
          onRemove={removeNotification}
        />
      </div>
    </Router>
  );
}

export default App;