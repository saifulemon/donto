import React from 'react';
import { Col } from 'react-bootstrap';

const Services = (props) => {

    const {title, description, img} = props.treatment;
    return (
        <>
            <Col md={6} lg={6} xl={4} xs={12} >
                <div className="single-service-box focus">
                    <div className="service-icon">
                        <img src={img} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </Col>
        </>
    );
};

export default Services;