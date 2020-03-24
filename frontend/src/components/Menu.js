import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/countries">Countries</Nav.Link>
                    <Nav.Link href="/">All World</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/help">Help</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
