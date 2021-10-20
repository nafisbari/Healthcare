import React from 'react';
import { Card, CardGroup, Col, Row, Button } from 'react-bootstrap';
import './info.css';
import contact from './Images/contact.png'
import timetable from './Images/timetable.png'
import hours from './Images/hours.png'

const Info = () => {
    return (
        <div className="container background">

            <Row lg={1}>
                <CardGroup>
                    <Card className="background-1">
                        <Row lg={1} className="">
                            <Col lg={4} className="pt-3 mt-1" >

                                <Card.Img variant="top d-none d-lg-block" src={contact} />


                            </Col>
                            <Col lg={8} className="py-3">
                                <Card.Body>
                                    <Card.Title className="text-start">Emergency Cases</Card.Title>
                                    <Card.Text className="text-start">
                                        Please feel free to contact us with any general and medical query.
                                        <p className="fs-4 mt-3 pt-1 "><i className="fas fa-phone-alt fs-4 text-color" /> 01061271234</p>
                                    </Card.Text>

                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="background-2">
                        <Row lg={1} className="mt-1">
                            <Col lg={4} className="mt-1 pt-3">

                                <Card.Img variant="top d-none d-lg-block" src={timetable} />


                            </Col>
                            <Col lg={8} className="py-3">
                                <Card.Body>
                                    <Card.Title className="text-start">Doctors Timetable</Card.Title>
                                    <Card.Text className="text-start">
                                        Qualified doctors available six days a week. Go to our timetable to make an appointment.

                                    </Card.Text>
                                    <Button className="btn-color2 " variant=" mx-3"> Read More <i className="fas fa-arrow-right" /> </Button>
                                </Card.Body>
                            </Col>

                        </Row>



                    </Card>
                    <Card className="background-3">
                        <Row lg={1} className="">
                            <Col lg={4} className="pt-3 mt-1">
                                <Card.Img variant="top d-none d-lg-block" src={hours} />

                            </Col>
                            <Col lg={8} className="py-3">
                                <Card.Body>
                                    <Card.Title className="text-start">Opening Hours</Card.Title>
                                    <Card.Text className="text-start">
                                        Monday to Friday: 8: 00 - 19: 00 hrs
                                        <hr />
                                        Saturday: 9: 00 - 22: 00 hrs
                                        <hr />
                                        Sunday: 10: 00 - 16: 00 hrs
                                    </Card.Text>
                                </Card.Body>
                            </Col>

                        </Row>

                    </Card>
                </CardGroup>
            </Row>

        </div>
    );
};

export default Info;