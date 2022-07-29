import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="head-bg">
            <Navbar className="navbar" sticky="top" expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='list-item'>Home</Nav.Link>
                            <Nav.Link href="#about" className='list-item'>About</Nav.Link>
                            <Nav.Link href="#service" className='list-item'>Service</Nav.Link>
                            <Nav.Link href="#dentist" className='list-item'>Dentist</Nav.Link>
                            <Nav.Link href="#contact" className='list-item'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;