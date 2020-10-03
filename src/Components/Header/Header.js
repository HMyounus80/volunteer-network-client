import React from 'react';
import './Header.css';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'


const Header = () => {
  
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
            <Link to="/home">
                <Navbar.Brand>
                    <img className="w-25" src={logo} alt="Logo" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav className="nav-links">
                    <Link className="single-nav-link" to="/home">Home</Link>
                    <Link className="single-nav-link" to="/donation">Donation</Link>
                    <Link className="single-nav-link" to="/events">Events</Link>
                    <Link className="single-nav-link" to="/blog">Blog</Link>
                    <Link  to="/register"><Button className="mr-3" variant="primary">Register</Button></Link>
                    <Link to="/admin"><Button className="mr-3" variant="dark">Admin</Button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )  
};

export default Header;