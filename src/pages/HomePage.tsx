import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import BackToTopButton from '../components/ui/BackToTopButton';
import SectionTransition from '../components/ui/SectionTransition';
import ProfileModal from '../components/modals/ProfileModal';
import ResumeModal from '../components/modals/ResumeModal';
import { ProjectDocumentationData } from '../App';

const HomePage: React.FC = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle hash-based scrolling on page load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleProjectDocumentation = (projectData: ProjectDocumentationData) => {
    navigate(`/project/${projectData.id}`);
  };

  return (
    <>
      <Navigation />
      
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
    </>
  );
};

export default HomePage;