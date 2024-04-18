import React from "react";
import styles from './productContent.module.scss';


export default function ProductContent (products: any) {
    // console.log('Prodd=',products);
    return(
        <div className={styles.productContent}>
            <div className={`container`}>
                {products.products.products.map((element: any, index: any)=>(
                    <div className={styles.productList}>
                        <h3>{element.product_item.title}</h3>
                        <div className={`row `} key={index}>
                            {element.product_item.img_card.map((ele: any, ind: any)=>(
                                <div className={`col-md-3`} key={ind}>
                                    <div className={styles.imgCard}>
                                        <img src={ele.img} />
                                        <p>{ele.name}</p>
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