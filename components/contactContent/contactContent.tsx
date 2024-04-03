import React,{useState} from "react";
import styles from './contactContent.module.scss';
import { ApiService } from '../../services/api.service';
import axios from 'axios';



export default function ContactContent (contact: any) {
    // console.log('CONT==',contact);
    const baseUrl = new ApiService();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
      });

      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
          await axios.post(baseUrl.getBaseUrl() + 'wp-json/custom-form/v1/contact/send', formData);
          console.log('Message sending succeddfully');
        } catch (error) {
          console.error('Error sending message:', error);
         

        }
        window.location.reload();
      };

    return(
        <div className={styles.contactContent}>
            <div className={`container`}>
                <div className={`row justify-content-between align-items-center`}>
                    <div className={`col-md-4`}>
                        <div className={styles.addressCard}>
                            <div dangerouslySetInnerHTML={{ __html: contact.contact }} />
                        </div>
                    </div>
                    <div className={`col-md-6`}>
                            <div className={styles.formBlock}>
                                <p>Contact Form</p>
                                <h2>Fill the form to contact us directly</h2>

                                <div className={styles.form}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput"
                                               placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} />
                                            <label htmlFor="floatingInput">Full Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingPassword"
                                               placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
                                            <label htmlFor="floatingPassword">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingPassword"
                                               placeholder="Phone" name="mobile" value={formData.mobile} onChange={handleChange}/>
                                        <label htmlFor="floatingPassword">Phone</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea className="form-control h-100" id="floatingPassword"
                                               placeholder="Message" name="message" value={formData.message} onChange={handleChange}/>
                                        <label htmlFor="floatingPassword">Message</label>
                                    </div>

                                    <button onClick={handleSubmit} className={`btn btn-primary mb-3`}>Submit</button>

                                </div>
       


                            </div>
                    </div>
                </div>
            </div>

            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2445132617663!2d77.6448580745473!3d13.020095213814326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae165693ffffc9%3A0x1a37d169cc8d2c28!2sNetiApps%20Software!5e0!3m2!1sen!2sin!4v1711624029099!5m2!1sen!2sin"
                    width="100%" height="450"  loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}