import React from "react";
import styles from './aboutContent.module.scss';


export default function AboutContent (about: any) {
    console.log('ABTTT:',about);
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
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-md-6`}>
                            <div className={styles.aboutCard}>
                                <div dangerouslySetInnerHTML={{ __html: about.about.second_content.text }} />
                            </div>
                        </div>
                        <div className={`col-md-6 text-center`}>
                            <img src={about.about.second_content.img} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}