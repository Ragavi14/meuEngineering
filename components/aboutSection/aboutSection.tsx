import React from "react";
import styles from "./aboutSection.module.scss";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

export default function aboutSection (about: any){
    return(
        <div className={`${styles.aboutSection}`}>
            <div className="container">
                <div className="row">
                    <div className={`col-8 mx-auto text-center`}>
                        <Slider {...settings}>
                            {about.about.about_section.text_area.map((element: any, index: any)=>(
                                <div key={index}>
                                    <div dangerouslySetInnerHTML={{ __html: element.text }} />
                                    <a href={about.about.about_section.link}  className="btn">{about.about.about_section.button} </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className={`${styles.Img} row`}>
                    <h5>{about.about.products.title}</h5>
                        {about.about.products.img_div.map((element: any, index: any)=>(
                            <div className="col-md-2" key={index}>
                                <a href="/product">
                                    <div className={`${styles.ImgDiv}`}>
                                        <img src={element.img} /> 
                                    </div> 
                                    <p>{element.name}</p>
                                </a>
                            </div>
                        ))}
                     <div dangerouslySetInnerHTML={{ __html: about.about.text }} />
                        <div className={`${styles.Btn}`}>
                            <a href={about.about.buttons.pdf} className="btn btn-primary"> {about.about.buttons.name} </a>
                            <a href={about.about.buttons.link} className="btn btn-primary">{about.about.buttons.button_name}</a>
                        </div>
                </div>
            </div>

        </div>
    )
}