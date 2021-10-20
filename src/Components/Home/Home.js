import React from 'react';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services/Services';
import Banner from './Banner';
import './Home.css';
import Info from './Info';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;