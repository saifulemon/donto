import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="head-bg">
            <Navbar className="navbar" sticky="top" expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            <Link to="/service" className='list-item text-decoration-none'>Service</Link>
                            <Link to="/dentist" className='list-item text-decoration-none'>Dentist</Link>
                            <Link to="/contact" className='list-item text-decoration-none'>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;