import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import approved from '../../../src/Images/approved.jpg';

const Approved = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={12} lg={12} sm={12} className="text-center mb-5">
                    <div className="section-title mt-5">
                        <h1>Your Appointment has been</h1>
                    </div>
                </Col>
                <Col md={12} lg={12} sm={12}>
                    <img src={approved} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Approved;