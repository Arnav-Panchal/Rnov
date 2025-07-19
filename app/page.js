import Head from 'next/head';
import Navr from '@/components/Navr'; // Assuming this is your navigation component
import Aboutme from '@/components/about'; // Your existing Aboutme component
import ProjectsPage from '@/components/Projects'; // Your existing Projects component
import Email from '@/components/Email'; // Assuming this is your contact component
import Footer from '@/components/footer'; // Assuming this is your footer component
import Showcase from '@/components/Showcase'; // Assuming this is your hero/showcase component


export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Your portfolio description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modify the main element for overall layout */}
      <main className="flex min-h-screen flex-col"> {/* Removed p-24 and justify-between */}
        <Navr /> {/* Your navigation */}
        <Showcase /> {/* Your hero/showcase section */}
        <Aboutme /> {/* Your About Me section */}
        <ProjectsPage /> {/* Your Projects section */}
        <Email /> {/* Your Contact section */}
        <Footer /> {/* Your Footer */}
      </main>
    </div>
  );
}
