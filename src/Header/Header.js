import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="lightk" variant="dark light-bg" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavHashLink} to="/home#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <div className="icon-color mx-1">
                        <i className="fab fa-facebook" />
                    </div>

                    <div className="icon-color mx-1" >
                        <i className="fab fa-instagram" />
                    </div>

                    <div className="icon-color mx-1">
                        <i className="fab fa-twitter" />
                    </div>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mx-3">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/about#about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="">DO It Later</Nav.Link>
                        </Nav>

                        <Navbar.Text >
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                        <Button className="btn-color" variant=" mx-3"><i class="fas fa-sign-in-alt" /> Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;