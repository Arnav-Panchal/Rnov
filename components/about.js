"use client";
import React from 'react';
import Image from 'next/image'; // Keep Image if you want to include your photo
import photo from "../public/photo.jpg"; // Assuming the image path remains the same
import { motion } from 'framer-motion'; // Import motion

const Aboutme = () => {
  const skills = { // Keep your skills data
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
    Backend: ['Node.js', 'Spring', 'RESTful APIs'],
    Design: ['Figma', 'Canva'],
    Languages: ['Java', 'JavaScript', 'Python', 'C/C++'],
    Database: ['MySQL'],
    Others: ['Git', 'GitHub', 'LaTeX']
  };

  return (
    <section className="py-20 px-10 text-green-400 font-mono">
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-10 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-sm text-gray-400">AboutMe.txt</span> {/* Simulated file name */}
          </div>

          {/* Simulated command output for About Me text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>{`>`} cat about.txt</p>
            <p className="whitespace-pre-wrap">{`
I am a skilled Full Stack Developer with strong proficiency in web development and Data Structures and Algorithms (DSA) using Java. A recent graduate with a Bachelor's degree in Information Technology from SKNSITS College, affiliated with Savitribai Phule Pune University (SPPU), I am eager to contribute as a Full Stack Developer. My goal is to leverage my expertise in full stack development, problem-solving abilities, and collaborative experience to build impactful digital solutions, support branding efforts, and drive innovation within a forward-thinking organization.
            `}</p> {/* Use whitespace-pre-wrap to maintain formatting */}
          </motion.div>

          <br/>

          {/* Simulated command output for Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>{`>`} ls -l skills</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"> {/* Grid for skills categories */}
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  {/* Removed simulated file info, display only category */}
                  <p className="text-gray-400">{category}</p> 
                  <ul className="ml-6 list-disc list-inside"> {/* Indented list for skills */}
                    {skillList.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-green-400">{skill}</li> 
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Optional: Include your photo in a geeky way, e.g., as an ASCII art representation or a small terminal-like image viewer */}
           {/* <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="mt-6"
           >
             <p>{`>`} display photo.jpg</p>
             {/* You would replace this with an actual image component or ASCII art */}
             {/* <Image src={photo} alt="Profile" width={100} height={100} className="mt-2 border border-green-400" /> */}
           {/* </motion.div> */}

        </div>
    </section>
  );
};

export default Aboutme; // Keep the original export name
