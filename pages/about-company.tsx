import React from "react";
import '../styles/global.scss';
import Header from "../components/navigation/navigation";
import Industry from "../components/industry/industry";
import Footer from "../components/footer/footer";

export default function Home() {
  
  return (
      <div>
          <Header/>

          <Industry/>
          <Footer/>
      </div>
  )
}