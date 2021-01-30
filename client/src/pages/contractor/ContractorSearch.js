import React, { Component } from 'react';
import ContractorItem from "./ContractorItem";
import axios from "axios";

class ContractorSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {businesses: [], term: "", location: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // On change of a form input, set the state to be the input's value
    handleChange(evt) {
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
        return (
            <main className="ContractorSearch">
                <h1>Find a Professional</h1>
                <p>We are here to help you find the best of the best. Search for the project you need help with to see a list of the highest rated providers in your area.</p>
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
                
                <section className="ContractorList">
                    {this.state.businesses.map(b => (
                        <ContractorItem 
                            key={b.id}
                            name={b.name}
                            phone={b.display_phone}
                            locationOne={b.location.display_address[0]}
                            locationTwo={b.location.display_address[1]}
                            rating={b.rating}
                            url={b.url}
                        />
                    ))}
                </section>
            </main>
        );
    }
}

export default ContractorSearch;