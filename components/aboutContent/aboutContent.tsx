import React from "react";
import styles from './aboutContent.module.scss';


export default function AboutContent () {
    return(
        <div className={styles.aboutContent}>
            <div className={styles.firstSection}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <div className={styles.aboutCard}>
                                <h2>Pioneer and Leader in HSS Cutting Tools</h2>
                                <h5>Since 1937</h5>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={styles.aboutCard}>
                                <h2>Total Tooling Solution Provider</h2>
                                <h5>Strong Application Engineering Team</h5>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={styles.aboutCard}>
                                <h2>Two Manufacturing Units</h2>
                                <h5>Expertise in Manufacturing</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-md-6`}>
                            <div className={styles.aboutCard}>
                                <h2>MEU A name cut out for leadership. And an integral component of your production success. </h2>
                                <p>We offer you a wide range of cutting Tools to meet rituality any application: Reamers, Core Drills, End Mills, Die sinking cutters, other Bore type Milling cutters and Ball nose end mills-all of them, products of proven design and reliability. We take this opportunity to share with you that we have continued to develop better and cost effective tool to meet your ever-changing requirement. Yes, when you come to MEU, You can cut costs and boost Productivity, Because , when it comes to quality, nothing cuts Sharper than experience.MEU experience! MEU A name cut out for leadership. And an integral component of your production success</p>
                            </div>
                        </div>
                        <div className={`col-md-6 text-center`}>
                            <img src={`/images/aboutImg.svg`} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}