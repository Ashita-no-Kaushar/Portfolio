import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ProjectDocumentationPage from './pages/ProjectDocumentationPage';
import ProjectDetailedReportPage from './pages/ProjectDetailedReportPage';
import NotFound from './components/NotFound';

// Loader function with delay to ensure loading screen is visible when navigating from error page
const homeLoader = async () => {
  // Add a delay to ensure loading screen is visible when navigating from error page
  await new Promise(resolve => setTimeout(resolve, 1500));
  return null;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: 'project/:projectId',
        element: <ProjectDocumentationPage />,
      },
      {
        path: 'project/:projectId/report',
        element: <ProjectDetailedReportPage />,
      },
      // Redirect old hash-based routes to home with scroll
      {
        path: 'home',
        element: <Navigate to="/#home" replace />,
      },
      {
        path: 'about',
        element: <Navigate to="/#about" replace />,
      },
      {
        path: 'skills',
        element: <Navigate to="/#skills" replace />,
      },
      {
        path: 'projects',
        element: <Navigate to="/#projects" replace />,
      },
      {
        path: 'work-experience',
        element: <Navigate to="/#work-experience" replace />,
      },
      {
        path: 'education',
        element: <Navigate to="/#education" replace />,
      },
      {
        path: 'contact',
        element: <Navigate to="/#contact" replace />,
      },
      // 404 page for any unmatched routes
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);