import React from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'opacity-100 visible pointer-events-auto' 
          : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-transparent border-t-blue-400 rounded-full animate-spin glow-spinner"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-blue-400 rounded-full animate-spin-reverse opacity-60"></div>
          <div className="absolute inset-2 w-16 h-16 border-2 border-transparent border-b-blue-400 rounded-full animate-spin opacity-40"></div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white loading-text glow-text">
            Loading Kaushar's World...
          </h2>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse loading-dot" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse loading-dot" style={{ animationDelay: '200ms' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse loading-dot" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;