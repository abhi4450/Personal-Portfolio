import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "rgba(237, 47, 22, 0.915)",
  };
  return (
    <div className="header">
      <Navbar expand="lg" fixed="top" className="navbar">
        <Container>
          <Navbar.Brand>Abhishek K Gupta</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Projects
              </NavLink>
              <NavLink
                to="/skills"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Skills
              </NavLink>
              <NavLink
                to="/About"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                About
              </NavLink>
              <NavLink
                to="/Contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
