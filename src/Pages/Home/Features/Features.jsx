import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import './Features.css';

const Features = (props) => {

    const { title, description, img } = props.feature;
    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);

    return (
        <Col md={6} xl={4} lg={6} sm={12}>
            <div className="single-feature-box" data-aos="fade-right">
                <div className="icon-box">
                    <img src={img} alt="" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Col>
    );
};

export default Features;
