import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FakeDoctors } from '../../FakeData/Dentist';
import Doctors from '../../Pages/Home/Doctors/Doctors';

const Dentist = () => {
    return (
        <section className="doctor-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                            <h1 className="mb-5 mb-sm-dent">Our Dentists</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        FakeDoctors.map(dentist => (
                            <Doctors key={dentist.id} dentist={dentist} />
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;