// components/AnimatedResumeButton.js

import React from 'react';

const AnimatedResumeButton = () => {
  return (
    <div className="flex justify-center items-center ">
      <button className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg transition-transform duration-300 perspective-1000 transform-style-3d hover:rotate-x-10 hover:rotate-y-10 relative overflow-hidden">
        <span className="block transition-transform duration-300 transform translate-z-0 hover:translate-z-2">
          RESUME
        </span>
      </button>
    </div>
  );
};

export default AnimatedResumeButton;
