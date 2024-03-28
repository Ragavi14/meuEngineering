import React from "react";
import styles from './heroSection.module.scss'
import { url } from "inspector";
import Slider from "react-slick";


export default function HeroSection(hero: any) {

    // console.log('Banner=',hero);

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
       <div className={`${styles.banner}`} >

               <Slider {...settings}>
                   <div>
                       <div className={`container`}>
                       <div className={`row`}>
                       <div className={`col-md-6 p-5`}>
                           <div className={`d-flex justify-content-center align-items-center h-100`}>
                               <div>
                                   <h2>Giving you that Fine Edge in Metal Cutting</h2>
                                   <p>Ensure your business needs never outpace your production capabilities.</p>
                                   <div className={`d-flex justify-content-start align-items-center`}>
                                       <button className="btn me-3">View Catalogue</button>
                                       <img src="/images/iso.png" />
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className={`col-md-6`}>
                           {/* <Slider {...settings}> */}

                           <div className="carousel-item active">
                               <div>
                                   <div className={``}>
                                       <div className={`row justify-content-center align-items-center px-0`}>

                                           <div className={`col-md-12`}>
                                               <div className={styles.bannerImg}>
                                                   <img src="/images/toolss.png" alt="images" />
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>

                           {/*  </Slider> */}
                       </div>
                   </div>
                       </div>
                   </div>
                   <div>
                       <div className={`container`}>
                           <div className={`row`}>
                               <div className={`col-md-6 p-5`}>
                                   <div className={`d-flex justify-content-center align-items-center h-100`}>
                                       <div>
                                           <h2>Giving you that Fine Edge in Metal Cutting</h2>
                                           <p>Ensure your business needs never outpace your production capabilities.</p>
                                           <div className={`d-flex justify-content-start align-items-center`}>
                                               <button className="btn me-3">View Catalogue</button>
                                               <img src="/images/iso.png" />
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className={`col-md-6`}>
                                   {/* <Slider {...settings}> */}

                                   <div className="carousel-item active">
                                       <div>
                                           <div className={``}>
                                               <div className={`row justify-content-center align-items-center px-0`}>

                                                   <div className={`col-md-12`}>
                                                       <div className={styles.bannerImg}>
                                                           <img src="/images/toolss.png" alt="images" />
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>

                                   {/*  </Slider> */}
                               </div>
                           </div>
                       </div>
                   </div>
                   <div>
                       <div className={`container`}>
                           <div className={`row`}>
                               <div className={`col-md-6 p-5`}>
                                   <div className={`d-flex justify-content-center align-items-center h-100`}>
                                       <div>
                                           <h2>Giving you that Fine Edge in Metal Cutting</h2>
                                           <p>Ensure your business needs never outpace your production capabilities.</p>
                                           <div className={`d-flex justify-content-start align-items-center`}>
                                               <button className="btn me-3">View Catalogue</button>
                                               <img src="/images/iso.png" />
                                           </div>

                                       </div>
                                   </div>
                               </div>
                               <div className={`col-md-6`}>
                                   {/* <Slider {...settings}> */}

                                   <div className="carousel-item active">
                                       <div>
                                           <div className={``}>
                                               <div className={`row justify-content-center align-items-center px-0`}>

                                                   <div className={`col-md-12`}>
                                                       <div className={styles.bannerImg}>
                                                           <img src="/images/toolss.png" alt="images" />
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>

                                   {/*  </Slider> */}
                               </div>
                           </div>
                       </div>
                   </div>

               </Slider>
       </div>
    )
}