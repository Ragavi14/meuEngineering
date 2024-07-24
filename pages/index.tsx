import React from "react";
import '../styles/global.scss';
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import Industry from "../components/industry/industry";
import ClientSection from "../components/clientSection/clientSection";
import AboutSection from "../components/aboutSection/aboutSection";
import HeroSection from "../components/heroSection/heroSection";
import { ApiService } from '../services/api.service';


export default function Home(props: any) {
  console.log('Home:',props);
  return (
      <div>
         <Navigation nav={props.nav[0].acf} />
         <HeroSection slider={props.home[0].acf.slider}/>
         <AboutSection about={props.home[0].acf} />
         <ClientSection client={props.home[0].acf.clients}/>
         <Industry industry={props.industry[0].acf} />
         <Footer footer={props.footer[0].acf} />
      </div>
  )
}

export async function getServerSideProps() {
  const baseUrl = new ApiService();
  const response = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/navigationsection`);
  const nav = await response.json(); 

  const resFooter = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/footer`);
  const footer = await resFooter.json(); 

  const resIndustry = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/industrysection`);
  const industry = await resIndustry.json(); 

  const resHome = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/homepagesection`);
  const home = await resHome.json();

  const resProductCategory = await fetch(baseUrl.getBaseUrl() + `wp-json/wp/v2/productcategory`);
  const productcategory = await resProductCategory.json(); 



if (nav && nav.length > 0) {
  return {props: {nav, footer, industry, home, productcategory}}
}
else {
  return {props: {}}
}

}