import React from "react";
import '../styles/global.scss';
import Header from "../components/navigation/navigation";
import Industry from "../components/industry/industry";
import Footer from "../components/footer/footer";
import InnerHero from "../components/innerHero/innerHero";
import AboutContent from "../components/aboutContent/aboutContent";
import ProductContent from "../components/productContent/productContent";
import { ApiService } from '../services/api.service';


export default function Home(props: any) {
  return (
      <div>
          <Header nav={props.nav[0].acf} />
          <InnerHero banner={props.products[0].acf.banner}/>
          <ProductContent products={props.products[0].acf}/>
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

  const resProducts = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/productssection`);
  const products = await resProducts.json(); 

  const resProductDetails = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/productoverview`);
  const productDetails = await resProductDetails.json(); 


if (nav && nav.length > 0) {
  return {props: {nav, footer, industry, products, productDetails}}
}
else {
  return {props: {}}
}

}