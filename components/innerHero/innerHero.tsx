import React from "react";
import styles from './innerHero.module.scss';


export default function InnerHero () {
    return(
        <div className={styles.innerHero}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={styles.heading1}>
                        <h2>About Company</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}