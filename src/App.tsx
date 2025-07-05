import React, { useState, useEffect } from 'react';
import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
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
  const navigation = useNavigation();
  const location = useLocation();
  const { notifications, removeNotification } = useNotificationSystem();
  const [isAppInitiallyLoading, setIsAppInitiallyLoading] = useState(true);

  // Handle initial loading state for home page only
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppInitiallyLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen if:
  // 1. Navigation is in loading state (route transitions with loaders)
  // 2. OR app is initially loading AND we're on the home page
  const shouldShowLoadingScreen = 
    navigation.state === 'loading' || 
    (isAppInitiallyLoading && location.pathname === '/');

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Loading screen is always present, visibility controlled by prop */}
      <LoadingScreen isVisible={shouldShowLoadingScreen} />
      
      <Outlet />
      
      <NotificationSystem
        notifications={notifications}
        onRemove={removeNotification}
      />
    </div>
  );
}

export default App;