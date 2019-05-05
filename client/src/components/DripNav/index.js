import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class DripNav extends Component {

    render() {

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">JSDrip</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/log">Guest Log</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <NavDropdown title="More Info" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/VivaMango" target="_blank">Alex on GitHub</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.linkedin.com/in/alex-schwartz-05409790/" target="_blank">Alex on LinkedIn</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.youtube.com/channel/UCxVHCnBXwA2E1d_zHWB52eg" target="_blank">Alex on YouTube</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../../download/alex_schwartz_resume.pdf" target="_blank" download>Download Alex's Resume</NavDropdown.Item> 
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

    };

};

export default DripNav;