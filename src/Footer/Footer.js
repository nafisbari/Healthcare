import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import appstore from './images/androidget.png';
import playstore from './images/appstore.png';

const Footer = () => {
    return (
        <div className="text-light bg-dark">
                <div className="container p-3">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12 p-5">
                            <h2>Get The App</h2>
                            <img className="border rounded-3 w-50 m-2 " src={playstore} alt="" />
                            <br />
                            <img className="border rounded-3 w-50 m-2 " src={appstore} alt="" />
                        </div>
                        <div className="col-lg-8 col-12 align-items-center">
                            <ul className="text-end">
                                <li className="d-inline-block p-3"><p >Download Now</p></li>

                                <li className="d-inline-block p-3"><p >License</p></li>
                            </ul>
                            <br />
                            <ul className="text-end">
                                <li className="d-md-inline-block d-block p-3 "><p>Home</p></li>
                                <li className="d-md-inline-block d-block p-3 "><p>Services</p></li>
                                <li className="d-md-inline-block d-block p-3 "><p>About</p></li>
                                <li className="d-md-inline-block d-block p-3 "><p>Help</p></li>
                                <li className="d-md-inline-block d-block p-3 "><p>Privacy Policy</p></li>
                            </ul>
                        </div>

                    </div>
                    <p className=" text-center px-5 ">© 2021 Chef's Kitchen Academy. All rights reserved</p>
                </div>
        </div>

    );
};

export default Footer;