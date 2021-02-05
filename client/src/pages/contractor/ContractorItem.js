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
            <div className="ContractorItem col-lg-6 flex">
                <i className='yelp fab fa-yelp'></i>
                {this.state.isSaved 
                    ? <button onClick={this.saveContractor}><i style={{color: "red"}} className='heart fas fa-heart'></i></button>
                    : <button onClick={this.saveContractor}><i className='heart fas fa-heart'></i></button>
                }
                
                <br></br>
                <div className='text' > 
                    <h2 className='cp'>{name}</h2>
                    <p className='cp'>{phone}</p>
                    <p className='cp'>{locationOne}, {locationTwo}</p>
                    <i className='cp fas fa-star'>{rating} / 5 Stars </i>
                    <a className='cp' href={url}>See Reviews</a></div>
            </div>
        ); 
    }
}


export default ContractorItem;