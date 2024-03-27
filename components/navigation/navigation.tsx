"use client";
import React, {useState} from "react";
import styles from './navigation.module.scss';

export default function Navigation() {


    return (
        <header className={styles.header}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                        <img src={`/images/logo.svg`} />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">About Company</a></li>
                        <li><a href="#" className="nav-link px-2 link-body-emphasis">Products</a></li>
                        <li><a href="#" className="nav-link px-2 link-body-emphasis">Industries</a></li>
                        <li><a href="#" className="nav-link px-2 link-body-emphasis">Facilities</a></li>
                    </ul>

                    <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <div className={styles.contactIcon}>
                            <div className={styles.callIcon}>
                                <img src={`/images/call.svg`} /> 080 2658 0593
                            </div>

                            <a href={`#`} className={`btn btn-primary`}>Contact</a>
                        </div>

                    </div>

                </div>
            </div>
        </header>
    )
}