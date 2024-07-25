import React from "react";
import styles from './aboutContent.module.scss';


export default function AboutContent (about: any) {
    // console.log('ABTTT:',about);
    return(
        <div className={styles.aboutContent}>
            <div className={styles.firstSection}>
                <div className={`container`}>
                    <div className={`row`}>
                        {about.about.first_content.map((element: any, index: any)=>(
                        <div className={`col-md-4`} key={index}>
                            <div className={styles.aboutCard}>
                            <div dangerouslySetInnerHTML={{ __html: element.text }} />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={`container`}>
                    {about.about.second_content.map((element: any, index: any)=>(
                        <div className={`row justify-content-center align-items-center my-5`} key={index}>
                            <div className={(index % 2) == 0 ?`row justify-content-center align-items-center`: `row justify-content-center align-items-center flex-row-reverse`}>
                                <div className={`col-md-6 text-center`}>
                                    <img src={element.img} width={`100%`} />
                                </div>
                                <div className={`col-md-6`}>
                                    <div className={styles.productContentBlock}>
                                    <div dangerouslySetInnerHTML={{ __html: element.text }} />
                                    </div>
                                </div>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}