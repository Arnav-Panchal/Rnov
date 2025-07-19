"use client";
import { IconContext } from 'react-icons';
import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { motion } from 'framer-motion'; // Import motion

// Removed font imports as we'll rely on the global font

const Header = () => { // Keep the original component name
  return (
    // Modified styling for a terminal-like header
    <header className="bg-black text-green-400 font-mono py-6 px-10"> {/* Terminal styling and padding */}
      <div className="container mx-auto flex justify-between items-center"> {/* Flex container for name and icons */}
        <motion.h2
          className="text-2xl font-bold text-white" // Adjusted font size and color
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Arnav Panchal {/* Your name */}
        </motion.h2>
        <motion.div
          className="flex space-x-4 text-xl" // Space out icons and adjust size
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <IconContext.Provider value={{ size: '1.2em' }}> {/* Adjust icon size */}
            <a href="https://twitter.com/ArnavPanchal9" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <AiFillTwitterCircle />
            </a>
            <a href="https://github.com/Arnav-Panchal" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/rnov_27/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/in/arnav-panchal-39403223a/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <AiFillLinkedin />
            </a>
          </IconContext.Provider>
        </motion.div>
      </div>
      {/* Removed the section with title and description */}
    </header>
  );
};

export default Header; // Keep the original export name
