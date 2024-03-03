import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Logo from '../assets/images/logo-alt.png'

const MyNavbar = () => {
  return (
    <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={Logo} alt='cube logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="px-5 text-white" href="#home"><strong>Home</strong></Nav.Link>
            <Nav.Link className="px-5 text-white" href="#about"><strong>About</strong></Nav.Link>
            <Nav.Link className="px-5 text-white" href="#service"><strong>Service</strong></Nav.Link>
            <Nav.Link className="px-5 text-white" href="#portfolio"><strong>Portfolio</strong></Nav.Link>
            <Nav.Link className="px-5 text-white" href="#about"><strong>Blog</strong></Nav.Link>
            <Nav.Link className="px-5 text-white" href="#contact"><strong>Contact</strong></Nav.Link>
          </Nav>
          <Button variant="outline-light">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
