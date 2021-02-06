import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import './Landing.css'

class Landing extends Component {
    render() {
        return (
            <div style={ {backgroundColor:"#ede9e3", paddingBottom:"10em",overflow:"hidden"}}>
                <div className='header'>
                    <h1 className='h1t' >Welcome,</h1>
                </div>
                <div> 
                    <Container>
                        <Row>
                            <Card.Link href="/inspiration" className='landC'> <i className='far fa-lightbulb light' ></i><h2 className='inspoText'>Inspiration </h2></Card.Link>
                            <Card.Link href="/starter" className='landC'> <i className='far fa-clipboard clip ' ></i><h2 className='guideText'> Starter Guides </h2></Card.Link>
                            <Card.Link href="/contractor" className='landC'> <i className='fas fa-hands-helping help' ></i><h2 className='findText'> Find Help </h2></Card.Link>
                        </Row>
                        <Row> 
                            <Card.Link href="/projects" className='landC'> <i className='fas fa-tasks check' ></i><h2 className='projectText'> Projects </h2></Card.Link>
                            <Card.Link href="/favorites/contractors" className='landC'> <i className='far fa-heart fav' ></i><h2 className='favText'> Favorites </h2></Card.Link>
                            <Card.Link href="/newproject" className='landC'> <i className='fas fa-plus plus' ></i><h2 className='newText'> New Project </h2></Card.Link>
                        </Row>
                    </Container> 
                </div>       
            </div>
        );
    }
}


export default Landing;