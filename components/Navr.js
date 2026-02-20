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
import Link from 'next/link';
import { useState } from 'react';

// Removed font imports as we'll rely on the global font

const Header = () => { // Keep the original component name
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-95 font-mono shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-5 px-8">
        {/* Logo */}
        <Link href="/">
          <span className="text-3xl font-extrabold text-white tracking-tight select-none cursor-pointer">
            Arnav<span className="text-green-400">.</span>
          </span>
        </Link>
        {/* Desktop: Navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/blogs">
            <span className="text-white text-lg font-semibold hover:text-green-400 transition-colors duration-200 cursor-pointer">
              Blogs
            </span>
          </Link>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 rounded-xl font-semibold bg-green-400 text-black hover:bg-green-500 transition-colors duration-200 shadow-green-400/30 shadow-lg text-lg">
            Get In Touch
          </button>
        </nav>
        {/* Hamburger for Mobile: shows only the button */}
        <button
          className="md:hidden flex flex-col gap-1 items-center justify-center w-12 h-12 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-8 h-1 bg-green-400 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-8 h-1 bg-green-400 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-1 bg-green-400 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-72 bg-black bg-opacity-95 shadow-lg flex flex-col gap-10 p-10 md:hidden z-50 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <button
          className="self-end mb-10 text-green-400 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <Link href="/blogs" onClick={() => setMenuOpen(false)}>
          <span className="text-white text-2xl font-semibold hover:text-green-400 transition-colors duration-200 cursor-pointer">
            Blogs
          </span>
        </Link>
        <button className="mt-6 px-6 py-3 rounded-xl font-semibold bg-green-400 text-black hover:bg-green-500 transition-colors duration-200 shadow-green-400/30 shadow-lg w-full text-lg" onClick={() => { setMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
          Get In Touch
        </button>
      </nav>
    </header>
  );
};

export default Header; // Keep the original export name
