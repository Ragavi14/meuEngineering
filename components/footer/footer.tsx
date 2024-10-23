import React, { useEffect, useState } from "react";
import styles from './footer.module.scss';

export default function Navigation(footer: any) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
        script.async = true;
        document.head.appendChild(script);

        const handleScroll = () => {
            if (window.scrollY > 100) { // Change 100 to the desired scroll position
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.head.removeChild(script);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <div className={`${styles.footer}`}>
            <div className="container">
                <div className={`${styles.box} row`}>
                    <div className="col-md-10 text-start">
                        <p>{footer.footer.box.text}</p>
                        <a href={footer.footer.box.link} className="btn btn-primary">{footer.footer.box.button_name}</a>
                    </div>
                    <div className="col-md-2">
                        <img src={footer.footer.box.img} alt="Footer Box" />
                    </div>
                </div>
                <div className={`${styles.address} row justify-content-center align-items-center`}>
                    <div className="col-md-3">
                        <img src={footer.footer.logo} alt="Logo" />
                        <div dangerouslySetInnerHTML={{ __html: footer.footer.address }} />
                    </div>
                    <div className="col-md-6">
                        <div dangerouslySetInnerHTML={{ __html: footer.footer.disclaimer }} />
                    </div>
                    <div className="col text-end">
                        <div className={styles.phone}>
                            <div><img src={`/images/call.svg`} alt="Call Icon" /></div>
                            <div>
                                <p>{footer.footer.number}</p>
                                <p>{footer.footer.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.copyRight} row`}>
                    <div dangerouslySetInnerHTML={{ __html: footer.footer.copy_right }} />
                </div>
            </div>
            {isVisible && (
                <div className={`${styles.scrollDiv}`}>
                    <div className={styles.closeButton} onClick={handleClose}>
                        &times; {/* Close icon or text */}
                    </div>
                    <h3>Didn't find the service you're looking for?</h3>
                    <a href={`/contact`}><img src={`/images/button.png`} /></a>
                </div>
            )}
        </div>
    );
}
