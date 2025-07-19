"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Link from 'next/link'; // Import Link if you want to include links

const Footer = () => {
  return (
    // Modified footer styling and layout for a terminal look
    <motion.footer
      className="bg-black text-green-400 font-mono py-6 text-center text-sm" // Terminal styling
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4"> {/* Add padding */}
        <p>&copy; 2025 Arnav Panchal. All rights reserved.</p>
        {/* Optional: Include minimalist links */}
        {/* <div className="flex justify-center space-x-4 mt-2">
          <Link href="https://github.com/Arnav-Panchal" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/arnav-panchal-39403223a/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </Link>
        </div> */}
      </div>
    </motion.footer>
  );
}

export default Footer; // Keep the original export name
