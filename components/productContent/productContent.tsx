import React from "react";
import styles from './productContent.module.scss';
import { ApiService } from '../../services/api.service';



export default function ProductContent (products: any) {
    // console.log('Prodd=',products);
    const baseUrl = new ApiService();
    return(
        <div className={styles.productContent}>
            <div className={`container`}>
                {products.products.products.map((element: any, index: any)=>(
                    <div className={styles.productList}>
                        <h3>{element.product_item.title}</h3>
                        <div className={`row`} key={index}>
                            {element.product_item.img_card.map((ele: any, ind: any)=>(
                                <div className={`col`} key={ind}>
                                    <div className={styles.imgCard}>
                                        <a href={baseUrl.getSiteUrl() + 'products/' + ele.link} >
                                        <img src={ele.img} />
                                        <p>{ele.name}</p>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}