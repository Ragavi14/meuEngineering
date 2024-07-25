import React from "react";
import '../../styles/global.scss';
import Header from "../../components/navigation/navigation";
import Industry from "../../components/industry/industry";
import Footer from "../../components/footer/footer";
import InnerHero from "../../components/innerHero/innerHero";
import ProductDetails from "../../components/productDetails/productDetails";
import { ApiService } from '../../services/api.service';


export default function Home(props: any) {
  return (
      <div>
          <Header nav={props.nav[0].acf} />
          <InnerHero banner={props.productDetails[0].acf.banner}/>
          <ProductDetails productDetails={props.productDetails[0].acf}/> 
          <Industry industry={props.industry[0].acf} />
          <Footer footer={props.footer[0].acf} />
      </div>
  )
}

export async function getServerSideProps(context : {query: { products: any; }; }) {
  const baseUrl = new ApiService();
  const {products} = context.query;

  const response = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/navigationsection`);
  const nav = await response.json(); 

  const resFooter = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/footer`);
  const footer = await resFooter.json(); 

  const resIndustry = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/industrysection`);
  const industry = await resIndustry.json(); 

  const resProductsOverView = await fetch(baseUrl.getBaseUrl() + `wp-json/wp/v2/productoverview`);
  const productsOverView = await resProductsOverView.json(); 

  const resProductDetails = await fetch(baseUrl.getBaseUrl() + `wp-json/wp/v2/productoverview?slug=${products}`);
  const productDetails = await resProductDetails.json(); 

if (nav && nav.length > 0) {
  return {props: {nav, footer, industry, productDetails, productsOverView}}
}
else {
  return {props: {}}
}

}