import React from "react";
import styles from './clientSection.module.scss';
import Slider from "react-slick";


export default function ClientSection () {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    return(
        <div>
             <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-12 text-center pt-5`}>
                        <div className={styles.clientsText}>
                            <h2>Trusted by top-tier companies</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.clients}>
                 <Slider {...settings}>
                     <div className={styles.clientIcon}><img src="/images/1.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/2.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/3.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/4.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/5.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/6.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/7.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/8.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/5.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/6.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/7.png" alt="images" /></div>
                     <div className={styles.clientIcon}><img src="/images/8.png" alt="images" /></div>
                 </Slider>
                </div>
            </div>
        </div>
    )
}