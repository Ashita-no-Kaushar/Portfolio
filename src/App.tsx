import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
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
  const { notifications, removeNotification } = useNotificationSystem();

  // Show loading screen during route transitions
  if (navigation.state === 'loading') {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Outlet />
      
      <NotificationSystem
        notifications={notifications}
        onRemove={removeNotification}
      />
    </div>
  );
}

export default App;