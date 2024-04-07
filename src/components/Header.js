import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
  return (
    <header>
      <Navbar
        expand="lg"
        bg="light"
        data-bs-theme=""
        variant="dark"
        collapseOnSelect
        className="bg-dark"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Think Ai</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/team">
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/events">
                <Nav.Link>Events</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/gallery">
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <LinkContainer to="">
                  <Nav.Link className="header-dropdown">Login</Nav.Link>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
