import React from "react";
import styles from './contactContent.module.scss';


export default function ContactContent () {
    return(
        <div className={styles.contactContent}>
            <div className={`container`}>
                <div className={`row justify-content-between align-items-center`}>
                    <div className={`col-md-4`}>
                        <div className={styles.addressCard}>
                            <p>Address</p>
                            <h3>Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia83 766 284</h3>
                            <h6>Opening hours: Mon - Sat: 9 AM - 6 PM</h6>

                            <div className="mb-2"><img src="/images/call1.svg" /> 080 2658 0593</div>
                            <div className="mb-2"><img src="/images/mail1.svg" /> support@meuengineering.com</div>

                        </div>
                    </div>
                    <div className={`col-md-6`}>
                            <div className={styles.formBlock}>
                                <p>Contact Form</p>
                                <h2>Fill the form to contact us directly</h2>

                                <div className={styles.form}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput"
                                               placeholder="Full Name" />
                                            <label htmlFor="floatingInput">Full Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingPassword"
                                               placeholder="Email" />
                                            <label htmlFor="floatingPassword">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingPassword"
                                               placeholder="Phone" />
                                        <label htmlFor="floatingPassword">Phone</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea type="text" className="form-control h-100" id="floatingPassword"
                                               placeholder="Message" />
                                        <label htmlFor="floatingPassword">Message</label>
                                    </div>

                                    <a href={`#`} className={`btn btn-primary mb-3`}>Submit</a>

                                </div>

                            </div>
                    </div>
                </div>
            </div>

            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2445132617663!2d77.6448580745473!3d13.020095213814326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae165693ffffc9%3A0x1a37d169cc8d2c28!2sNetiApps%20Software!5e0!3m2!1sen!2sin!4v1711624029099!5m2!1sen!2sin"
                    width="100%" height="450"  allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}