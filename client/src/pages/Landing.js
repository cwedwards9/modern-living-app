import React, { Component } from "react";
import NavBar from "../components/NavigationBar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './Landing.css'

class Landing extends Component {
    render() {
        return (
            <div style={ {backgroundColor:"#ede9e3", paddingBottom:"10em",overflow:"hidden"}}>
                <NavBar />
                
                <Row>
                    <div className="col-md-7 px-0">
                        <div className='header'>
                            <h1 className='h1t'>LET'S GET STARTED!</h1>
                        </div>
                    </div>
                </Row>
                <Container>
                    <CardDeck className="d-flex align-items-stretch" >
                        <Card className="card-landing  w-100 " >
                        <Card.Link href="/inspiration"><Card.Title className="card-landing-title text-center"><i className='far fa-lightbulb light' ></i><h3 style={{color: "white"}}>INSPIRATION </h3></Card.Title></Card.Link>
                        </Card>
                        <Card className="card-landing w-100 ">
                        <Card.Link href="/starter"><Card.Title className="card-landing-title text-center"><i className='far fa-clipboard clip ' ></i><h3 style={{color: "white"}}> STARTER GUIDES </h3></Card.Title></Card.Link>
                        </Card>
                        <Card className="card-landing w-100 ">
                        <Card.Link href="/contractor"><Card.Title className="card-landing-title text-center"><i class="fas fa-hands-helping helping"></i><h3 style={{color: "white"}}> FIND HELP </h3></Card.Title></Card.Link>
                        </Card>
                    </CardDeck>

                </Container>

                <Container>
                    <CardDeck className="d-flex align-items-stretch" >
                        <Card className="card-landing  w-100 " >
                        <Card.Link href="/projects"><Card.Title className="card-landing-title text-center"><i className='far fa-heart fav' ></i><h3 style={{color: "white"}}>FAVORITES </h3></Card.Title></Card.Link>
                        </Card>
                        <Card className="card-landing w-100 ">
                        <Card.Link href="/favorites/contractors"><Card.Title className="card-landing-title text-center"><i className='fas fa-tasks check' ></i><h3 style={{color: "white"}}> PROJECTS</h3></Card.Title></Card.Link>
                        </Card>
                        <Card className="card-landing w-100 ">
                        <Card.Link href="/newproject"><Card.Title className="card-landing-title text-center"><i className='fas fa-plus plus' ></i><h3 style={{color: "white"}}> NEW PROJECT</h3></Card.Title></Card.Link>
                        </Card>
                    </CardDeck>

                </Container>
            </div>
        );
    }
}


export default Landing;