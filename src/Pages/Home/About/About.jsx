import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import donto from '../../../Images/about-banner1.png';
import dontoAnimated from '../../../Images/cleaner.png';
import './About.css';

const About = () => {
    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src={donto} alt="donto" className="img-fluid donto" />
                            <img src={dontoAnimated} alt="donto" className="img-fluid animated" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start">
                                <h1>Welcome to a Family</h1>
                                <p>Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing. Consectetur adipisicing elit. Quod ea, consequuntur itaque enim et expedita, optio omnis ipsa magni, perspiciatis totam ipsum! Voluptatibus, neque at.</p>
                                <a href='/page/about'>About Us</a>
                            </div>
                            <div className="fun-fact-sec">
                                <div className="single-fun">
                                    <span>500</span>
                                    <span>+</span>
                                    <p>Happy Patients</p>
                                </div>
                                <div className="single-fun sp-fun">
                                    <span>88</span>
                                    <span>+</span>
                                    <p>Qualified Doctors</p>
                                </div>
                                <div className="single-fun">
                                    <span>25</span>
                                    <span>+</span>
                                    <p>Years Experience</p>
                                </div>
                                <div className="single-fun sp-fun">
                                    <span>50</span>
                                    <span>+</span>
                                    <p>Dental Awards</p>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;