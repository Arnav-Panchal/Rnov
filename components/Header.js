"use client";
import { IconContext } from 'react-icons';
import React from 'react'
import {useState} from "react";
import Typed from 'react-typed'
// import AOS from "aos";
// import "aos/dist/aos.css";

import Image from "next/image";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
    AiOutlineMenu,
    AiOutlineClose,
  } from "react-icons/ai";
import favicon from "../public/favicon.png";
import AP from "../public/A.png"
import Menu from './Menu';
import onto from '../public/onto.png';

export default function Header() {

    

    const [isMenuOpen, setIsMenuOpen] = useState(false);



    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //       AOS.init({
    //         duration: 1000,
    //       });
    //     }
    //   }, []);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('overflow-hidden',isMenuOpen);
      };

      const customFontStyle = {
        fontFamily: 'Britannic Bold',
    };

      return (
  
    <div >
        <section className={`min-h-screen relative border-b border-yourColor pb-4 ${isMenuOpen ? 'fixed' : ''}`}>
        {isMenuOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
            <div className="w-full h-full absolute top-0 left-0 transform translate-y-0 transition-transform duration-300 ease-in-out">
              <div className="absolute top-0 right-0 p-4 ">
                <AiOutlineClose
                  className="text-3xl text-gray-600 dark:text-gray-400 cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
              <Menu/>
            </div>
          </div>
        )}
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <Image src={AP} className="h-20 w-20 " href="cursor-pointer" alt=""/>
                <div className="flex items-center">
                
                <div
              className="cursor-pointer"
              onClick={toggleMenu}
            >{isMenuOpen ? (
                <AiOutlineClose className="text-3xl text-teal-500" />
              ) : (
                <AiOutlineMenu className="text-3xl text-teal-500" />
              )}</div>
            </div>
            </nav>
            <div className="text-center p-10 py-10" style={customFontStyle}>
                <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl hover:scale-105 transition-transform duration-300">
                    Arnav Panchal
                </h2>
                <div className="text-2xl py-10 dark:text-white md:text-3xl">
                <Typed className='pl-3'
                    strings={['  Full Stack Web Developer !',
                    '  Java Spring Developer !',
                    '  Sports Enthusiast']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}
                />
            </div>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                    Freelancer providing services for programming and design content
                    needs. Join me down below and lets get cracking!
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 ">
                <IconContext.Provider value={{ size: '1.5em' }}>
      <a href="https://twitter.com/ArnavPanchal9" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterCircle />
      </a>
    </IconContext.Provider>
    <IconContext.Provider value={{ size: '1.5em' }}>
      <a href="https://github.com/Arnav-Panchal" target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
      </a>
    </IconContext.Provider>
    <IconContext.Provider value={{ size: '1.5em' }}>
      <a href="https://www.instagram.com/_arnav2827/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram />
      </a>
    </IconContext.Provider>
    <IconContext.Provider value={{ size: '1.5em' }}>
      <a href="https://www.linkedin.com/in/arnav-panchal-39403223a/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
    </IconContext.Provider>
                </div>
            </div>
        </section>
        </div>
  )
}
