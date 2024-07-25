import React from "react";
import styles from './facilities.module.scss';


export default function Facilities (facilities: any) {
    return(
        <div className={styles.productContent}>
        <div className={`container`}>
            {facilities.facilities.map((element: any, index: any)=>(
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
    )
}