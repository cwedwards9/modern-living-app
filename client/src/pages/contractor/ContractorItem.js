import React, { Component } from "react";
import axios from "axios";

class ContractorItem extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", phone: "", locationOne: "", locationTwo: "", rating: "", url: ""};
        this.saveContractor = this.saveContractor.bind(this);
    }
    // On click of the save button, set the state and send a POST request to '/contractors' with the state
    saveContractor() {
        const { name, phone, locationOne, locationTwo, rating, url } = this.props;
        this.setState({
            name: name,
            phone: phone,
            locationOne: locationOne,
            locationTwo: locationTwo,
            rating: rating,
            url: url
        }, () => {
            axios.post("/contractors", this.state)
        });
    }

    render() {
        const { name, phone, locationOne, locationTwo, rating, url } = this.props;
        return (
            <div className="ContractorItem" style={{marginBottom: "50px"}}>
                <button onClick={this.saveContractor}>Save</button>
                <h1>{name}</h1>
                <p>{phone}</p>
                <p>{locationOne}, {locationTwo}</p>
                <p>{rating} / 5 Stars</p>
                <a href={url}>See Reviews</a>
            </div>
        );
    }
}


export default ContractorItem;