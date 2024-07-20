// AnimatedButton.js
"use client"
import React from 'react';
import Link from 'next/link';

const AnimatedButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="Resume.pdf">
        <div className="transition-colors duration-300 ease-in-out bg-blue-500 text-white border-2 border-transparent rounded-lg py-3 px-6 text-lg cursor-pointer hover:bg-red-500 hover:text-gray-100 hover:border-red-500">
          Resume
        </div>
      </Link>
    </div>
  );
};

export default AnimatedButton;
