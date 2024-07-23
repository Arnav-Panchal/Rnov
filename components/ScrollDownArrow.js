import React from 'react';

const ScrollDownArrow = ({ onClick }) => (
  <div
    className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center cursor-pointer"
    onClick={onClick}
  >
    <h1 className="text-3xl mb-4">Scroll</h1>    <div className="w-2 h-5 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform rotate-45 animate-bounce">
    
    </div>
  </div>
);

export default ScrollDownArrow;
