import React, { Component } from "react";
import InspirationItem from "./InspirationItem";
import "./Inspiration.css";
import axios from "axios";
import NavBar from '../../components/NavigationBar';
import { Container, Row } from "reactstrap";
import Divider from '@material-ui/core/Divider';


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

        axios.get("/api/unsplash", {
            params: {
                query: this.state.searchTerm
            }
        })
        .then(res => {
            this.setState({ designs: res.data.results });
        })
    }
    saveDesign(desc, url) {
        axios.post("/api/designs", { description: desc, url: url });
    }

    render() {
        return (
            <div className="Inspiration" style={{ backgroundColor: '#ede9e3' }}>
                <NavBar />
                <div style={{ backgroundColor: '#ede9e3' }}>
                    <Container fluid >
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
                                <button className="inspo-search-btn">SEARCH</button>
                            </form>
                        </div>
                    </Container>
                </div>

                {/* Results */}
                <Container className="inspiration-results" style={{ backgroundColor: '#ede9e3' }}>
                    <div className="row unsplash-image-grid d-flex">
                        {this.state.designs.map(d => (
                            <InspirationItem 
                                className="col-sm-4 col-md-4" 
                                key={d.id}
                                url={d.urls.full}
                                desc={d.alt_description}
                                saveDesign={this.saveDesign}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}


export default Inspiration;