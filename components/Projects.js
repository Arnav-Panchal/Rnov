import React from 'react';
import Link from 'next/link';
import WebtalkImage from "../public/web4.png";
import Image from 'next/image';
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
      title: 'Project 2',
      image: '',
      description: 'Description of Project 2.',
      tags: ['Node.js', 'Express', 'Backend'],
      github: 'https://github.com/example/project2',
      website: 'https://your-website-url.com'
    }
  ];

  return (
    <div className="projects-page">
      <div className="project-list">
        {projects.map((project, index) => (
          <Link href={project.website} key={index}>
            <div className="project-card w-1/4 p-4 ml-10 mt-10 border-2 border-gray-300 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="relative w-full h-64">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <div className="project-details mt-4">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags flex flex-wrap mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
                  ))}
                </div>
                <div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link mt-2 block text-blue-500 hover:underline"><AiFillGithub className='text-3xl'/></a>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
