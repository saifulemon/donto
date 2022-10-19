import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import donto from '../../../Images/about-banner1.png';
import dontoAnimated from '../../../Images/cleaner.png';
import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src={donto} alt="donto" className="img-fluid donto" />
                            <img src={dontoAnimated} alt="donto" className="img-fluid animated dontoAnim" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start" data-aos="zoom-in">
                                <h1>Welcome to a Family</h1>
                                <p>Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing. Consectetur adipisicing elit. Quod ea, consequuntur itaque enim et expedita, optio omnis ipsa magni, perspiciatis totam ipsum! Voluptatibus, neque at.</p>
                                <a href='/page/about'>About Us</a>
                            </div>
                            <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <span>500</span>
                                    <span>+</span>
                                    <p>Happy Patients</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <span>88</span>
                                    <span>+</span>
                                    <p>Qualified Doctors</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <span>25</span>
                                    <span>+</span>
                                    <p>Years Experience</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
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