import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blog1 from '../../../Images/blog1.jpg';
import blog2 from '../../../Images/blog2.jpg';
import blog3 from '../../../Images/blog3.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog-wrapper pt-0">
            <Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <div className="section-title">
                            <h1>Latest Blog</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6} sm={12} xl={4}>
                        <div className="single-blog-card">
                            <div className="card-thumb">
                                <img src={blog1} alt="" />
                            </div>
                            <div className="card-content text-start">
                                <h3>Maximize Your 2019 Dental Insurance with lots of Benefits</h3>
                                <div className="card-meta d-flex justify-content-between">
                                    <span>Post by: Salman</span>
                                    <span>12 Oct, 2019</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12} xl={4}>
                        <div className="single-blog-card">
                            <div className="card-thumb">
                                <img src={blog2} alt="" />
                            </div>
                            <div className="card-content text-start">
                                <h3>Are Your Teeth Making You Old? Are You Surprised!</h3>
                                <div className="card-meta d-flex justify-content-between">
                                    <span>Post by: admin</span>
                                    <span>14 Oct, 2019</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12} xl={4}>
                        <div className="single-blog-card">
                            <div className="card-thumb">
                                <img src={blog3} alt="" />
                            </div>
                            <div className="card-content text-start">
                                <h3>Dental Implants: The Next Best Thing to Get Natural Teeth</h3>
                                <div className="card-meta d-flex justify-content-between">
                                    <span>Post by: Salman</span>
                                    <span>10 Jan, 2020</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blog;