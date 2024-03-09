"use client"
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function Showcase() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      url: '/web4.png',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      url: '/Web2.png',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3.',
      url: '/Web3.png',
    },
    {
      title: 'Project 4',
      description: 'Description for Project 4.',
      url: '/Web1.png',
    },
    {
      title: 'Project 5',
      description: 'Description for Project 5.',
      url: '/Web5.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${projects[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='absolute bottom-5 left-0 right-0 text-center'>
        <h2 className='text-3xl font-bold mb-2 m-10'>{projects[currentIndex].title}</h2>
        <p className='text-gray-500'>{projects[currentIndex].description}</p>
      </div>
    </div>
    
  );
}
