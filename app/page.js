//import Head from "next/head";

import Aboutme from "@/components/about";
import Header from "@/components/Header";
import Project from "@/components/Projects";
// import Cards from "@/components/Cards";
import ContactForm from "@/components/Email";
import Footer from "@/components/footer";

// import { Container,Heading,FormControl,FormLabel,Input } from 'postcss'

export default function Home() {
  return (
    <div className="bg-fixed-image bg-cover bg-center bg-no-repeat">
      <main className="bg-black dark:bg-gray-900 px-4 sm:px-8 md:px-20">
        <Header />
        <section className="py-10 sm:py-20">
          <div>
            <Aboutme />
          </div>
        </section>
        <section >
          <Project />
        </section>
        <section >
          <ContactForm />
        </section>
        <Footer />
      </main>
    </div>
  );
}
