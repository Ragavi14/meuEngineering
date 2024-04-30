import React from "react";
import styles from './innerHero.module.scss';


export default function InnerHero (banner: any) {
    // console.log('bannn-==',banner);
    return(
        <div className={styles.innerHero}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={styles.heading1}>
                    <div dangerouslySetInnerHTML={{ __html: banner.banner }} />
                    </div>
                </div>
            </div>
        </div>
    )
}