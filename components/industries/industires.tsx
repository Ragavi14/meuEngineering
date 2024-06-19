import React, { useEffect, useState } from "react";
import styles from './industries.module.scss';
import { useRouter } from 'next/router'



export default function Industires (industries: any) {
    console.log('Indd==',industries);
    const router = useRouter()
    const [tab, setTab] = useState(router.query.t)
    const [aerospaceTab, setAerospaceTab] = useState('');
    const [automobileTab, setAutomobileTab] = useState('');
    const [defenceTab, setDefenceTab] = useState('');
    const [railwayTab, setRailwayTab] = useState('');

    const [aerospaceContent, setAerospaceContent] = useState('');
    const [automobileContent, setAutomobileContent] = useState('');
    const [defenceContent, setDefenceContent] = useState('');
    const [railwayContent, setRailwayContent] = useState('');
    useEffect(function(){
        if(tab == 'aerospace'){
            setAerospaceTab('active');
            setAerospaceContent('show active');
        }
        if(tab == 'automobile'){
            setAutomobileTab('active');
            setAutomobileContent('show active');
        }
        if(tab == 'defence'){
            setDefenceTab('active');
            setDefenceContent('show active');
        }
        if(tab == 'railway'){
            setRailwayTab('active');
            setRailwayContent('show active');
        }
    },[tab])

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imgSrc: any) => {
      setSelectedImage(imgSrc);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
    };
    return(
        <div className={styles.productContent}>
            <div className={`container`}>
                {industries.industries.industries.map((element: any, index: any)=>(
                <div className={`row justify-content-center align-items-center my-4`} key={index}>
                    {/* <div className={(index % 2) == 0 ?`row justify-content-center align-items-center`: `row justify-content-center align-items-center flex-row-reverse`}> */}
                        {/* <div className={`col-md-6 text-center`}>
                            <img src={element.img} />
                        </div> */}
                        <div>
                            <div className={styles.productContentBlock}>
                            <div dangerouslySetInnerHTML={{ __html: element.text }} />
                            </div>
                        </div>
                    {/* </div>   */}
                </div>
                ))}
            </div>
            <div className={`container`} id="industry">
              <div className={`row`}>
                  <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                          <button className={`nav-link ${automobileTab}`} id="automobile-tab" data-bs-toggle="tab" data-bs-target="#automobile"
                                  type="button" role="tab" aria-controls="home" aria-selected="true">Automobile
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className={`nav-link ${aerospaceTab}`} id="aerospace-tab" data-bs-toggle="tab" data-bs-target="#aerospace"
                                  type="button" role="tab" aria-controls="profile" aria-selected="false">Aerospace
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className={`nav-link ${defenceTab}`} id="defence-tab" data-bs-toggle="tab" data-bs-target="#defence"
                                  type="button" role="tab" aria-controls="contact" aria-selected="false">Defence
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className={`nav-link ${railwayTab}`} id="railway-tab" data-bs-toggle="tab" data-bs-target="#railway"
                                  type="button" role="tab" aria-controls="contact" aria-selected="false">Railway
                          </button>
                      </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                        <div className={`tab-pane fade ${automobileContent}`} id="automobile" role="tabpanel" aria-labelledby="automobile-tab">
                            {industries.industries.automobile.map((element: any, index: any)=>(
                                <div className={`row justify-content-center align-items-center my-4`} key={index}>
                                    <div className={(index % 2) == 0 ?`row justify-content-center align-items-center`: `row justify-content-center align-items-center flex-row-reverse`}>
                                        <div className={`col-md-6 text-center`}>
                                            <img src={element.img} />
                                        </div>
                                        <div className={`col-md-6`}>
                                            <div className={styles.productContentBlock}>
                                            <div dangerouslySetInnerHTML={{ __html: element.text }} />
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            ))}
                        </div>

                        <div className={`tab-pane fade ${aerospaceContent}`} id="aerospace" role="tabpanel" aria-labelledby="aerospace-tab">
                            {industries.industries.aerospace.map((element: any, index: any)=>(
                                <div className={`row justify-content-center align-items-center my-4`} key={index}>
                                    <div className={(index % 2) == 0 ?`row justify-content-center align-items-center`: `row justify-content-center align-items-center flex-row-reverse`}>
                                        <div className={`col-md-6 text-center`}>
                                            <img src={element.img} />
                                        </div>
                                        <div className={`col-md-6`}>
                                            <div className={styles.productContentBlock}>
                                            <div dangerouslySetInnerHTML={{ __html: element.text }} />
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            ))}
                        </div>

                        <div className={`tab-pane fade ${defenceContent}`} id="defence" role="tabpanel" aria-labelledby="defence-tab">
                            {industries.industries.defence.map((element: any, index: any)=>(
                                <div className={`row justify-content-center align-items-center my-4`} key={index}>
                                    <div className={(index % 2) == 0 ?`row justify-content-center align-items-center`: `row justify-content-center align-items-center flex-row-reverse`}>
                                        <div className={`col-md-6 text-center`}>
                                            <img src={element.img} />
                                        </div>
                                        <div className={`col-md-6`}>
                                            <div className={styles.productContentBlock}>
                                            <div dangerouslySetInnerHTML={{ __html: element.text }} />
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            ))}
                        </div>
                        <div className={`tab-pane fade ${railwayContent}`} id="railway" role="tabpanel" aria-labelledby="railway-tab">
                            {industries.industries.railway.map((element: any, index: any)=>(
                                <div className={`row justify-content-center align-items-center my-4`} key={index}>
                                    <div className={(index % 2) == 0 ?`row justify-content-center align-items-center`: `row justify-content-center align-items-center flex-row-reverse`}>
                                        <div className={`col-md-6 text-center`}>
                                            <img src={element.img} />
                                        </div>
                                        <div className={`col-md-6`}>
                                            <div className={styles.productContentBlock}>
                                            <div dangerouslySetInnerHTML={{ __html: element.text }} />
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            ))}
                        </div>
                        {/* <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                            <div className="modal-body text-center">
                                {selectedImage && <img src={selectedImage} alt="Selected" className={styles.bigImg} />}
                            </div>

                            </div>
                        </div>
                        </div> */}
                    </div>

              </div>
          </div>
        </div>
    )
}