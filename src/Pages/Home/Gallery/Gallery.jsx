import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import g1 from '../../../Images/g1.jpg';
import g2 from '../../../Images/g2.jpg';
import g3 from '../../../Images/g3.jpg';
import g4 from '../../../Images/g4.jpg';
import g5 from '../../../Images/g5.jpg';
import './Gallery.css';


const Gallery = () => {
    return (
        <section className="gallery-wrapper text-white">
            <Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <div className="section-title">
                            <h1>Our Gallery</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g1} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g3} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={8} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g4} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g5} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Gallery;