import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Safety.css';

const Safety = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Safety First</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Since 1998, Donto Dentistry has been proud to combine modern techniques and high-tech equipment. Dr. John Dae, Micha and his team deliver a personalized and comfortable dental care experience unlike any other Mason dentist.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img">
                                <a href="https://youtu.be/IVqKLxp6R4U"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>The Importance Of Complete Dentistry for your Health</h5>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className="vedio-item">
                            <div className="vedio-bg-img img2">
                                <a href="https://youtu.be/0s35QCFg7p0"><FontAwesomeIcon icon={faPlayCircle} className="vedio-play-btn" /></a>
                            </div>
                            <h5>Safety First with CT Scans!</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Safety;