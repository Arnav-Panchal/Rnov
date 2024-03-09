"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg">&copy; 2024 Arnav Panchal. All rights reserved.</p>
        <div className="flex mt-4 space-x-4">
          <a className="hover:text-gray-400" href="https://github.com/Arnav-Panchal" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="hover:text-gray-400" href="https://www.linkedin.com/in/arnav-panchal-39403223a/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-gray-400" href="https://twitter.com/ArnavPanchal9" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <p className="mt-4">Email: arnavpanchal27@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
