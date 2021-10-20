import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Info from '../Home/Info';
import './About.css'
import img1 from './Images/uk1.png'
import img2 from './Images/uk7.jpg'


const About = () => {
    return (
        <div>
            <div className="bg-light">
                <div className="bg-dark bg-myImage-2" >
                    <div className="container mb-5 p-5">
                        <div className=" row align-items-center gx-5 px-lg-5 ">
                            <div className="col-lg-7 cols-12 gy-5 ">
                                <p className="fw-lighter text-start lh-1 text-light" id="header-top-p"> All Aspects of Medical Practice </p>
                                <h1 className="text-light text-start "> Welcome to  <span className="text-color"> St.Bonaventrure's</span></h1>
                                <p className="mt-3 w-100 text-start text-light fw-light text-justified">
                                    St. Bonaventrure Hospital has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure. With over 100 professionals actively participates in numerous initiatives aimed at creating sustainable change for patients!
                                </p>
                                <Link to="/home" size="lg " style={{ textDecoration: 'none' }}><Button className="my-5 d-block btn-color2 mx-5 outline-none " size="lg" >
                                    More Details
                                </Button></Link>
                            </div>
                        </div>

                    </div>
                    <Info></Info>
                </div>
                




                {/*  */}
                <div className="container my-3">
                    

                    <div className="bg-light row row-cols-1  align-items-center gx-5 my-5 gy-5 ">
                        <div className="container col-lg-6">
                            <h1 className="text-center text-color fw-bold">Our Goals</h1>
                            <p className="text-start">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires clinical and service excellence.</p>
                        </div>
                        <div className="container col-lg-6">
                            <img src={img1} className="rounded-3 w-75" alt="" />
                        </div>
                    </div>

                    <div className="bg-light row row-cols-1  align-items-center gx-5 my-5 gy-5 ">
                        <div className="container col-lg-6">
                            <img src={img2} className="w-75 rounded-3" alt="" />
                        </div>
                        <div className="container col-lg-6">
                            <h1 className="text-center text-color fw-bold">Our Commitments</h1>
                            <p className="text-start">
                                We conduct a range of tests to help us work out why you're not feeling well and determine the right treatment for you.
                                Our expert doctors, nurses and allied health professionals manage patients with a broad range of medical issues.
                                We offer a wide range of care and support to our patients, from diagnosis to treatment and rehabilitation.
                                !</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;