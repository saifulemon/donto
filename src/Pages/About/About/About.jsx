import React from 'react';
import AboutService from '../../../components/AboutService/AboutService';
import Content from '../AboutContent/Content';
import Banner from '../Banner/Banner';

const About = () => {
    return (
        <>
          <Banner />
          <Content /> 
          <AboutService />
        </>
    );
};

export default About;