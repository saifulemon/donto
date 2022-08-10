import React from 'react';
import { Col } from 'react-bootstrap';
import './Blog.css';

const Blog = (props) => {
    const {title, img, span1, span2} = props.blog;
    return (
        <Col md={6} lg={6} sm={12} xl={4}>
            <div className="single-blog-card">
                <div className="card-thumb">
                    <img src={img} alt="" />
                </div>
                <div className="card-content text-start">
                    <h3>{title}</h3>
                    <div className="card-meta d-flex justify-content-between">
                        <span>{span1}</span>
                        <span>{span2}</span>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Blog;