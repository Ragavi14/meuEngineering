import React, { useState } from "react";
import styles from './productContent.module.scss';
import { ApiService } from '../../services/api.service';

export default function ProductContent({ products }: any) {
    const baseUrl = new ApiService();
   
    return (
        <div className={styles.productContent}>
            <div className={`container`}>
                <div className={styles.productList}>   
                    {products.product.map((element: any, index: any)=>(
                        <div key={index}>
                            <a href={baseUrl.getSiteUrl() + 'productCategory/' + element.link}>
                                <h3>{element.title}</h3>
                            </a> 
                            {element.product_type.map((ele: any, ind: any)=>(
                                <div key={ind} className={`row`}>
                                    <a href={baseUrl.getSiteUrl() + 'productCategory/' + ele.link}>
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

    );
}
