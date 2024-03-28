import React from "react";
import styles from './productDetails.module.scss';


export default function ProductDetails () {
    return(
        <div className={styles.productContent}>
            <div className={`container`}>
                <div className={`row my-4`}>
                    <div className={`col-md-6`}>
                        <img src={`/images/aboutImg.svg`} />
                    </div>
                    <div className={`col-md-6`}>
                        <div className={styles.productContentBlock}>
                            <h5>Product Details</h5>
                            <h2>GT-15 SOLID CARBIDE DRILL REAMER</h2>
                            <p>Gandtrack GT-15 Drill Reamer has been designed to perform drilling composite materials. It is designed to drill from solid, or to open pre-drilled holes in composite materials such as:</p>
                            <ul>
                                <li>Carbon Fibre</li>
                                <li>Reinforced Polymers</li>
                                <li>Glass Fibre</li>
                                <li>Graphite Composites</li>
                                <li>Carbon and thin Aluminium stack</li>
                            </ul>
                            <p>The GT-15 Drill Reamer gives the operator the luxury of drill and ream in one operation by hand, eliminating drilling, opening and reaming operations.</p>
                            <p>Gandtrack’s unique cutting geometry provides the best cutting action for both operator and machine producing a high quality tolerance hole and excellent working life and price per hole as per industry demand.</p>

                            <a href={`#`} className={`btn btn-light`}>View Catalogue</a>
                            <a href={'#'} className={`btn btn-primary`}>Contact Us</a>
                        </div>



                    </div>
                </div>
                <div className={`row my-5`}>
                    <div className={styles.productList}>
                        <h3>Related Products</h3>
                        <div className={`row`}>
                            <div className={`col`}>
                                <div className={styles.imgCard}>
                                    <img src={`/images/pro1.jpg`} />
                                    <p>GT-15 SOLID CARBIDE DRILL REAMER</p>
                                </div>
                            </div>
                            <div className={`col`}>
                                <div className={styles.imgCard}>
                                    <img src={`/images/pro1.jpg`} />
                                    <p>GT-15 SOLID CARBIDE DRILL REAMER</p>
                                </div>
                            </div>
                            <div className={`col`}>
                                <div className={styles.imgCard}>
                                    <img src={`/images/pro1.jpg`} />
                                    <p>GT-15 SOLID CARBIDE DRILL REAMER</p>
                                </div>
                            </div>
                            <div className={`col`}>
                                <div className={styles.imgCard}>
                                    <img src={`/images/pro1.jpg`} />
                                    <p>GT-15 SOLID CARBIDE DRILL REAMER</p>
                                </div>
                            </div>
                            <div className={`col`}>
                                <div className={styles.imgCard}>
                                    <img src={`/images/pro1.jpg`} />
                                    <p>GT-15 SOLID CARBIDE DRILL REAMER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}