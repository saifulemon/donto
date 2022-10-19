import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import slider1 from '../../../Images/slider1.png';
import slider2 from '../../../Images/slider2.png';
import slider3 from '../../../Images/slider3.png';
import slider4 from '../../../Images/slider4.png';
import slider5 from '../../../Images/slider5.png';
import slider6 from '../../../Images/slider6.png';
import './Slick.css';

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
};

const Slick = () => {
    return (
        <section className="slider-wrapper">
            <Container>
                <Row>
                    <Col md={12}>
                        <Slider {...settings}>
                            <div className="single-brand-logo">
                                <img src={slider1} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={slider2} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={slider3} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={slider4} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={slider5} alt="" />
                            </div>
                            <div className="single-brand-logo">
                                <img src={slider6} alt="" />
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Slick;