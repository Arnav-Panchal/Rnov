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
import AP from "../public/favicon.png";
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '700']
});

const customFontStyle = {
  fontFamily: 'Britannic Bold',
};

export default function Header() {
  return (
    <div>
      <main className={oswald.className}>
        <section className="min-h-screen relative border-b border-yourColor pb-4">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <Image src={AP} className="h-20 w-20 cursor-pointer" alt="Logo" />
          </nav>
          <div className="text-center p-10 py-10" style={customFontStyle}>
            <h2 className={`${oswald.className} text-4xl sm:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl hover:scale-105 transition-transform duration-300`}>
              Arnav Panchal
            </h2>
            <div className="text-xl py-10 dark:text-white sm:text-2xl md:text-3xl">
              {/* Additional text or elements can be added here if needed */}
            </div>
            <p className="text-sm sm:text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!
            </p>
            <div className="text-4xl sm:text-5xl flex justify-center gap-4 sm:gap-12 md:gap-16 py-3 text-gray-600 dark:text-gray-400">
              <IconContext.Provider value={{ size: '1.3em' }}>
                <a href="https://twitter.com/ArnavPanchal9" target="_blank" rel="noopener noreferrer">
                  <AiFillTwitterCircle />
                </a>
                <a href="https://github.com/Arnav-Panchal" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
                <a href="https://www.instagram.com/_arnav2827/" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram />
                </a>
                <a href="https://www.linkedin.com/in/arnav-panchal-39403223a/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
