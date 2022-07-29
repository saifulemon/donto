import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import "@fontsource/josefin-sans";
import womanbrush from '../../../Images/woman-brush.c4158ac5.png';
import doctorfinding from '../../../Images/doctorfinding.c2532ac3.png';
import heroTeeth from '../../../Images/hero-theeth.54c2c4e9.png';

const Banner = () => {
    return (
        <div>
            <section className="single-hero-slide text-white">
                <Container>
                    <Row>
                        <Col md={6} sm={12}>

                            <div className="hero-slide-left justify-content-end align-items-center text-start">
                                <h2>Better Life Through</h2>
                                <h1>Better Dentistry</h1>
                                <p>Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
                                <button className="theme-btn btn-fill">Appoinment</button>
                                <button className='theme-btn bth-blank'>Learn More</button>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="hero-slide-right text-start">
                                <div className="animate-img">
                                    <img src={womanbrush} alt="" className="img-fluid aimg1" />
                                    <img src={doctorfinding} alt="" className="img-fluid aimg2" />
                                </div>
                                <img src={heroTeeth} alt="" className="img-fluid"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Banner;