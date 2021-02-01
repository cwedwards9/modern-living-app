import React, { Component } from "react";
import axios from "axios";

class ContractorItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isSaved: false };
        this.saveContractor = this.saveContractor.bind(this);
    }
    // On click of the save button, send a POST request to '/contractors' with the current props
    saveContractor() {
        this.setState({ isSaved: true });
        axios.post("/contractors", this.props)
    }

    render() {
        const { name, phone, locationOne, locationTwo, rating, url } = this.props;
        return (
            <div className="ContractorItem" style={{marginBottom: "50px"}}>
                {this.state.isSaved 
                    ? <button onClick={this.saveContractor}><i className="fas fa-check"></i> Saved</button>
                    : <button onClick={this.saveContractor}>Save</button>
                }
                
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