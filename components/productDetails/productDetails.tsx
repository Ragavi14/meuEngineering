import React from "react";
import styles from './productDetails.module.scss';


export default function ProductDetails (productDetails: any) {
    console.log('PDetails==',productDetails);
    return(
        <div className={styles.productContent}>
            <div className={`container`}>
                <div className={`row my-4`}>
                    <div className={`col-md-6`}>
                        <img src={productDetails.productDetails.first_div.img} />
                    </div>
                    <div className={`col-md-6`}>
                        <div className={styles.productContentBlock}>
                            <div dangerouslySetInnerHTML={{ __html: productDetails.productDetails.first_div.text }} />
                            <a href={productDetails.productDetails.first_div.link} className={`btn btn-light`}>{productDetails.productDetails.first_div.link_name}</a>
                            <a href={productDetails.productDetails.first_div.button_link} className={`btn btn-primary`}>{productDetails.productDetails.first_div.button}</a>
                        </div>
                    </div>
                </div>
                <div className={`row my-5`}>
                    <div className={styles.productList}>
                        <h3>{productDetails.productDetails.title}</h3>
                        <div className={`row`}>
                            {productDetails.productDetails.products.map((element: any, index: any)=>(
                            <div className={`col`}>
                                <div className={styles.imgCard}>
                                    <img src={element.img} />
                                    <p>{element.name}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}