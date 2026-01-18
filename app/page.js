'use client';

import Head from 'next/head';
import { useEffect } from 'react';
import Navr from '@/components/Navr';
import Aboutme from '@/components/about';
import ProjectsPage from '@/components/Projects';
import Email from '@/components/Email';
import Footer from '@/components/footer';
import Showcase from '@/components/Showcase';
import AIAssistant from '@/components/AIAssistant';

export default function Home() {
  useEffect(() => {
    fetch('/api/track');
  }, []);

  return (
    <div>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Your portfolio description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col">
        <Navr />
        <Showcase />
        <Aboutme />
        <ProjectsPage />
        <div className="mx-auto w-full max-w-6xl px-4 flex justify-center">
          <AIAssistant />
        </div>
        <Email />
        <Footer />
      </main>
    </div>
  );
}
