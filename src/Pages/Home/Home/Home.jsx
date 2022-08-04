import React from 'react';
import About from '../About/About';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div>
           <Banner />
           <Features />
           <About />
           <Services />
           <Doctors />
           <Appoinment />
           <Gallery />
        </div>
    );
};

export default Home;