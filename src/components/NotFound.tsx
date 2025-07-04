import React from 'react';
import { Home } from 'lucide-react';

interface NotFoundProps {
  onBackToHome: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 glow-text">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4 glow-text-blue">
            Model Not Found
          </h2>
          <p className="text-xl text-white mb-8">
            But Kaushar is training it!
          </p>
          <div className="text-gray-400 mb-12">
            <p>The page you're looking for doesn't exist in this dataset.</p>
            <p>Let's get you back to the main algorithm.</p>
          </div>
        </div>
        
        <button
          onClick={onBackToHome}
          className="group px-8 py-4 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 flex items-center space-x-3 mx-auto glow-button-solid ripple-effect"
        >
          <Home className="w-5 h-5" />
          <span>Return Home</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;