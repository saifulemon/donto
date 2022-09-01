import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appoinment.css';

const Appoinment = () => {
    return (
        <section className="appoinment-wrapper">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="section-title">
                            <h1 className="mt-5">Request Appointment</h1>
                        </div>
                        <div className="appoinment-form">
                            <form action="#" className="row">
                                <Col md={6} lg={6}>
                                    <input type="text" placeholder="Name" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="email" placeholder="Email" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="phone" placeholder="Phone" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="text" placeholder="Subject" />
                                </Col>
                                <Col md={12} lg={12}>
                                    <textarea name="Message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                </Col>
                                <Link to="/login"><button className="theme-btn btn-fill form-btn mt-5">Submit</button></Link>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;