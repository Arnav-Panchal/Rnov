"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

const techStack = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Framer Motion', 'Java', 'Python', 'Git', 'Linux'
];

const terminalCommands = [
  { cmd: 'whoami', out: 'Arnav Panchal' },
  { cmd: 'echo $GREETING', out: '' }, // Will be replaced with dynamic greeting
  { cmd: 'ls skills/', out: 'React  Next.js  Node.js  Express  MongoDB  TailwindCSS  Framer Motion  Java  Python  Git  Linux' },
  { cmd: 'cat about.txt', out: 'Full Stack Developer | Geek | Problem Solver' },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function Showcase() {
  const [displayed, setDisplayed] = useState([]); // {cmd, out}
  const [currentCmd, setCurrentCmd] = useState(0);
  const [typedCmd, setTypedCmd] = useState('');
  const [typedOut, setTypedOut] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [marqueeOffset, setMarqueeOffset] = useState(0);

  // Prepare commands with dynamic greeting
  const commands = terminalCommands.map((c, i) =>
    i === 1 ? { ...c, out: getGreeting() + ", I'm Arnav Panchal." } : c
  );

  // Animate terminal command typing and output
  useEffect(() => {
    if (currentCmd >= commands.length) return;
    setTypedCmd('');
    setTypedOut('');
    let i = 0;
    const typeCmd = setInterval(() => {
      setTypedCmd(commands[currentCmd].cmd.slice(0, i + 1));
      i++;
      if (i === commands[currentCmd].cmd.length) {
        clearInterval(typeCmd);
        setTimeout(() => {
          let j = 0;
          const typeOut = setInterval(() => {
            setTypedOut(commands[currentCmd].out.slice(0, j + 1));
            j++;
            if (j === commands[currentCmd].out.length) {
              clearInterval(typeOut);
              setTimeout(() => {
                setDisplayed(d => [...d, { ...commands[currentCmd], out: commands[currentCmd].out }]);
                setCurrentCmd(c => c + 1);
              }, 600);
            }
          }, 24);
        }, 400);
      }
    }, 60);
    return () => { clearInterval(typeCmd); };
  }, [currentCmd]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Marquee effect for tech stack
  useEffect(() => {
    const interval = setInterval(() => {
      setMarqueeOffset(offset => (offset + 1) % (techStack.length * 24));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-10 text-green-400 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Intro Text */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Maximize Your Potential with <span className="text-green-400">Modern Web</span> Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              I’m Arnav Panchal, a passionate full stack developer and problem solver. I help businesses and individuals build impactful digital products, grow their presence, and achieve their goals through code and creativity.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="https://twitter.com/ArnavPanchal9" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white text-3xl">
                <AiFillTwitterCircle />
              </a>
              <a href="https://github.com/Arnav-Panchal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white text-3xl">
                <AiFillGithub />
              </a>
              <a href="https://www.instagram.com/rnov_27/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white text-3xl">
                <AiFillInstagram />
              </a>
              <a href="https://www.linkedin.com/in/arnav-panchal-39403223a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white text-3xl">
                <AiFillLinkedin />
              </a>
            </div>
            
          </div>
          {/* Right: (Image removed, keep empty for layout consistency) */}
        </div>
        {/* Tech stack marquee (keep as a subtle touch) */}
        <div className="overflow-hidden mt-12 border-t border-green-900 pt-4">
          <div className="whitespace-nowrap animate-marquee">
            {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Framer Motion', 'Java', 'Python', 'Git', 'Linux'].concat(['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Framer Motion', 'Java', 'Python', 'Git', 'Linux']).map((tech, i) => (
              <span key={i} className="inline-block mx-4 text-green-400 text-lg font-bold opacity-80">
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Download Resume button */}
        <div className="mt-8 flex justify-center">
          <Link href="/AI resume.pdf" target="_blank" rel="noopener noreferrer">
            <span className="bg-black border border-green-400 text-green-400 px-6 py-2 rounded-full font-bold text-lg shadow-lg hover:bg-green-400 hover:text-black transition-colors duration-200 cursor-pointer flex items-center gap-2">
              <span className="animate-pulse">$</span> Download Resume
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}