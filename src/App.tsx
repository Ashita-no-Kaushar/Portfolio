import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDocumentation from './components/ProjectDocumentation';
import ProjectDetailedReport from './components/ProjectDetailedReport';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import BackToTopButton from './components/ui/BackToTopButton';
import SectionTransition from './components/ui/SectionTransition';
import ProfileModal from './components/modals/ProfileModal';
import ResumeModal from './components/modals/ResumeModal';
import NotificationSystem from './components/ui/NotificationSystem';
import { useNotificationSystem } from './hooks/useNotificationSystem';

type ViewType = 'home' | 'documentation' | 'detailed-report' | '404';

interface ProjectDocumentationData {
  id: string;
  title: string;
  theory: string;
  diagrams: string[];
  techStack: string[];
  description: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentProject, setCurrentProject] = useState<ProjectDocumentationData | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { notifications, removeNotification } = useNotificationSystem();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleProjectDocumentation = (projectData: ProjectDocumentationData) => {
    setCurrentProject(projectData);
    setCurrentView('documentation');
    window.scrollTo(0, 0);
  };

  const handleDetailedReport = () => {
    setCurrentView('detailed-report');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setCurrentProject(null);
    window.scrollTo(0, 0);
  };

  const handle404 = () => {
    setCurrentView('404');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (currentView === '404') {
    return <NotFound onBackToHome={handleBackToHome} />;
  }

  if (currentView === 'documentation' && currentProject) {
    return (
      <>
        <ProjectDocumentation
          project={currentProject}
          onBack={handleBackToHome}
          onDetailedReport={handleDetailedReport}
        />
        <NotificationSystem
          notifications={notifications}
          onRemove={removeNotification}
        />
      </>
    );
  }

  if (currentView === 'detailed-report' && currentProject) {
    return (
      <>
        <ProjectDetailedReport
          project={currentProject}
          onBack={() => setCurrentView('documentation')}
        />
        <NotificationSystem
          notifications={notifications}
          onRemove={removeNotification}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Temporary 404 Trigger Button */}
      <button
        onClick={handle404}
        className="fixed top-24 right-6 z-50 p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
      >
        Trigger 404
      </button>
      
      <main>
        <section id="home">
          <Hero
            onProfileClick={() => setIsProfileModalOpen(true)}
            onResumeClick={() => setIsResumeModalOpen(true)}
          />
        </section>
        
        <SectionTransition />
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <SectionTransition />
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <SectionTransition />
        
        <section id="projects" className="py-20">
          <Projects onDocumentationClick={handleProjectDocumentation} />
        </section>
        
        <SectionTransition />
        
        <section id="work-experience" className="py-20">
          <WorkExperience />
        </section>
        
        <SectionTransition />
        
        <section id="education" className="py-20">
          <Education />
        </section>
        
        <SectionTransition />
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <footer className="py-8 text-center">
        <p className="text-white text-lg font-medium glow-text-soft">
          @ Kaushar
        </p>
      </footer>

      <BackToTopButton />

      {isProfileModalOpen && (
        <ProfileModal onClose={() => setIsProfileModalOpen(false)} />
      )}

      {isResumeModalOpen && (
        <ResumeModal onClose={() => setIsResumeModalOpen(false)} />
      )}

      <NotificationSystem
        notifications={notifications}
        onRemove={removeNotification}
      />
    </div>
  );
}

export default App;