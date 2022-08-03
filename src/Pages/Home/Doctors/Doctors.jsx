import { faFacebook, faLinkedin, faSkype, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import d1 from '../../../Images/d1.png';
import d2 from '../../../Images/d2.png';
import d3 from '../../../Images/d3.png';
import './Doctors.css';

const Doctors = () => {
    return (
        <section className="doctor-wrapper">
            <Container>
                <Row>
                <Col sm={12}>
                        <div className="section-title">
                            <h1 className="mb-5">Our Dentists</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-feature-box sigle-doctor">
                            <div className="doctors-profile">
                                <img src={d1} alt="" />
                            </div>
                            <div className="doctors-info">
                                <h3 className="mb-0"><a href=".#">Darry Milin</a></h3>
                                <span>Oral Surgeon</span>
                            </div>
                            <div className="doctors-social">
                                <a href=".#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-feature-box sigle-doctor">
                            <div className="doctors-profile">
                                <img src={d2} alt="" />
                            </div>
                            <div className="doctors-info">
                                <h3 className="mb-0"><a href=".#">Salman Ahmed</a></h3>
                                <span>Oral Surgeon</span>
                            </div>
                            <div className="doctors-social">
                                <a href=".#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={4} xs={12}>
                        <div className="single-feature-box sigle-doctor">
                            <div className="doctors-profile">
                                <img src={d3} alt="" />
                            </div>
                            <div className="doctors-info">
                                <h3 className="mb-0"><a href=".#">Santa Binte</a></h3>
                                <span>Oral Surgeon</span>
                            </div>
                            <div className="doctors-social">
                                <a href=".#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                <a href=".#"><FontAwesomeIcon icon={faSkype} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Doctors;