import React, {useEffect} from "react";
import styles from './footer.module.scss';

export default function Navigation(footer: any) {
    // console.log('Foo==',footer);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
        script.async = true;
        document.head.appendChild(script);
        
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return(
        <div className={`${styles.footer}`}>
            <div className="container">
                <div className={`${styles.box} row`}>
                    <div className="col-md-10 text-start">
                        <p> {footer.footer.box.text} </p>
                        <a href={footer.footer.box.link} className="btn btn-primary"> {footer.footer.box.button_name} </a>
                    </div>

                    <div className="col-md-2">
                        <img src={footer.footer.box.img } />
                    </div>
                </div>
                <div className={`${styles.address} row justify-content-center align-items-center`}>
                    <div className="col-md-3">
                        <img src={footer.footer.logo} />
                        <div dangerouslySetInnerHTML={{ __html: footer.footer.address }} />

                    </div>
                    {/* <div className="col-md-3">
                    </div> */}
                    <div className="col-md-6">
                        <div dangerouslySetInnerHTML={{ __html: footer.footer.disclaimer }} />
                    </div>
                    <div className="col text-end">
                        <div className={styles.phone}>
                            <p><img src="/images/phone.svg"/> {footer.footer.number} </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.copyRight} row`}>
                <div dangerouslySetInnerHTML={{ __html: footer.footer.copy_right }} />
                </div>
            </div>
        </div>
    )
}