import React from "react";
import styles from './heroSection.module.scss'
import { url } from "inspector";
import Slider from "react-slick";
import { ApiService } from '../../services/api.service';


export default function HeroSection(slider: any) {

    // console.log('Banner=',slider);
    const baseUrl = new ApiService();


    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
       <div className={`${styles.banner}`}>

           <div className={`container`}>
               <div className={`row justify-content-center align-items-center`}>
                   <div className={`col-md-6 p-5`}>

                       <Slider {...settings}>
                       <div className={`d-flex justify-content-center align-items-center h-100`}>

                               <div>
                                   <h2>Giving you that Fine Edge in Metal Cutting</h2>
                                   <p>Giving you that Fine Edge in Metal Cutting</p>
                                   <div className={`d-flex justify-content-start align-items-center`}>
                                   <a className="btn me-3" href={`/`}>Read More</a>
                                       <img src={`/images/iso.png`} />
                                   </div>
                               </div>

                       </div>
                           <div className={`d-flex justify-content-center align-items-center h-100`}>

                               <div>
                                   <h2>Giving you that Fine Edge in Metal Cutting</h2>
                                   <p>Giving you that Fine Edge in Metal Cutting</p>
                                   <div className={`d-flex justify-content-start align-items-center`}>
                                       <a className="btn me-3" href={`/`}>Read More</a>
                                       <img src={`/images/iso.png`} />
                                   </div>
                               </div>

                           </div>
                       </Slider>
                   </div>
                   <div className={`col-md-6`}>
                       <div className={styles.bannerImg}>
                           <img src={`/images/toolss.png`} />
                       </div>
                   </div>
               </div>
           </div>


       </div>
    )
}