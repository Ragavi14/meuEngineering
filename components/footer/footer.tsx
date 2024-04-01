import React from "react";
import styles from './footer.module.scss';

export default function Navigation(footer: any) {
    console.log('Foo==',footer);
    return(
        <div className={`${styles.footer}`}>
            <div className="container">
                <div className={`${styles.box} row`}>
<<<<<<< HEAD
                    <div className="col-md-12">
                        <p>Didn't find the service you wanted?</p>
                        <button className="btn btn-primary">Enquire Now</button>
                    </div>

=======
                    <div className="col-md-10">
                        <p> {footer.footer.box.text} </p>
                        <a href={footer.footer.box.link} className="btn btn-primary"> {footer.footer.box.button_name} </a>
                    </div>

                    <div className="col-md-2">
                        <img src={footer.footer.box.img } />
                    </div>
>>>>>>> b08214d (changes)
                </div>
                <div className={`${styles.address} row justify-content-center align-items-center`}>
                    <div className="col-md-2">
                        <img src={footer.footer.logo} />
                    </div>
                    <div className="col-md-7">
                        <div dangerouslySetInnerHTML={{ __html: footer.footer.address }} />
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