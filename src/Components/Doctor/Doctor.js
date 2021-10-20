import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './doctor.css'

const Doctor = (props) => {
    const { name, details, img, dept } = props.doc;
    return (
        <div>
            <Col>
                <Card border="dark" style={{ height: '650px' }} className="my-5 card-hover" >

                    <Card.Img variant="top" className="w-100 me-auto rounded" src={img} />

                    <div>
                        <Card.Body className="text-start">
                            <h2 className="text-color">{name}</h2>
                            <Card.Title>{dept}</Card.Title>

                            <p>{details}</p>

                            <Link to="/doctors"><Button className="btn-color1 " variant=" mx-3"> Read More <i className="fas fa-arrow-right" /> </Button></Link>

                           <p> <i className="fab fa-facebook fs-2 text-color" />
                             <i className="fab fa-twitter text-color fs-2" />
                             <i className="fas fa-phone-square-alt text-color fs-2" /></p>
                        </Card.Body>
                    </div>




                </Card>

            </Col>
        </div>
    );
};

export default Doctor;