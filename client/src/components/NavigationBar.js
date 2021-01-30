import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "./NavigationBar.css";


export const NavigationBar = () => (
    <Navbar expand="lg">
        <Navbar.Brand href="/"><img
            src="/images/ModernLivingLogo650x650.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Modern Living logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

                <Nav.Item><Nav.Link href="/about">ABOUT</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/inspriation">INSPIRATION</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/help">HELP</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/testimonials">TESTIMONIALS</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">CONTACT</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

)