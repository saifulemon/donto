import React from 'react';
import About from '../About/About';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

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
           <Testimonial />
           <Blog />
        </div>
    );
};

export default Home;