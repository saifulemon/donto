import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import dentistry from '../../../Images/dentistry.svg';
import dictionary from '../../../Images/dictionary.svg';
import general from '../../../Images/general.svg';
import implants from '../../../Images/implants.svg';
import oral from '../../../Images/oral.svg';
import selant from '../../../Images/selant.svg';
import './Services.css';

const Services = () => {
    return (
        <section className="service-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                            <h1>Treatments</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-service-box">
                            <div className="service-icon">
                                <img src={dentistry} alt="" />
                            </div>
                            <h3>Complete Dentistry</h3>
                            <p>Lorem Ipsum is simply dummy text of the printings and type and setting for content</p>
                            <a href=".#">Read More</a>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-service-box">
                            <div className="service-icon">
                                <img src={selant} alt="" />
                            </div>
                            <h3>Dental Selants</h3>
                            <p>Lorem Ipsum is simply dummy text of the printings and type and setting for content</p>
                            <a href=".#">Read More</a>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-service-box">
                            <div className="service-icon">
                                <img src={dictionary} alt="" />
                            </div>
                            <h3>Dental Dictionary</h3>
                            <p>Lorem Ipsum is simply dummy text of the printings and type and setting for content</p>
                            <a href=".#">Read More</a>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-service-box">
                            <div className="service-icon">
                                <img src={implants} alt="" />
                            </div>
                            <h3>Complete Dentistry</h3>
                            <p>Lorem Ipsum is simply dummy text of the printings and type and setting for content</p>
                            <a href=".#">Read More</a>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-service-box">
                            <div className="service-icon">
                                <img src={oral} alt="" />
                            </div>
                            <h3>Complete Dentistry</h3>
                            <p>Lorem Ipsum is simply dummy text of the printings and type and setting for content</p>
                            <a href=".#">Read More</a>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-service-box">
                            <div className="service-icon">
                                <img src={general} alt="" />
                            </div>
                            <h3>Complete Dentistry</h3>
                            <p>Lorem Ipsum is simply dummy text of the printings and type and setting for content</p>
                            <a href=".#">Read More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;