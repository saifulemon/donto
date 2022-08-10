import React from 'react';
import Feature from '../../../components/Feature/Feature';
import Service from '../../../components/Service/Service';
import About from '../About/About';
import Promo from '../Appoinment-promo/Promo';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Gallery from '../Gallery/Gallery';
import Slick from '../Slick/Slick';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    return (
        <div>
           <Banner />
           <Feature />
           <About />
           <Service />
           <Doctors />
           <Appoinment />
           <Gallery />
           <Testimonial />
           <Blog />
           <Promo />
           <Slick />
        </div>
    );
};

export default Home;