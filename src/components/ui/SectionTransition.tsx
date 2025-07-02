import React from 'react';

const SectionTransition: React.FC = () => {
  return (
    <div className="relative h-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTransition;