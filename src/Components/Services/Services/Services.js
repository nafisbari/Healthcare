import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://nafisbari.github.io/api-healthcare/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className="container text-center lh-3 my-5 p-3 rounded">Our <span className="text-color">Departments</span></h1>

            <Row xs={1} md={2} lg={3} className="g-5 mx-3 px-5">

                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
                


            </Row>
        </div>
    );
};

export default Services;