import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#fff",
};

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>jUST EMMY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="mr-auto">
          <Nav>
            <NavLink
              to="/"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              activeStyle={activeStyle}
              className="nav-link"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
