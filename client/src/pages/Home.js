import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Divider from '@material-ui/core/Divider';
import Button from 'react-bootstrap/Button';
import { NavigationBar } from '../components/NavigationBar';
import Testimony from './TestimonyCarousel';

import KitchenHome from "../images/KitchenHome.png";
import Kitchen from "../images/Kitchen.jpg";
import Bathroom from "../images/BathRoom.jpg";
import MediaRoom from "../images/MediaRoom.jpg";
import LivingRoom from "../images/LivingRoom.jpg";
import GetStarted from "../images/GetStarted.jpg";
import Contractor from "../images/Contractor.png";


class Home extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ede9e3' }}>
                <NavigationBar />

                {/* Header section */}
                <header id="home">
                    <div className="row banner">
                        <div className="banner-text">
                            <span className="banner1">Refresh </span>
                            <span className="banner2">YOUR HOME.</span>
                        </div>
                    </div>
                </header>
                {/* End Header */}

                {/* Home Remodeling section  */}
                <Container fluid style={{ backgroundColor: '#ede9e3' }}>
                    <div>
                        <Divider />
                            <Row className="home-title">
                                <span className="header1">HOME REMODELING </span>
                            </Row>
                            <Row className="home-title2">
                                <span className="header2">MADE SIMPLE</span>
                            </Row>
                        <Divider />
                    </div>
                </Container>
                {/* Home Remodeling Images section  */}
                <Container fluid style={{ backgroundColor: '#ede9e3' }}>
                    <Row>
                        <Col className="home">
                            <div className="home-details">KITCHEN</div>
                        </Col>
                        <Col className="home">
                            <div className="home-details">KITCHEN</div>
                        </Col>
                        <Col className="home">
                            <div className="home-details">KITCHEN</div>
                        </Col>
                        <Col className="home">
                            <div className="home-details">KITCHEN</div>
                        </Col>
                    </Row>
                </Container>


                {/* About section  */}
                <section id="about">
                    <div className="row align-items-center" style={{ backgroundColor: ' #ede9e3' }}>
                        <div className="col-lg-6 col-lg-push-6" >
                            <div className="about-image">
                                <img src={KitchenHome} className="img-fluid" alt="Modern kitchen" />
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ backgroundColor: '#7a9392' }}>
                            <div className="about-text-area">

                                <span className="header1" style={{ color: 'white' }}>OUR</span>
                                <span className="header2" style={{ color: 'white' }}> PURPOSE</span>
                                <p className="about_text">Looking to refresh your home? Need ideas on home improvement and don't know where to start? Modern Living is your go-to site for all of your home improvement needs. </p>
                                <Button variant="outline-light" style={{ marginRight: "10px", borderRadius: "0px" }} size="md">SIGN-UP</Button>{' '}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of about section */}

                {/* Inspriation section */}
                <Container fluid style={{ backgroundColor: '#ede9e3' }}>
                    <div>
                    <Divider />
                        <Row className="home-title">
                            <span className="header1" style={{ color: '#ae6e1c' }}>SOME </span>
                        </Row>
                        
                        <Row className="home-title2">
                            <span className="header2" style={{ color: '#ae6e1c' }}>INSPIRATION</span>
                        </Row>
                    </div>

                    {/* Inspiration Images */}
                    <div className="row align-items-center" style={{ backgroundColor: ' #ae6e1c' }}>
                        <div className="col-sm-3 px-0" >
                            <div className="inspo-image">
                            <img src={Kitchen} className="img-fluid" alt="Modern kitchen." />
                            </div>
                        </div>
                        <div className="col-sm-3 px-0" >
                            <h2 className="inspo-text1">KITCHEN</h2>
                        </div>
                        <div className="col-sm-3 px-0" >
                            <img src={Bathroom} className="img-fluid" alt="Modern kitchen" />
                        </div>
                        <div className="col-sm-3 px-0">
                            <h2 className="inspo-text1">BATHROOM</h2>
                        </div>
                    </div>
                    <div className="row align-items-center inspo-row2" >
                        <div className="col-sm-3 px-0" >
                            <h2 className="inspo-text2">MEDIA ROOM</h2>
                        </div>
                        <div className="col-sm-3 px-0" >
                            <div className="about-image">
                                <img src={MediaRoom} className="img-fluid" alt="Modern kitchen" />
                            </div>
                        </div>
                        <div className="col-sm-3 px-0" >
                        <h2 className="inspo-text2">LIVING ROOM</h2>
                        </div>
                        <div className="col-sm-3 px-0" >
                            <img src={LivingRoom} className="img-fluid" alt="Modern kitchen" />
                        </div>
                    </div>
                </Container>
                {/* End of Inspriation section */}
                

                {/* Get started section  */}
                <section id="about">
                    <div className="row align-items-center" >
                        <div className="col-lg-6" style={{ backgroundColor: '#626366' }}>
                            <div className="help-text-area">
                                <span className="header1" style={{ color: 'white' }}>GET</span>
                                <span className="header2" style={{ color: 'white' }}> STARTED</span>
                                <p className="help-text">Sometimes the hardest part of home remodeling is not knowing where to start. Who wants to run to Lowe's multiple times a say because you forgot that one thing?</p>
                                <p className="help-text">We have created a checklist to help you jumpstart your project and help you make the best decisions.</p>
                                <Button variant="outline-light" style={{ marginRight: "10px", borderRadius: "0px" }} size="md">SIGN-UP</Button>{' '}
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-push-6" >
                            <div className="about-image">
                                <img src={GetStarted} className="img-fluid" alt="Modern kitchen" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of get started section */}


                {/* Help section  */}
                <section className="help px-0">
                    <div className="row align-items-center help-bg px-0" >
                        <div className="col-lg-6 px-0" >
                            <img src={Contractor}  alt="Modern kitchen" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text-area">
                                <span className="header1" >NEED HELP?</span>
                                <p className="help-text" style={{ color: ' #626366' }}>Do you need help with interior design or on a plumbing project? Pick what you need help with and we provide you with the best contractors/designers available. </p>
                                <Button variant="outline-dark" style={{ marginRight: "10px", borderRadius: "0px" }} size="md">SIGN-UP</Button>{' '}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of help section */}


                {/* Testimonials section  */}
                <section className="testimonials test-bg">
                    <div>
                        <Row className="testimonials-title">
                            <span className="header1" style={{ color: 'white' }}>TESTIMONIALS <Divider /></span>
                        </Row>
                    </div>
                    <div className="row test-text" >
                        <div className="col-lg-7">
                            <Testimony />
                        </div>
                    </div>
                </section>
                {/* End of testimonials section */}
            </div>
        );
    }
}

export default Home;