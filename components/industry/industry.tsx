import React from "react";
import styles from './industry.module.scss';

export default function Industry(industry: any) {

    return (
        <div className={`${styles.industry}`}>
            <div className="container">
                <h5> {industry.industry.title} </h5>
                <div className="row">
                    {industry.industry.img_div.map((element: any, index: any)=>(
                    <a href={element.link} className="col-md-3" key={index}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <img src={element.img}/>
                                <div className={styles.hoverContent}>
                                    <div dangerouslySetInnerHTML={{ __html: element.content }} />
                                </div>
                            </div>
                            <h4> {element.text} </h4>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    )
}