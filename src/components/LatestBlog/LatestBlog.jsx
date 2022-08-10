import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FakeBlog } from '../../FakeData/blog';
import Blog from '../../Pages/Home/Blog/Blog';

const LatestBlog = () => {
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
                    {
                        FakeBlog.map(blog => (
                            <Blog key={blog.id} blog={blog} />
                        ))
                    }
                </Row>

            </Container>
        </section>

    );
};

export default LatestBlog;