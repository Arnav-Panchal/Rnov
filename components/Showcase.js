"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence

export default function Showcase() {
  const textToType = "Arnav Panchal"; // Your name
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentText = "";
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < textToType.length) {
        currentText += textToType.charAt(i);
        setDisplayText(currentText);
        i++;
      } else {
        clearInterval(typingInterval);
        // Start cursor blinking after typing is complete
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500); // Blinking speed
        return () => clearInterval(cursorInterval);
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [textToType]);


  return (
    // Modified structure for a terminal-like hero section
    <section className="h-screen flex items-center bg-black text-green-400 px-10"> {/* Dark background and green text */}
      <div className="max-w-4xl mx-auto"> {/* Adjust max-width and centering if needed */}
        <div className="text-left font-mono text-lg md:text-xl"> {/* Apply monospaced font and adjust size */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1 }}
          >
             <p>{`>`} Initializing portfolio...</p>
             <p>{`>`} Connecting to data streams...</p>
             <p>{`>`} Access granted.</p>
             <br/>
          </motion.div>

          <div className="flex">
             <p>{`>`} </p>
             <motion.p
               className="ml-1" // Add some space after the prompt
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 3 }} // Delay typing animation
             >
               {displayText}
               <AnimatePresence>
                 {showCursor && (
                   <motion.span
                     className="inline-block w-2 h-5 bg-green-400 ml-1" // Cursor style
                     initial={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                   >
                   </motion.span>
                 )}
               </AnimatePresence>
             </motion.p>
          </div>


          <motion.p
             className="mt-2" // Add some space below the typed text
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 4 }} // Delay appearance
          >
            Full Stack Developer {/* Your title/tagline */}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
