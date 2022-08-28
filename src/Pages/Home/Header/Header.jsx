import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();

    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            <Link to="/service" className='list-item text-decoration-none'>Service</Link>
                            <Link to="/dentist" className='list-item text-decoration-none'>Dentist</Link>
                            <Link to="/contact" className='list-item text-decoration-none'>Contact</Link>
                            {user.email 
                            ?
                            <button className="theme-btn btn-fill ml-5 rounded-pill">Log Out</button>
                            :
                            <Link to="/login" className='list-item text-decoration-none theme-btn btn-fill ml-5 rounded-pill'>Login</Link>
                            }
                            <Navbar.Text><span>{user.displayName}</span></Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;