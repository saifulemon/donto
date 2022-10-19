import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import './Services.css';

const Services = (props) => {

    const {title, description, link, img} = props.treatment;
    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <>
            <Col md={6} lg={6} xl={4} xs={12}>
                <div className="single-service-box" data-aos="flip-left">
                    <div className="service-icon">
                        <img src={img} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href=".#">{link}</a>
                </div>
            </Col>
        </>
    );
};

export default Services;