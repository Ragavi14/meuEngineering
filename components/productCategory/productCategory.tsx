import React, { useState } from "react";
import styles from './productCategory.module.scss';
import { ApiService } from '../../services/api.service';

export default function ProductContent({ ProductCategory }: any) {
    const baseUrl = new ApiService();
    
   
    return (
        <div className={styles.productContent}>
            <div className={`container`}>
                <div className={styles.productList}> 
                <div className={'row'}> 
                <h2>{ProductCategory.title}</h2> 
                    {ProductCategory.products.map((products: any, indexProducts: any)=>(
                            <div className={`col-md-3`} key={indexProducts}>
                            <div className={styles.imgCard}>
                                <a href={baseUrl.getSiteUrl() + 'products/' + products.link}>
                                    <img src={products.img} alt={products.title} />
                                    <p>{products.name}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>    
        </div>

    );
}
