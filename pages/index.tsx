import React from "react";
import '../styles/global.scss';
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import Industry from "../components/industry/industry";
import ClientSection from "../components/clientSection/clientSection";
import AboutSection from "../components/aboutSection/aboutSection";
import HeroSection from "../components/heroSection/heroSection";


export default function Home() {
  
  return (
      <div>
         <Navigation/>
         <HeroSection/>
         <AboutSection/>
         <ClientSection/>
         <Industry/>
         <Footer/>
      </div>
  )
}