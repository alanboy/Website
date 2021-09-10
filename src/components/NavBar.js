import React from 'react';
import './NavBar.css';

// get ability to link from react router, styling components from boostrap
import Link from 'react-router-dom/Link';
import { Navbar, Nav , Container } from 'react-bootstrap';

// use the logo
import logo from "../images/logo1.png";

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" variant="light">
                <Container>
                    <Navbar.Brand className="justify-content-start">
                    <Link to="/">
                        <img
                            alt=""
                            src={logo}
                            width="90"
                            height="90"
                        />{' '}
                        DUBvelopers
                    </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav>

                            <Nav.Link>
                                <Link to="/projects">
                                    Projects
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/teams">
                                    Teams
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="#contact">
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