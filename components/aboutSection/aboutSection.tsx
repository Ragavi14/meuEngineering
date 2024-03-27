import React from "react";
import styles from "./aboutSection.module.scss";

export default function aboutSection (){
    return(
        <div className={`${styles.aboutSection}`}>
            <div className="container">
                <div className="row">
                    <div className={`col-8 mx-auto text-center`}>
                        <h4>MEU is not only a preferred supplier for industries in Bangalore i.e., Catering to the technical demands of the customers all over India. We exporting our precision Engineering tools to western countries.</h4>
                        <a href="#" className="btn">Learn more</a>
                    </div>
                </div>

                <div className={`${styles.Img} row`}>
                    <h5>OUR PRODUCTS</h5>
                    <div className="col-md-2">
                        <div className={`${styles.ImgDiv}`}>
                            <img src="/images/drill.png" /> 
                        </div>
                        <p>Drills</p>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.ImgDiv}`}>
                            <img src="/images/mole.png" /> 
                        </div>
                        <p>Mole Mills</p>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.ImgDiv}`}>
                            <img src="/images/cutter.png" /> 
                        </div>
                        <p>Cutters</p>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.ImgDiv}`}>
                            <img src="/images/reamer.png" /> 
                        </div>
                        <p>Reamer</p>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.ImgDiv}`}>
                            <img src="/images/face.png" /> 
                        </div>
                        <p>Face Cutter</p>
                    </div>
                    <div className="col-md-2">
                        <div className={`${styles.ImgDiv}`}>
                            <img src="/images/metal.png" /> 
                        </div>
                        <p>Metal Siting Saws</p>
                    </div>
                    <h6>We manufacture different types of high performance Carbide & HSS Tools to machine-wide 
                    variety of metals & acrylic.</h6>
                    <div className={`${styles.Btn}`}>
                        <a href="#" className="btn btn-primary">View Catalogue</a>
                        <a href="#" className="btn btn-primary">Get a Quote</a>
                    </div>
                </div>
            </div>

        </div>
    )
}