import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const NewPortfolio = () => {
  return (
    <div>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Your portfolio description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your Name
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Title or Tagline
            </motion.p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-10 bg-white dark:bg-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">About Me</h2>
          {/* About content will go here */}
        </section>

        {/* Projects Section */}
        <section className="py-20 px-10 bg-gray-100 dark:bg-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">Projects</h2>
          {/* Project cards will go here */}
        </section>

        {/* Contact Section */}
        <section className="py-20 px-10 bg-white dark:bg-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">Contact</h2>
          {/* Contact form or information will go here */}
        </section>
      </main>
    </div>
  );
};

export default NewPortfolio;
