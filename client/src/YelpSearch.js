import React, { Component } from 'react';
import axios from "axios";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {businesses: [], term: "", location: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        evt.preventDefault();

        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        
        axios.post("/yelp", {
            term: this.state.term,
            location: this.state.location
        })
        .then(res => {
            console.log(res.data.jsonBody.businesses);
            this.setState({businesses: res.data.jsonBody.businesses});
        });
    }
    render() {
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
                    <input 
                        id="term"
                        value={this.state.term}
                        name="term"
                        onChange={this.handleChange}
                    />
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