"use client";
import { IconContext } from 'react-icons';
import React from 'react';
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
// import AP from "../public/favicon.png";
import { Oswald , Anton } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '700']
});
const anton = Anton({
  subsets: ['latin'],
  weight: ['400']
});

const customFontStyle = {
  fontFamily: 'Britannic Bold',
};

export default function Header() {
  return (
    <div>
      <main className={oswald.className}>
        <section className="min-h-screen relative border-b border-yourColor pb-4">
        <h2 className={`${anton.className} ml-10 pt-10 text-2xl sm:text-5xl  text-teal-600 font-medium dark:text-teal-400 md:text-3xl `}>
              Arnav Panchal
            </h2>
          <div className="mt-28 flex p-10 py-10" style={customFontStyle}>
          <div className="text-4xl sm:text-5xl flex flex-col justify-items-start gap-4 sm:gap-12 md:gap-12 py-3 text-gray-600 dark:text-gray-400">
              <IconContext.Provider value={{ size: '0.8em' }}>
                <a href="https://twitter.com/ArnavPanchal9" target="_blank" rel="noopener noreferrer">
                  <AiFillTwitterCircle />
                </a>
                <a href="https://github.com/Arnav-Panchal" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
                <a href="https://www.instagram.com/rnov_27/" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram />
                </a>
                <a href="https://www.linkedin.com/in/arnav-panchal-39403223a/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin />
                </a>
              </IconContext.Provider>
            </div>
            <div className='ml-4 md:ml-36 sm:ml-10'>
            <h2 className={`${anton.className} text-2xl  py-2 text-teal-600 font-medium dark:text-teal-400 md:text-8xl hover:scale-105 transition-transform duration-300`}>
              WEB Developer
            </h2>
            <p className="text-sm sm:text-md py-5 leading-8 text-gray-400 dark:text-gray-200 max-w-6xl mx-auto md:text-2xl">
              Freelancer providing services for programming and design content needs. Join me down below and lets get cracking!
            </p>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}
