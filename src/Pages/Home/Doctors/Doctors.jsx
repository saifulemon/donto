import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import './Doctors.css';

const Doctors = (props) => {
    const {name, status, img} = props.dentist;
    return (
        <Col md={6} lg={6} xl={4} xs={12}>
            <div className="single-feature-box sigle-doctor">
                <div className="doctors-profile">
                    <img src={img} alt="" />
                </div>
                <div className="doctors-info">
                    <h3 className="mb-0"><a href=".#">{name}</a></h3>
                    <span>{status}</span>
                </div>
                <div className="doctors-social">
                    <a href=".#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href=".#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href=".#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href=".#"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </Col>
    );
};

export default Doctors;