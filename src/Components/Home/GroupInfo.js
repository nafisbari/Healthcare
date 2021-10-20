import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import it1 from './Images/s1.png'
import im1 from './Images/31.jpg'
import im2 from './Images/32.jpg'
import im3 from './Images/33.jpg'
import im4 from './Images/34.jpg'
import im5 from './Images/35.jpg'
import im6 from './Images/36.jpg'
import im7 from './Images/37.jpg'
import im8 from './Images/38.jpg'
import i1 from './Images/1.png'
import i2 from './Images/2.png'
import i3 from './Images/3.png'
import i4 from './Images/4.png'
import i5 from './Images/5.png'
import i6 from './Images/6.png'
import i7 from './Images/7.png'
import i8 from './Images/8.png'
import './GroupInfo.css'

const GroupInfo = () => {
    return (
        <div className="back-color p-5">

            <div className="container my-5">
                <div className="w-75 mx-3 my-5 p-3">
                    <h1 className="text-light text-start my-5" >St. Bonaventure Has Touched The Lives Of Patients and Providing Care for The Sickest In Our Community.</h1>
                </div>
                <div>
                    <Row xs={1} md={4}>
                        <Col lg={2}></Col>
                        <Col lg={1}><img src={it1} className="w-75 d-none d-md-block mt-3" alt="" /></Col>

                        <Col lg={8} className="p-3 text-start mb-5">
                            <p className="text-color">Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure. With over 100 professionals actively participates in numerous initiatives aimed at creating sustainable change for patients! </p>
                        </Col>
                    </Row>
                </div>
                <Row
                    xs={1} md={4} className="g-4">

                    <Col>
                        <Card classname="card">
                            <Card.Img variant="top w-50 mx-5 " src={i1} />
                            <Card.Img variant="top " className="img-hover" src={im1} />
                            <Card.Body>
                                <Card.Title>Medical Advices & Check Ups</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card classname="card">
                            <Card.Img variant="top w-50 mx-5 " src={i2} />
                            <Card.Img variant="top " className="img-hover" src={im2} />
                            <Card.Body>
                                <Card.Title>Trusted Medical Treatment</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card classname="card">
                            <Card.Img variant="top w-50 mx-5 " src={i3} />
                            <Card.Img variant="top " className="img-hover" src={im3} />
                            <Card.Body>
                                <Card.Title>Emergency Help Available 24x7</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card classname="card">
                            <Card.Img variant="top w-50 mx-5 " src={i4} />
                            <Card.Img variant="top " className="img-hover" src={im4} />
                            <Card.Body>
                                <Card.Title>Medical Research Professionals</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card classname="card">
                            <Card.Img variant="top w-50 mx-5 " src={i5} />
                            <Card.Img variant="top " className="img-hover" src={im5} />
                            <Card.Body>
                                <Card.Title>Qualified Doctors</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card classname="card">
                            <Card.Img variant="top w-50 mx-5 " src={i6} />
                            <Card.Img variant="top " className="img-hover" src={im6} />
                            <Card.Body>
                                <Card.Title>Cutting Edge Facility</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card classname="card">
                            <Card.Img variant="top w-50 mx-5 " src={i7} />
                            <Card.Img variant="top " className="img-hover" src={im7} />
                            <Card.Body>
                                <Card.Title>Affordable Prices</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card classname="card">
                            <Card.Img variant="top w-50 mx-5 " src={i8} />
                            <Card.Img variant="top " className="img-hover" src={im8} />
                            <Card.Body>
                                <Card.Title>Quality Care All</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
            <div className="w-50 mx-auto text-center pb-5 pt-3">
                <p className="text-light">We hope you will allow us to care for you and strive to be the first and best choice for healthcare. <span className="text-color">Contact Us For More Information <i class="fas fa-arrow-right"></i></span> </p>
            </div>
        </div>
    );
};

export default GroupInfo;