"use client";
import React, {useState} from "react";
import styles from './navigation.module.scss';

export default function Navigation() {


    return (
       <div className={`${styles.nav}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <a href="/"><img src="/images/logo.svg"/></a>
                    </div>
                    <div className={`${styles.menuItems} col-md-6`}>
                        <a href="#">About us</a>
                        <a href="#">Products</a>
                        <a href="#">Industries</a>
                        <a href="#">Facilities</a>
                        {/* <p><img src="/images/phone.svg"/> 080 2658 0593</p> */}
                    </div>
                    <div className={`${styles.Btn} col-md-4`}>
                    <p><img src="/images/phone.svg"/> 080 2658 0593</p>
                        <button className="btn">Contact</button>
                    </div>
                </div>
            </div>
       </div>
    )
}