import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import details from './Images/details.jpg';


const More = (props) => {
    const { moreId, } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://nafisbari.github.io/api-healthcare/data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const details = service.filter(details => (details.id) == (moreId));
    console.log(details[0]);

    return (
        <div>
            <img src={details} alt="" />
            <div className="bg-image">
                <img src={details[0]?.icon} alt="" />
                <h2>
                    {details[0]?.title}
                </h2>
                <p>{details[0]?.description1}</p>
                <p>{details[0]?.description2}</p>
                <ul className="list-unstyled">
                            <li><i className="fas fa-arrow-right text-color" /> {details[0]?.li1}</li>
                            <li><i className="fas fa-arrow-right text-color" /> {details[0]?.li2}</li>
                            <li><i className="fas fa-arrow-right text-color" /> {details[0]?.li3}</li>
                        </ul>

            </div>

        </div>
    );
};

export default More;