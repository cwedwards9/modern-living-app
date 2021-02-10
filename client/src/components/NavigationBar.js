import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import axios from "axios";
import "./NavigationBar.css";
import ModernLivingLogoVertical from "../images/ModernLivingLogoVertical.png"

class NavigationBar extends Component {
    constructor() {
        super();
        this.state = { isAuth: false };
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount() {
        const user = sessionStorage.getItem("user");
        if(user) {
            this.setState({ isAuth: true });
        }
        else {
            this.setState({ isAuth: false });
        }
    }
    async handleLogout() {
        await axios.get("/api/logout"); 
        this.setState({ isAuth: false });
        sessionStorage.clear();
        window.location.replace("/");
    }
    render() {
        return (
            <div>
                <div className=" row signup">
                    <div className='col-s-8'>
                    </div>
                    {this.state.isAuth
                        ? 
                        <div className='col-s-4 ml-auto'>
                            <Button onClick={this.handleLogout} variant="outline-light" style={{marginRight: "20px", borderRadius: "0px"}} size="sm">LOG OUT</Button>
                        </div>
                        : 
                        <div className='col-s-4 ml-auto'>
                            <Link to="/register"><Button variant="outline-light" style={{marginRight: "10px", borderRadius: "0px"}} size="sm">SIGN UP</Button></Link>
                            <Link to="/login"><Button variant="outline-light" style={{marginRight: "20px", borderRadius: "0px"}} size="sm">LOG IN</Button></Link>
                        </div>
                    }
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
                    {this.state.isAuth
                        ?
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Item><Nav.Link href="/landing">PROFILE</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link href="/#contract">CONTACT</Nav.Link></Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                        :
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
                    }
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;