import React from "react";
import styles from './footer.module.scss';

export default function Navigation() {
    return(
        <div className={`${styles.footer}`}>
            <div className="container">
                <div className={`${styles.box} row`}>
                    <div className="col-md-12">
                        <p>Didn't find the service you wanted?</p>
                        <button className="btn btn-primary">Enquire Now</button>
                    </div>

                </div>
                <div className={`${styles.address} row justify-content-center align-items-center`}>
                    <div className="col-md-2">
                        <img src={`/images/logo.svg`} />
                    </div>
                    <div className="col-md-7">
                        <p>MEU Engineering <br/> # 174/1, Bannerghatta Main Road,<br/> Bangalore-560 076, INDIA</p>
                    </div>
                    <div className="col text-end">
                        <div className={styles.phone}>
                            <p><img src="/images/phone.svg"/> 080 2658 0593</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.copyRight} row`}>
                 <p>Copyright ©2024 MEU Engineering - All Rights Reserved <br/>Powered by NetiApps</p>
                </div>
            </div>
        </div>
    )
}