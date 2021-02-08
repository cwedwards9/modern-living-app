import React, { Component } from "react";
import "./Inspiration.css";
import axios from "axios";
import NavBar from '../components/NavigationBar';
import { Container, Row } from "reactstrap";
import { Card, CardDeck, Button } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';

import Kitchen400 from "../images/Kitchen400x400.jpg";
import Bathroom400 from "../images/Bathroom400x400.jpg";
import Media400 from "../images/Media400x400.jpg";
import Living400 from "../images/Living400x400.jpg";

const cardRooms = [ 
    {id: 1, room: "KITCHEN", image: Kitchen400}, {id: 2, room: "BATHROOM", image: Bathroom400}, 
    {id: 3, room: "MEDIA ROOM", image: Media400}, {id: 4, room: "LIVING ROOM", image: Living400} 
];


class Inspiration extends Component {
    constructor(props) {
        super(props);
        this.state = { designs: [], searchTerm: "", isSaved: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveDesign = this.saveDesign.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    // Get the data from the Unsplash API and set the response as state
    handleSubmit(evt) {
        evt.preventDefault();

        axios.get("/unsplash", {
            params: {
                query: this.state.searchTerm
            }
        })
        .then(res => {
            console.log(res.data.results);
            this.setState({ designs: res.data.results });
        })
    }
    saveDesign(desc, url) {
        axios.post("/designs", { description: desc, url: url });
    }

    render() {
        return (
            <div className="Inspiration">
                <NavBar />
                <div>
                    <Container fluid style={{ backgroundColor: '#ede9e3' }}>
                        <div>
                            <Row className="inspiration-title">
                                <span className="inspiration-header1">SOME</span>
                            </Row>
                            <Row className="inspiration-title2">
                                <span className="inspiration-header2">INSPIRATION<Divider /></span>
                            </Row>
                        </div>

                        <div className="InspirationSearch">
                            <p>We want to assist you by finding the best designs for your next project.</p>
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                    name="searchTerm"
                                    value={this.state.searchTerm}
                                    type="text"
                                    onChange={this.handleChange}
                                />
                                <button>Search</button>
                            </form>
                        </div>
                    </Container>

                    <Container className="inspiration-cards">
                        <CardDeck className="d-flex">
                            {cardRooms.map(c => (
                                <Card className="d-flex align-items-stretch w-100">
                                    <Card.Img variant="top" src={c.image} />
                                    <Button className="inspiration-button">
                                        <Card.ImgOverlay className={`inspiration-img-overlay${c.id}`} >
                                            <Card.Title className="inspiration-card-title text-center"><span className="inspiration-title-text">{c.room}</span></Card.Title>
                                        </Card.ImgOverlay>
                                    </Button>
                                </Card>
                            ))}
                        </CardDeck>
                    </Container>
                </div>

                {/* Results */}
                <Container>
                    <div className="row unsplash-image-grid d-flex">
                    {this.state.designs.map(d => (
                        <div className="col-sm-3 col-md-3" key={d.id}>
                            <div className="inspiration-image-unsplash"><a href target="_self">
                                <img src={d.urls.full} alt={d.alt_description} className="img-responsive center-block" />
                                </a>
                                <button onClick={() => {this.saveDesign(d.alt_description, d.urls.full)} }><i class="far fa-heart fa-heart-inspiration"></i></button>
                            </div>
                        </div>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}


export default Inspiration;