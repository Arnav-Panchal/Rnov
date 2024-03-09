//import Head from "next/head";


import Aboutme from "@/components/about";
import Header from "@/components/Header";
// import Cards from "@/components/Cards";
import Folio from "@/components/Folio";
//import Slider from "@/components/Slider";
// import HS from
import ContactForm from "@/components/Email";
import Showcase from "@/components/Showcase";
import cudeImage from "../public/cube.jpg";
import ProfileStats from "@/components/profilestats";
import Footer from "@/components/footer";

// import { Container,Heading,FormControl,FormLabel,Input } from 'postcss'




export default function Home() {

  return (
    <div className="bg-fixed-image bg-cover bg-center bg-no-repeat" >
      <main className=" bg-black px-10 dark:bg-gray-900 md:px-20 lg:px-40" >
        <Header />
        <section className="py-20">
          <div>
            <Aboutme />
          </div>
          
          {/* <Cards/> */}
        </section>
        
        <section className="py-10">
          
          {/* <ProfileStats/> */}
          <Showcase/>
        </section>
        <section>
          <ContactForm/>
        </section>
        {/* <Folio/> */}

        <Footer/>
        
      </main>
    </div>
  );
}
