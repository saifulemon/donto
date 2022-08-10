import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FakeService } from '../../FakeData/Treatment';
import Services from '../../Pages/Home/Services/Services';

const Service = () => {
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
                    {
                        FakeService.map(treatment => (
                            <Services key={treatment.id} treatment={treatment} />
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Service;