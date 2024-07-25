import React from "react";
import styles from './productDetails.module.scss';
import { ApiService } from '../../services/api.service';



export default function ProductDetails (productDetails: any) {
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
                            <a href={productDetails.productDetails.details.text_field.link} className={`btn btn-primary`}>{productDetails.productDetails.details.text_field.link_name}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}