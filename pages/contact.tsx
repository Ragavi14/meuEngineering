import React from "react";
import '../styles/global.scss';
import Header from "../components/navigation/navigation";
import Industry from "../components/industry/industry";
import Footer from "../components/footer/footer";
import InnerHero from "../components/innerHero/innerHero";
import AboutContent from "../components/aboutContent/aboutContent";
import ProductContent from "../components/productContent/productContent";
import ContactContent from "../components/contactContent/contactContent";

export default function Home() {
  
  return (
      <div>
          <Header/>
          <InnerHero/>
          <ContactContent/>


          <Footer/>
      </div>
  )
}