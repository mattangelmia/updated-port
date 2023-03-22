import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link, useNavigate, BrowserRouter, Router } from "react-router-dom";
import { NavLink } from "react-router-dom";




export default function Header() {
    function goprojects() {
        navigate("projects");
      }
      function goHome(){
        navigate("/");

      }
      function goToResume(){
        navigate("resume");

      }
    let navigate = useNavigate();
  return (
    <div>

      
            <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link onClick={goHome}>Home</Nav.Link>
            <Nav.Link href="projects" onClick={goprojects}>Projects</Nav.Link>
            <Nav.Link href="resume" onClick={goToResume}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}
