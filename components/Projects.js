import React from 'react';
import Link from 'next/link';
import WebtalkImage from "../public/web4.png";
import camp from "../public/Camp.png";
import port from "../public/port.png";
import Image from 'next/image';
import ochi from "../public/Ochi.png";
import { AiFillGithub } from "react-icons/ai";

const ProjectsPage = () => {
  const projects = [
    {
      title: 'WEBTalk',
      image: WebtalkImage,
      description: 'One to One video calling application using webRTC.',
      tags: ['React', 'JavaScript', 'UI'],
      github: 'https://github.com/example/project1',
      website: 'https://web-talk.vercel.app/lobby.html'
    },
    {
      title: 'Ochi Clone',
      image: ochi,
      description: 'Ochi is a WordPress build originally which I have cloned in React.',
      tags: ['Vite', 'TailwindCSS', 'Vercel'],
      github: 'https://github.com/Arnav-Panchal/Ochi-clone',
      website: 'https://ochi-cclone.vercel.app/'
    },
    {
      title: 'CampLink',
      image: camp,
      description: 'CampLink - It is a single platform to get all the updates of events, exams, and schedules happening within the campus. It is basically a digital notice board for all campus students.',
      tags: ['Vite','Nodejs','MongoDB', 'TailwindCSS', 'Express'],
      github: 'https://github.com/Arnav-Panchal/Camplink',
      website: 'https://camplink.onrender.com/'
    },
    {
      title: 'Portfolio',
      image: port,
      description: 'Portfolio Website',
      tags: ['Vite','Nodejs','MongoDB', 'TailwindCSS', 'Express'],
      github: 'https://github.com/Arnav-Panchal/Camplink',
      website: 'https://oldsite-arnav.netlify.app/'
    }
  ];

  return (
    <div className="projects-page  sm:p-8 md:p-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-20">Projects</h1>
      <div className="project-list gap-10 flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="project-card w-full sm:w-[90%] md:w-[45%] p-4 mb-10 border-2 border-gray-300 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="relative w-full h-48 sm:h-64">
              <Link href={project.website}>
                <Image src={project.image} alt={project.title} layout="fill" style={{ objectFit: 'cover' }} className="rounded-lg" />
              </Link>
            </div>
            <div className="project-details mt-4">
              <h2 className="project-title text-lg sm:text-xl md:text-2xl font-semibold">{project.title}</h2>
              <p className="project-description mt-2 text-gray-600">{project.description}</p>
              <div className="project-tags flex flex-wrap mt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="tag bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
                ))}
              </div>
              <div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link mt-2 block text-blue-500 hover:underline">
                  <AiFillGithub className='text-2xl sm:text-3xl' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
