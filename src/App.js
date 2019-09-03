import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <LinkContainer to="/shpe">
                <Navbar.Brand>
                    SHPE at KU
                </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" >
                    <LinkContainer to="/chapter">
                        <Navbar.Brand>
                            Chapter
                        </Navbar.Brand>
                    </LinkContainer>
                    
                    <LinkContainer to="/events">
                        <Navbar.Brand>
                            Events
                        </Navbar.Brand>
                    </LinkContainer>
                   

                    <LinkContainer to="/contact">
                        <Navbar.Brand> 
                            Contact Us 
                        </Navbar.Brand>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Routes/>

      </div>
    );
  }
}

export default App;

