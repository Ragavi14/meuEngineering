import React from "react";
import styles from './industry.module.scss';

export default function Industry() {


    return (
        <div className={`${styles.industry}`}>
            <div className="container">
                <h5>Industry Verticals</h5>
                <div className="row">
                    <div className="col-md-4">
                        <img src="/images/automotive.png"/>
                        <p>Automotive</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/images/aerospace.png"/>
                        <p>Aerospace</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/images/defence.png"/>
                        <p>Defence</p>
                    </div>
                </div>
            </div>
        </div>
    )
}