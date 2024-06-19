import React from "react";
import styles from './productDetails.module.scss';
import { ApiService } from '../../services/api.service';



export default function ProductDetails (productDetails: any) {
    // console.log('PDetails==',productDetails);
    const baseUrl = new ApiService();

    return(
        <div className={styles.productContent}>
            <div className={`container`}>
                <div className={`row my-4`}>
                    <div className={`col-md-6`}>
                        <img src={productDetails.productDetails.details.img} />
                    </div>
                    <div className={`col-md-6`}>
                        <div className={styles.productContentBlock}>
                            <div dangerouslySetInnerHTML={{ __html: productDetails.productDetails.details.text_field.text }} />
                            {/* <a href={productDetails.productDetails.details.text_field.pdf} target="_blank" className={`btn btn-light`}>{productDetails.productDetails.details.text_field.pdf_name}</a> */}
                            <a href={productDetails.productDetails.details.text_field.link} className={`btn btn-primary`}>{productDetails.productDetails.details.text_field.link_name}</a>
                        </div>
                    </div>
                </div>
                {/* <div className={`row my-5`}>
                    <div className={styles.productList}>
                        <h3>Related Products</h3>
                        <div className={`row`}>
                            {productDetails.productDetails.related_products.map((element: any, index: any)=>(
                            <div className={`col`} key={index}>
                                <div className={styles.imgCard}>
                                    <a href={baseUrl.getSiteUrl() + 'products/' + element.link}>
                                        <img src={element.img} />
                                        <p>{element.name}</p>
                                    </a>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}