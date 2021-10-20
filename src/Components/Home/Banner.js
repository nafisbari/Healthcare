import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerTwo from './Images/banner1.jpg';
import bannerThree from './Images/2-banner.jpg';
import bannerOne from './Images/banner3.jpg';
import icon1 from './Images/icon-1.png';
import icon2 from './Images/icon-2.png';
import icon3 from './Images/icon-3.png';
import icon4 from './Images/icon-4.png';


const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100"
                            src={bannerTwo}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <div className="row-lg ">
                            <div className="col-lg-6 banner-text">
                                <div>
                                    <h1 className="  ">Providing the Best Medical Service</h1>
                                    <p className="lh-1">The health and well-being of our patients and their health care team will always be our priority.</p>
                                </div>
                                <div className="d-flex icons">
                                    <img src={icon1} alt="" />
                                    <img src={icon2} alt="" />
                                    <img src={icon3} alt="" />
                                    <img src={icon4} alt="" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100"
                            src={bannerOne}
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="row-lg ">
                            <div className="col-lg-6 banner-text">
                                <div>
                                    <h1 className="">Providing the Best Medical Service</h1>
                                    <p className="lh-1">The health and well-being of our patients and their health care team will always be our priority.</p>
                                    
                                </div>
                                <div className="d-flex icons">
                                    <img src={icon1} alt="" className="responsive" />
                                    <img src={icon2} alt="" className="responsive" />
                                    <img src={icon3} alt="" className="responsive" />
                                    <img src={icon4} alt="" className="responsive" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100 "
                            src={bannerThree}
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="row-lg ">
                            <div className="banner-text col-lg-6">
                                <div>
                                    <h1 className="  ">Providing the Best Medical Service</h1>
                                    <p className="lh-1">The health and well-being of our patients and their health care team will always be our priority.</p>
                                </div>
                                <div className="d-flex icons">
                                    <img src={icon1} alt="" />
                                    <img src={icon2} alt="" />
                                    <img src={icon3} alt="" />
                                    <img src={icon4} alt="" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Banner;