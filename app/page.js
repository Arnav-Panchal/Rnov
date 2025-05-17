
"use client"

import { useEffect, useState } from "react";
import Aboutme from "@/components/about";
import Navr from "@/components/Navr";
import Headerr from '../components/header';
import Project from "@/components/Projects";
import ContactForm from "@/components/Email";
import Footer from "@/components/footer";

export default function Home() {
  // Using useState with null as initial value to prevent hydration mismatch
  const [scrollY, setScrollY] = useState(null);

  // Update scrollY state when user scrolls, but only client-side
  useEffect(() => {
    // Set initial scroll position after component mounts (client-side only)
    setScrollY(window.scrollY);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Parallax Background - only apply transform when scrollY is available (client-side) */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // transform: scrollY !== null ? `translateY(${scrollY * 0.5}px)` : 'none',
          transition: "transform 0.1s ease-out",
        }}
      />
      
      {/* Content Container - using bg-black/80 for semi-transparent background */}
      <main className="relative z-10 bg-black/70 dark:bg-gray-900/80 px-4 sm:px-8 md:px-20" suppressHydrationWarning>
        <section>
          <Headerr />
          <Navr />
        </section>
        
        <section className="py-10 sm:py-20">
          <div>
            <Aboutme />
          </div>
        </section>
        
        <section>
          <Project />
        </section>
        
        <section>
          <ContactForm />
        </section>
        
        <Footer />
      </main>
    </div>
  );
}