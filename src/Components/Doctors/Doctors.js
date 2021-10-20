import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctor, setDoc] = useState([])
    useEffect(() => {
        fetch('https://nafisbari.github.io/doc-data/data.json')
            .then(res => res.json())
            .then(data => {
                setDoc(data);
                console.log(data);
            })
    })
    return (
        <div className="container">
            <div>
                <h1 className="container text-center lh-3 my-5 p-3 rounded text-color">Meet Our Doctors</h1>
                <p className="">Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries</p>
            </div>
            <Row xs={1} md={2} lg={3} className="g-5 mx-3 px-5">

                {doctor.map(doc => <Doctor
                    key={doc.id}
                    doc={doc}
                ></Doctor>)}
            </Row>
        </div>

    );
};

export default Doctors;