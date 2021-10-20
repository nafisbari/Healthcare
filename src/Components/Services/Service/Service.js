import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, title, li1, li2, li3, icon, description1 } = props.service;

    return (
        <div>
            <Col>
                <Card border="dark" style={{ height: '530px' }} className="p-3 my-5" >
                    <div >
                        <Card.Img variant="top" className="w-50 me-auto" src={icon} />
                    </div>
                    <Card.Body className="text-start">
                        <Card.Title>{title}</Card.Title>
                        <p >{description1}</p>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-arrow-right text-color" /> {li1}</li>
                            <li><i className="fas fa-arrow-right text-color" /> {li2}</li>
                            <li><i className="fas fa-arrow-right text-color" /> {li3}</li>
                        </ul>
                        <Link to={`/more/${id}`}><Button className="btn-color1 " variant=" mx-3"> Read More <i className="fas fa-arrow-right" /> </Button></Link>
                        

                    </Card.Body>
                </Card>

            </Col>
        </div>
    );
};

export default Service;