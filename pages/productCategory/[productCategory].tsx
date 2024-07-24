import React from "react";
import '../../styles/global.scss';
import Header from "../../components/navigation/navigation";
import Industry from "../../components/industry/industry";
import Footer from "../../components/footer/footer";
import InnerHero from "../../components/innerHero/innerHero";
import AboutContent from "../../components/aboutContent/aboutContent";
import ProductContent from "../../components/productContent/productContent";
import ProductCategory from '../../components/productCategory/productCategory';
import { ApiService } from '../../services/api.service';


export default function Home(props: any) {
  console.log('PCategory=',props);
  return (
      <div>
          <Header nav={props.nav[0].acf} />
          <InnerHero banner={props.productcategory[0].acf.banner}/>
          <ProductCategory ProductCategory={props.productcategory[0].acf}/>
          
          <Industry industry={props.industry[0].acf} />
          <Footer footer={props.footer[0].acf} />
      </div>
  )
}

export async function getServerSideProps(context : {query: { productCategory: any; }; }) {
  const baseUrl = new ApiService();
  const {productCategory} = context.query;

  const response = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/navigationsection`);
  const nav = await response.json(); 

  const resFooter = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/footer`);
  const footer = await resFooter.json(); 

  const resIndustry = await fetch(baseUrl.getBaseUrl() + `wp-json/acf/v3/industrysection`);
  const industry = await resIndustry.json(); 

  const resProductCategory = await fetch(baseUrl.getBaseUrl() + `wp-json/wp/v2/productcategory?slug=${productCategory}`);
  const productcategory = await resProductCategory.json(); 

if (nav && nav.length > 0) {
  return {props: {nav, footer, industry, productcategory}}
}
else {
  return {props: {}}
}

}