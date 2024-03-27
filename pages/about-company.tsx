import React from "react";
import '../styles/global.scss';
import Header from "../components/navigation/navigation";
import Industry from "../components/industry/industry";
import Footer from "../components/footer/footer";
import InnerHero from "../components/innerHero/innerHero";
import AboutContent from "../components/aboutContent/aboutContent";

export default function Home() {
  
  return (
      <div>
          <Header/>
          <InnerHero/>
          <AboutContent/>

          <Industry/>
          <Footer/>
      </div>
  )
}