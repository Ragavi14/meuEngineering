import React,{useState} from "react";
import styles from './contactContent.module.scss';
import { ApiService } from '../../services/api.service';
import axios from 'axios';



export default function ContactContent (contact: any) {
    const baseUrl = new ApiService();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        website: '',
        file: null,
        quantity: '',
        message: ''
      });

      const [errors, setErrors] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData({
                ...formData,
                [name]: files[0] // Store the file object in the state
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const validateForm = () => {
        const { name, email, mobile } = formData;
        let valid = true;
        const newErrors = {
            name: '',
            email: '',
            mobile: ''
        };

        if (!name) {
            newErrors.name = 'Please enter your Name';
            valid = false;
        }
        if (!email) {
            newErrors.email = 'Please enter your Email address';
            valid = false;
        }
        if (!mobile) {
            newErrors.mobile = 'Please enter your Phone Number';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        
       
        const data = new FormData();
        for (let key in formData) {
            if (key === 'file' && formData[key]) {
                data.append(key, (formData as any)[key]); // Assuming file is selected using an <input type="file">
            } else {
                data.append(key, (formData as any)[key]);
            }
        }
        
        try {
            const response = await axios.post(baseUrl.getBaseUrl() + 'wp-json/custom-form/v1/contact/send', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Message sent successfully', response);
        } catch (error) {
            console.error('Error sending message:', error);
        }
        window.location.reload();
        console.log('Data==:',formData);
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
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input type="text"  className={`form-control ${errors.name ? 'is-invalid' : ''}`}  id="floatingInput"
                                                    placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                                                <label htmlFor="floatingInput">Name</label>
                                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}  id="floatingPassword"
                                                     placeholder="Email" name="email" value={formData.email} onChange={handleChange} required/>
                                                <label htmlFor="floatingPassword">Email</label>
                                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input type="text"  className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}  id="floatingPassword"
                                                    placeholder="Phone" name="mobile" value={formData.mobile} onChange={handleChange} required/>
                                                <label htmlFor="floatingPassword">Phone</label>
                                                {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input type="text"  id="website" name="website"  className="form-control" 
                                                    value={formData.website} onChange={handleChange} placeholder="Website" />
                                                <label  htmlFor="floatingPassword">Website</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input type="file" id="file"  name="file"  className="form-control" 
                                                    onChange={handleChange}/>
                                                <label htmlFor="floatingPassword">File</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input  type="text"  id="quantity" name="quantity" className="form-control"
                                                    value={formData.quantity} onChange={handleChange}  placeholder="Quantity" />
                                                <label  htmlFor="floatingPassword">Quantity</label>
                                            </div>
                                        </div>
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