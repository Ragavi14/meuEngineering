import React from "react";
import styles from './footer.module.scss';

export default function Navigation() {
    return(
        <div className={`${styles.footer}`}>
            <div className="container">
                <div className={`${styles.box} row`}>
                    <div className="col-md-4">
                        <p>Didn't find <br/>the service you wanted?</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn">Contact</button>
                    </div>
                    <div className="col-md-4">
                        <img src="/images/tool.png" />
                    </div>
                </div>
                <div className={`${styles.address} row`}>
                    <div className="col-md-6">
                        <p style={{justifyContent: 'center'}}>MEU Engineering <br/> # 174/1, Bannerghatta Main Road,<br/> Bangalore-560 076, INDIA</p>
                    </div>
                    <div className="col-md-6">
                        <p style={{justifyContent: 'center'}}> <img src="/images/phone.svg"/> 080 2658 0593</p>
                    </div>
                </div>
                <div className={`${styles.copyRight} row`}>
                 <p>   Copyright ©2024 MEU Engineering - All Rights Reserved <br/>Powered by Netiapps </p>
                </div>
            </div>
        </div>
    )
}