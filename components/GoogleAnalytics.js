// components/GoogleAnalytics.js
'use client'; // Ensure this file is a client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation in case of issues with next/router
import { GA_TRACKING_ID, pageview } from '@/components/gtag'; // Ensure the path to gtag is correct

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    // Register the event listener
    const handleRouteChangeComplete = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Clean up the event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return null;
};

export default GoogleAnalytics;
