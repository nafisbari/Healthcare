import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="lightk" variant="dark light-bg" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavHashLink} to="/home#home">St. Bonaventure Hospital</Navbar.Brand>
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
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/services#services">Departments</Nav.Link>
                            <Nav.Link as={HashLink} to="/doctors#doctors">Doctors</Nav.Link>
                            <Nav.Link to="">DO It Later</Nav.Link>
                        </Nav>

                        {user?.email ?
                            <Button onClick={logOut} className="btn-color" variant=" mx-3">Logout <i className="fas fa-sign-in-alt" /></Button>
                            :
                            <Link to="/login"><Button className="btn-color" variant=" mx-3"><i className="fas fa-sign-in-alt" /> Login</Button></Link>}
                        <Navbar.Text >
                            {user?.email && <p className="fw-bold"> {user?.displayName}</p>}
                        </Navbar.Text>

                      

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;