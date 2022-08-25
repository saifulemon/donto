import React from 'react';
import AboutService from '../../../components/AboutService/AboutService';
import Content from '../AboutContent/Content';
import Achivement from '../Achivement/Achivement';
import Banner from '../Banner/Banner';
import Dentist from '../ExpertDentist/Dentist';

const About = () => {
    return (
        <>
          <Banner />
          <Content /> 
          <AboutService />
          <Dentist />
          <Achivement />
        </>
    );
};

export default About;