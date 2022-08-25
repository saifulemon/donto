import React from 'react';
import AboutService from '../../../components/AboutService/AboutService';
import LatestBlog from '../../../components/LatestBlog/LatestBlog';
import Appoinment from '../../Home/Appoinment/Appoinment';
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
          <LatestBlog />
          <Appoinment />
        </>
    );
};

export default About;