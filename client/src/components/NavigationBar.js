import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./NavigationBar.css";
import ModernLivingLogoVertical from "../images/ModernLivingLogoVertical.png"

export const NavigationBar = () => (
    <div>
        <div className=" row signup">
            <div className='col-s-8'>
            </div>
            <div className='col-s-4 ml-auto'>
                <Link to="/register"><Button variant="outline-light" style={{marginRight: "10px", borderRadius: "0px"}} size="sm">SIGN UP</Button></Link>
                <Link to="/landing"><Button variant="outline-light" style={{marginRight: "20px", borderRadius: "0px"}} size="sm">LOG IN</Button></Link>
            </div>
        </div>
        
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/"><img
                src={ModernLivingLogoVertical}
                width="150"
                className="d-inline-block align-top"
                alt="Modern Living logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/#about">ABOUT</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/#inspiration">INSPIRATION</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/#help">HELP</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/#started">GET STARTED</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/#testimonials">TESTIMONIALS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">CONTACT</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);