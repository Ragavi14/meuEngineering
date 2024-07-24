import React, { useState } from "react";
import styles from './product.module.scss';
import { ApiService } from '../../services/api.service';

export default function ProductContent({ products }: any) {
    console.log('proddd=',products);
    const baseUrl = new ApiService();
    
    // const hssDrills = products.some(
    //     (product: any) => product.acf.product_type === 'HSS' && product.acf.sub_type === 'DRILLS'
    // );
    // const hssEndmill = products.some(
    //     (product: any) => product.acf.product_type === 'HSS' && product.acf.sub_type === 'ENDMILL'
    // );
    // const hssReamer = products.some(
    //     (product: any) => product.acf.product_type === 'HSS' && product.acf.sub_type === 'REAMER'
    // );
    // const hssCutter = products.some(
    //     (product: any) => product.acf.product_type === 'HSS' && product.acf.sub_type === 'CUTTERS'
    // );
    // const hssCountersink = products.some(
    //     (product: any) => product.acf.product_type === 'HSS' && product.acf.sub_type === 'COUNTERSINK'
    // );
    // const hssHolemills = products.some(
    //     (product: any) => product.acf.product_type === 'HSS' && product.acf.sub_type === 'HOLEMILLS'
    // );
    return (
        <div className={styles.productContent}>
            <div className={`container`}>
                <div className={styles.productList}>   
                    {products.product.map((element: any, index: any)=>(
                        <div key={index}>
                            {/* <a href={baseUrl.getSiteUrl() + 'productCategory/' + element.link}> */}
                                <h3>{element.title}</h3>
                            {/* </a>  */}
                            {element.product_type.map((ele: any, ind: any)=>(
                                <div key={ind} className={`row`}>
                                    {/* <a href={baseUrl.getSiteUrl() + 'productCategory/' + ele.link}>
                                        <h5>{ele.title} <img src="/images/arrow.png" /> </h5>
                                    </a> */}
                                    <a href={'productCategory/' + ele.link}>
                                        <h5>{ele.title} <img src="/images/arrow.png" /> </h5>
                                    </a>
                                    {ele.product_content.map((products: any, indexProducts: any)=>(
                                         <div className={`col-md-3`} key={indexProducts}>
                                         <div className={styles.imgCard}>
                                             <a href={ 'products/' + products.link}>
                                                 <img src={products.img} alt={products.name} />
                                                 <p>{products.name}</p>
                                             </a>
                                         </div>
                                     </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>    
        </div>

        // <div className={styles.productContent}>
        //     <div className={`container`}>
        //         <div className={styles.productList}> 
        //             <h2>HSS</h2>  
        //                 <div className="row">
        //                     {hssDrills && <h5>DRILLS</h5>}
        //                         {products.map((product: any, index: any) => (
        //                                 product.acf.product_type === 'HSS' && product.acf.sub_type === 'DRILLS' && (
        //                                     <div key={index} className="col-md-3">
        //                                                 <div className={styles.imgCard}>
        //                                                     <a href={baseUrl.getSiteUrl() + 'products/' + product.slug}>
        //                                                         <img src={product.acf.details.img} />
        //                                                         <p>{product.acf.name}</p>
        //                                                     </a>
        //                                                 </div>
                                                    
        //                                         </div>
        //                                 )
        //                             ))}
        //                 </div>
        //                 <div className="row">
        //                     {hssEndmill && <h5>ENDMILL </h5>}
        //                         {products.map((product: any, index: any) => (
        //                                 product.acf.product_type === 'HSS' && product.acf.sub_type === 'ENDMILLS' && (
        //                                     <div key={index} className="col-md-3">
        //                                                 <div className={styles.imgCard}>
        //                                                     <a href={baseUrl.getSiteUrl() + 'products/' + product.slug}>
        //                                                         <img src={product.acf.details.img} />
        //                                                         <p>{product.acf.name}</p>
        //                                                     </a>
        //                                                 </div>
                                                    
        //                                         </div>
        //                                 )
        //                             ))}
        //                 </div>
        //                 <div className="row">
        //                     {hssReamer && <h5>REAMER </h5>}
        //                         {products.map((product: any, index: any) => (
        //                                 product.acf.product_type === 'HSS' && product.acf.sub_type === 'REAMER' && (
        //                                     <div key={index} className="col-md-3">
        //                                                 <div className={styles.imgCard}>
        //                                                     <a href={baseUrl.getSiteUrl() + 'products/' + product.slug}>
        //                                                         <img src={product.acf.details.img} />
        //                                                         <p>{product.acf.name}</p>
        //                                                     </a>
        //                                                 </div>
                                                    
        //                                         </div>
        //                                 )
        //                             ))}
        //                 </div>
        //                 <div className="row">
        //                     {hssCutter && <h5>CUTTERS </h5>}
        //                         {products.map((product: any, index: any) => (
        //                                 product.acf.product_type === 'HSS' && product.acf.sub_type === 'CUTTERS' && (
        //                                     <div key={index} className="col-md-3">
        //                                                 <div className={styles.imgCard}>
        //                                                     <a href={baseUrl.getSiteUrl() + 'products/' + product.slug}>
        //                                                         <img src={product.acf.details.img} />
        //                                                         <p>{product.acf.name}</p>
        //                                                     </a>
        //                                                 </div>
                                                    
        //                                         </div>
        //                                 )
        //                             ))}
        //                 </div>
        //                 <div className="row">
        //                     {hssCountersink && <h5>COUNTERSINK </h5>}
        //                         {products.map((product: any, index: any) => (
        //                                 product.acf.product_type === 'HSS' && product.acf.sub_type === 'COUNTERSINK' && (
        //                                     <div key={index} className="col-md-3">
        //                                                 <div className={styles.imgCard}>
        //                                                     <a href={baseUrl.getSiteUrl() + 'products/' + product.slug}>
        //                                                         <img src={product.acf.details.img} />
        //                                                         <p>{product.acf.name}</p>
        //                                                     </a>
        //                                                 </div>
                                                    
        //                                         </div>
        //                                 )
        //                             ))}
        //                 </div>
        //                 <div className="row">
        //                     {hssHolemills && <h5>HOLEMILLS </h5>}
        //                         {products.map((product: any, index: any) => (
        //                                 product.acf.product_type === 'HSS' && product.acf.sub_type === 'HOLEMILLS' && (
        //                                     <div key={index} className="col-md-3">
        //                                                 <div className={styles.imgCard}>
        //                                                     <a href={baseUrl.getSiteUrl() + 'products/' + product.slug}>
        //                                                         <img src={product.acf.details.img} />
        //                                                         <p>{product.acf.name}</p>
        //                                                     </a>
        //                                                 </div>
                                                    
        //                                         </div>
        //                                 )
        //                             ))}
        //                 </div>
        //         </div>
        //     </div>
            
        // </div>
    );
}
