import React from "react";
import styles from './clientSection.module.scss';
import Slider from "react-slick";


export default function ClientSection (client: any) {
    
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        // autoplaySpeed: 10000,
        cssEase: "linear",
    };
    return(
        <div>
             <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-12 text-center pt-5`}>
                        <div className={styles.clientsText}>
                            <h2>{client.client.title}</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.clients}>
                    <Slider {...settings}>
                        {client.client.client_img.map((element: any, index: any)=>(                                                 
                            <div className={styles.clientIcon} key={index}> 
                                <img src={element.img} alt={element.name} /> 
                            </div>                         
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}