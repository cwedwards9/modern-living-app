import React, { Component } from 'react';
import axios from "axios";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {businesses: [], term: "", location: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // On change of a form input, set the state to be the input's value
    handleChange(evt) {
        evt.preventDefault();

        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    // On submit of the form, send a POST request to '/yelp' to get data from the API
    handleSubmit(evt) {
        evt.preventDefault();

        axios.post("/yelp", {
            term: this.state.term,
            location: this.state.location
        })
        .then(res => {
            this.setState({ businesses: res.data.jsonBody.businesses });
        });
    }
    render() {
        // Iterate through the businesses in the state and create an element for each result with the data
        const businesses = this.state.businesses.map(b => (
            <div key={b.id} style={{marginBottom: "50px"}}>
                <h1>{b.name}</h1>
                <p>{b.display_phone}</p>
                <p>{b.location.display_address[0]}, {b.location.display_address[1]}</p>
                <p>{b.rating} / 5 Stars</p>
                <a href={b.url}>See Reviews</a>
            </div>
        ));
        return (
            <div>
                <h1>Search for a Contractor / Designer</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="term">Search Term</label>
                    <select id="term" name="term" onChange={this.handleChange}>
                        <option value="default">--Please choose an option--</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Carpenter">Carpenter</option>
                        <option value="Drywaller">Drywaller</option>
                        <option value="Plastering">Plastering</option>
                        <option value="Painter">Painter</option>
                        <option value="Heating and Air-Conditioning">Heating and Air-Conditioning</option>
                        <option value="Roofer">Roofer</option>
                        <option value="Landscaper">Landscaper</option>
                        <option value="Concrete">Concrete</option>
                        <option value="Flooring">Flooring</option>
                        <option value="Glass">Glass</option>
                        <option value="General Contractor">General Contractor</option>
                        <option value="Designer">Designer</option>
                    </select>

                    <label htmlFor="location">Location (city and state)</label>
                    <input 
                        id="location"
                        value={this.state.location}
                        name="location"
                        onChange={this.handleChange}
                    />
                    <button>Get Businesses</button>
                </form>
                {businesses}
            </div>
        );
    }
}

export default Test;