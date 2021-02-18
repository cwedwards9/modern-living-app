import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

import { Button } from 'react-bootstrap';
import Testimony from './TestimonyCarousel';
import Fade from 'react-reveal/Fade';
import "./Home.css";

import KitchenHome from "../images/KitchenHome.png";
import Kitchen from "../images/Kitchen.jpg";
import Bathroom from "../images/BathRoom.jpg";
import MediaRoom from "../images/MediaRoom.jpg";
import LivingRoom from "../images/LivingRoom.jpg";
import GetStarted from "../images/GetStarted.jpg";
import Contractor from "../images/Contractor.png";

import Kitchen400 from "../images/Kitchen400x400.jpg";
import Bathroom400 from "../images/Bathroom400x400.jpg";
import Media400 from "../images/Media400x400.jpg";
import Living400 from "../images/Living400x400.jpg";

const cardRooms = [ 
    {id: 1, room: "KITCHEN", image: Kitchen400}, {id: 2, room: "BATHROOM", image: Bathroom400}, 
    {id: 3, room: "MEDIA ROOM", image: Media400}, {id: 4, room: "LIVING ROOM", image: Living400} 
];


class Home extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ede9e3' }}>
                <NavigationBar />

                {/* Header section */}
                <Fade>
                <header className="home-banner">
                    <div className="banner">
                        <h1 className="banner1">Refresh <span className="banner2">YOUR HOME.</span></h1>
                        <h2 className="banner3">Find everything you need to get started on building your dream home.</h2>
                        <div className="button-header"><Link to="/register"><Button variant="outline-light" style={{ marginRight: "10px", marginTop: "10px", borderRadius: "0px", backgroundColor: "#7a9392" }} size="lg">SIGN-UP</Button></Link></div>
                    </div>
                </header>
                {/* End Header */}

                {/* Home Remodeling section  */}
                <div className="home-header">
                    <h2>HOME REMODELING<span style = {{display: "block"}}>MADE SIMPLE</span></h2>
                </div>

                {/* Home Remodeling Images section  */}
                <div className="home-cards">
                    {cardRooms.map(c => (
                        <div key={c.id} className="home-card-item">
                            <img className="remodeling-img" src={c.image} />
                            <div className="home-card-overlay">
                                <h3 className="card-main-title">{c.room}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End of Home Remodeling Images section  */}



                {/* About section  */}
                <section id="about" className="home-about-section">
                    <div className="about-overlap-image">
                        <img src={KitchenHome} alt="Kitchen with white cabinets and wood countertops." />
                    </div> 
                    <div className="home-about-text">
                        <h2 style={{ color: 'white' }}>OUR PURPOSE</h2>
                        <p>Looking to refresh your home? Need ideas on home improvement and don't know where to start? Modern Living is your go-to site for all of your home improvement needs. </p>
                        <Link to="/register" style={{color: "white", border: "1px solid white", padding: "0.75rem 0.5rem"}}>SIGN-UP</Link>
                    </div>
                </section>
                {/* End of about section */}

                
                {/* Inspriation section */}
                <section id="inspiration" className="inspiration-section">
                    <div className="home-header">
                        <h2 id="orange-text">SOME<span style = {{display: "block"}}>INSPIRATION</span></h2>
                    </div>

                    <div className="inspiration-squares">
                        <img src={Kitchen} alt="Modern kitchen." />
                        <div>
                            <h3>KITCHEN</h3>
                        </div>
                        <img src={Bathroom} alt="Modern kitchen." />
                        <div>
                            <h3>BATHROOM</h3>
                        </div>

                        <div>
                            <h3>MEDIA ROOM</h3>
                        </div>
                        <img src={MediaRoom} alt="Modern kitchen." />
                        <div>
                            <h3>LIVING</h3>
                        </div>
                        <img src={LivingRoom} alt="Modern kitchen." />
                    </div>
                </section>
                {/* End of Inspriation section */}
                

                {/* Get started section  */}
                <section id="started" className="get-started-section">
                    <div className="started-text-area">
                        <h1 className="contact-header1">GET STARTED</h1>
                        <p className="start-text">Sometimes the hardest part of home remodeling is not knowing where to start. Who wants to run to Lowe's multiple times a day because you forgot that one thing?</p>
                        <p className="start-text">We have created a checklist to help you jumpstart your project and help you make the best decisions.</p>
                        <Link to="/register" style={{color: "white", border: "1px solid white", padding: "0.75rem 0.5rem"}}>SIGN-UP</Link>
                    </div>
                    <div className="get-started-overlap-img">
                        <img src={GetStarted} alt="A wall with white rectangular tile being put on." />
                    </div>
                </section>
                {/* End of get started section */}


                {/* Help section  */}
                <section id="help" className="help-section help-bg">
                    <div className="handyman">
                        <img src={Contractor} alt="Handyman with a toolbelt" />
                    </div>
                    <div className="help-text-area">
                        <h2 className="help-header">NEED HELP?</h2>
                        <p className="help-text">Do you need help with interior design or on a plumbing project? Pick what you need help with and we provide you with the best contractors/designers available. </p>
                        <Link to="/register" style={{color: "#626366", border: "1px solid #626366", padding: "0.75rem 0.5rem"}}>SIGN-UP</Link>
                    </div>
                </section>
                {/* End of help section */}


                {/* Testimonials section  */}
                <section id="testimonials" className="testimonials test-bg">
                    <h2 className="testimonials-title">TESTIMONIALS</h2>
                    <div className="row test-text" >
                        <div className="col-lg-7">
                            <Testimony />
                        </div>
                        <div className="col-lg-5 px-0" >
                        </div>
                    </div>
                </section>
                {/* End of testimonials section */}


                {/* newsletters section  */}
                <section className="newsLetter-section">
                    <h2>STAY UP-TO DATE</h2>
                    <div>
                        <p>Stay up-to-date with the latetest trends and news from MODERN LIVING.</p>
                        <form className="newsLetter-form">
                            <input />
                            <button><i className="fas fa-envelope"></i></button>
                        </form>
                    </div>
                </section>
                {/* End of newsletters section */}
                </Fade>
            </div>
        );
    }
}

export default Home;