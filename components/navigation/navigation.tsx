// components/Header.js

import React, { useState, useEffect } from "react";
import styles from './navigation.module.scss';

const Header = (nav: any) => {
    console.log('navvv :',nav);
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
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href={nav.nav.logo.link} className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                        <img src={nav.nav.logo.img} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {nav.nav.menu.map((element: any, index: any)=>(
                            <li key={index}>
                                <a href={element.menu_item.link} className="nav-link px-2 link-secondary"> {element.menu_item.name} </a>
                            </li>
                        ))}
                    </ul>

                    <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <div className={styles.contactIcon}>
                            <div className={styles.callIcon}>
                                <img src={`/images/call.svg`} /> {nav.nav.number}
                            </div>

                            <a href={nav.nav.contact.link} className={`btn btn-primary`}> {nav.nav.contact.name} </a>
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
