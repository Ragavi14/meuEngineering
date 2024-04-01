// components/Header.js

import React, { useState, useEffect } from "react";
import styles from './navigation.module.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) { // Adjust 100 to your desired scroll position
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className={`${styles.headerMain} container`}>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                        <img src={`/images/logo.svg`} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li><a href="/about-company" className="nav-link px-2 link-secondary">About Company</a></li>
                            <li><a href="/product" className="nav-link px-2 link-body-emphasis">Products</a></li>
                            <li><a href="#" className="nav-link px-2 link-body-emphasis">Industries</a></li>
                            <li><a href="#" className="nav-link px-2 link-body-emphasis">Facilities</a></li>
                        </ul>
                        <div className="d-flex">
                            <div className={styles.contactIcon}>
                                <div className={styles.callIcon}>
                                    <img src={`/images/call.svg`} /> 080 2658 0593
                                </div>

                                <a href={`#`} className={`btn btn-primary`}>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            </div>





        </header>
    );
};

export default Header;
