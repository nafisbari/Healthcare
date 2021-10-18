import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerTwo from './Images/banner1.jpg';
import bannerThree from './Images/2-banner.jpg';
import bannerOne from './Images/banner3.jpg';
import icon1 from './Images/icon-1.png';
import icon2 from './Images/icon-2.png';
import icon3 from './Images/icon-3.png';
import icon4 from './Images/icon-4.png';
import './Home.css';


const Home = () => {
    return (
        <div>
            <h2>This is home for the night</h2>
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
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <i class="icon-blood-test" />
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
                                    <h1 className="  ">Providing the Best Medical Service</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <i class="icon-blood-test" />
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
                            className="d-block w-100 "
                            src={bannerThree}
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="row-lg ">
                            <div className="col-lg-6 banner-text">
                                <div>
                                    <h1 className="  ">Providing the Best Medical Service</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <i class="icon-blood-test" />
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

export default Home;