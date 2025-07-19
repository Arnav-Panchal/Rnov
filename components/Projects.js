"use client"
import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import { AiFillGithub } from "react-icons/ai"; // Keep GitHub icon if desired
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

const ProjectsPage = () => {
  const projects = [
    {
      title: 'DevConnect',
      // We'll keep the image, description, tags, github, and website data
      // but display them differently
      description: 'DevConnect is a full-stack developer collaboration platform powered by AI and GitHub integration.',
      tags: ['MERN', 'TailwindCSS', 'Render'],
      github: 'https://github.com/Arnav-Panchal/Developers-Collab-Platform',
      website: 'https://developers-collab-platform.onrender.com/'
    },
    {
      title: 'WEBTalk',
      description: 'One to One video calling application using webRTC.',
      tags: ['React', 'JavaScript', 'UI'],
      github: 'https://github.com/example/project1',
      website: 'https://web-talk.vercel.app/lobby.html'
    },
    {
      title: 'Ochi Clone',
      description: 'Ochi is a WordPress build originally which I have cloned in React.',
      tags: ['Vite', 'TailwindCSS', 'Vercel'],
      github: 'https://github.com/Arnav-Panchal/Ochi-clone',
      website: 'https://ochi-cclone.vercel.app/'
    },
    {
      title: 'CampLink',
      description: 'CampLink - It is a single platform to get all the updates of events, exams, and schedules happening within the campus. It is basically a digital notice board for all campus students.',
      tags: ['Vite','Nodejs','MongoDB', 'TailwindCSS', 'Express'],
      github: 'https://github.com/Arnav-Panchal/Camplink',
      website: 'https://camplink.onrender.com/'
    },
    {
      title: 'Portfolio',
      description: 'Portfolio Website',
      tags: ['Vite','Nodejs','MongoDB', 'TailwindCSS', 'Express'],
      github: 'https://github.com/Arnav-Panchal/Camplink',
      website: 'https://oldsite-arnav.netlify.app/'
    }
  ];

  const [openProjectIndex, setOpenProjectIndex] = useState(null); // State to manage which project is open

  const handleProjectClick = (index) => {
    setOpenProjectIndex(openProjectIndex === index ? null : index); // Toggle project details
  };

  return (
    <section className="py-20 px-10 text-green-400 font-mono">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-10 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>
        <div>
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-sm text-gray-400">Projects Directory</span>
          </div>

          <div className="space-y-2"> {/* Space out project entries */}
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="cursor-pointer hover:underline" // Add hover effect and cursor
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }} // Staggered animation
                onClick={() => handleProjectClick(index)} // Handle click to show details
              >
                <p>{`>`} {project.title}</p> {/* Display project title as a file/directory */}
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {openProjectIndex !== null && (
              <motion.div
                key={`project-details-${openProjectIndex}`}
                className="mt-6 p-4 bg-gray-800 rounded-lg" // Container for project details
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{projects[openProjectIndex].title}</h3>
                <p className="text-gray-300 mb-4">{projects[openProjectIndex].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[openProjectIndex].tags.map(tag => (
                    <span key={tag} className="text-gray-400 text-xs">
                      {`# ${tag}`} {/* Add '#' prefix */}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link href={projects[openProjectIndex].github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center">
                    <AiFillGithub className='mr-1' /> GitHub
                  </Link>
                  <Link href={projects[openProjectIndex].website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Live Demo
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage; // Keep the original export name
