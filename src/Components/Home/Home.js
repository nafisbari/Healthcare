import React from 'react';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services/Services';
import Banner from './Banner';
import GroupInfo from './GroupInfo';

import './Home.css';
import Info from './Info';
import Intouch from './Intouch';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <GroupInfo></GroupInfo>
            <Doctors></Doctors>
            <Intouch></Intouch>

        </div>
    );
};

export default Home;