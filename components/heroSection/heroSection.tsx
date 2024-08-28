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
               <Slider {...settings}>
                    {slider.slider.map((element: any, index: any)=>(
                        <div key={index}>
                            <div className={`container`} >
                                <div className={`row`}>
                                    <div className={`col-md-6 p-5`}>
                                        <div className={`d-flex justify-content-center align-items-center h-100`}>
                                            <div>
                                                <div dangerouslySetInnerHTML={{ __html: element.text_content.text }} />
                                                <div className={`d-flex justify-content-start align-items-center`}>
                                                    <a className="btn me-3" href={element.text_content.link}> {element.text_content.button} </a>
                                                    <img src={element.text_content.img} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`col-md-6`}>
                                        <div className="carousel-item active">
                                            <div>
                                                <div className={``}>
                                                    <div className={`row justify-content-center align-items-center px-0`}>

                                                        <div className={`col-md-12`}>
                                                            <div className={styles.bannerImg}>

                                                                <img className={styles.firstImg} src={`/images/tool1.png`}/>
                                                                <img className={styles.secondImg}src={`/images/tool2.png`}/>
                                                                <img className={styles.firstImg}src={`/images/tool3.png`}/>
                                                                <img className={styles.secondImg}src={`/images/tool4.png`}/>
                                                                <img className={styles.firstImg}src={`/images/tool5.png`}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
       </div>
    )
}