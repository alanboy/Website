import React from 'react';
import './NavBar.css';

// get ability to link from react router, styling components from boostrap
import Link from 'react-router-dom/Link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// use the logo
import logo from "../images/logo1.jpg";

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" variant="light">
                <Container>
                    <Navbar.Brand className="justify-content-start">
                        <Link to="/" id="logo">
                            DUBvelopers
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link>
                                <Link to="/Teams">
                                    Teams
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/projects">
                                    Projects
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/ContactUs">
                                    Contact Us
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;