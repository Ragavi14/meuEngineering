import React, { useState, useEffect } from "react";
import styles from './navigation.module.scss';

const Header = (nav: any) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) { // Adjust 100 to your desired scroll position
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


                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href={nav.nav.logo.link}> <img src={nav.nav.logo.img} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                {nav.nav.menu.map((element: any, index: any)=>(
                                    <li key={index}>
                                        <a href={element.menu_item.link} className="nav-link px-2 link-secondary"><b> {element.menu_item.name} </b></a>
                                    </li>
                                ))}
                            </ul>
                            <div className="d-flex">
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
