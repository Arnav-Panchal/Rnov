// MenuPage.js
"use client"
import React from 'react';
import { useState } from 'react';
import ContactForm from "@/components/Email";
import Link from 'next/link';
import ProjectsPage from './Projects';
import Aboutme from '@/components/about';



const MenuPage = () => {


  return (
    <div >
    <div className="menu-container">
      <div className="content">
        <Link href="Resume.pdf">
          <div className="menu-item " > Resume <a/></div>
        </Link>
        <Link href="/about">
          <div className="menu-item">About Me</div>
        </Link>
        <Link href="/email">
          <div className="menu-item">Contact me</div>
        </Link>
        <Link href="/projects">
          <div className="menu-item">Projects</div>
        </Link>
        <Link href="/certifications">
          <div className="menu-item">Certifications</div>
        </Link>
      </div>

      <style jsx>{`
        .menu-container {
          display: flex;
          flex-direction: column; /* Change to column */
          height: 100vh;
        }

        .content {
          flex: 1;
          padding-top: 15%;
          padding-right: 10%;
          padding-left: 10%; /* Adjust top padding */
          padding-bottom: 10%; /* Adjust bottom padding */
          background-color: white;
        }

        .menu-item {
          margin: 10px;
          padding: 15px;
          font-size: 24px;
          cursor: pointer;
          border: 2px solid white;
          border-radius: 5px;
          color: black;
          box-sizing: border-box;
          transition: background-color 0.3s, color 0.3s;
        }

        .menu-item:hover {
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
    </div>
  );
};

export default MenuPage;
