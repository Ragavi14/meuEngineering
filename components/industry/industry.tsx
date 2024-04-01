import React from "react";
import styles from './industry.module.scss';

export default function Industry(industry: any) {

    return (
        <div className={`${styles.industry}`}>
            <div className="container">
                <h5> {industry.industry.title} </h5>
                <div className="row">
                    {industry.industry.img_div.map((element: any, index: any)=>(
                    <div className="col-md-4" key={index}>
                        <a href={element.link} >
                            <img src={element.img}/>
                            <p> {element.text} </p>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}