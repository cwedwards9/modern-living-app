import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import axios from "axios";
import "./NavigationBar.css";
import ModernLivingLogoVertical from "../images/ModernLivingLogoVertical.png"

class NavigationBar extends Component {
    constructor(props) {
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
        // log user out of session on the backend
        await axios.get("/api/logout"); 
        this.setState({ isAuth: false });
        sessionStorage.clear();
        window.location.replace("/");
    }
    render() {
        return (
            <nav>
                <div className="user-logs">
                    {this.state.isAuth
                        ? 
                        <Button onClick={this.handleLogout} variant="outline-light" style={{marginRight: "20px", borderRadius: "0px"}} size="sm">LOG OUT</Button>
                        : 
                        <div>
                            <Link to="/register" className="nav-user-link">SIGN UP</Link>
                            <Link to="/login" className="nav-user-link">LOG IN</Link>
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
                                <Nav.Item><Nav.Link href="/contact">CONTACT</Nav.Link></Nav.Item>
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
            </nav>
        )
    }
}

export default NavigationBar;