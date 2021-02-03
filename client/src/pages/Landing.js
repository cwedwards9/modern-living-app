import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import './Landing.css'

class Landing extends Component {
    render() {
        return (
            <Container>
                <style>{'body { background-color: #ede9e3; }'}</style>  
                <h1  className='header'>Welcome</h1>
                <Row >
                    <Link className='card' to="/inspiration">inspiration</Link> 
                    <Link className='card' to="/starter">starter guides</Link>
                    <Link className='card' to="/yelp">Find Help</Link>
   
                </Row>
                <Row>
                    <Link className='card' to="/projects">projects</Link>
                    <Link className='card' to="/favorites">favorites</Link>
                    <Link className='card' to="/newproject">Start a New Project</Link>
                </Row>
            </Container> 
        );
    }
}


export default Landing;