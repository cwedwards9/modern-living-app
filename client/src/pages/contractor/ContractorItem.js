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
        axios.post("/api/contractors", this.props)
    }

    render() {
        const { name, phone, locationOne, locationTwo, rating, url } = this.props;
        return (
            <div className="ContractorItem">
                <div className="ContractorItem-heading">
                    <h2>{name}</h2>
                    {this.state.isSaved 
                        ? <button onClick={this.saveContractor}><i style={{color: "red"}} className='heart fas fa-heart'></i></button>
                        : <button onClick={this.saveContractor}><i className='heart fas fa-heart'></i></button>
                    }
                </div>
                <p>{phone}</p>
                <p>{locationOne}, {locationTwo}</p>
                <p><i className="fas fa-star"></i> {rating} / 5</p>
                <a href={url}>See Reviews</a>
            </div>
        ); 
    }
}


export default ContractorItem;