import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContractorFavoritesItem from "./ContractorFavoritesItem";
import "./Favorites.css";
import axios from "axios";

class ContractorFavoritesList extends Component {
    constructor(props) {
        super(props);
        this.state = { contractors: [] };
        this.deleteContractor = this.deleteContractor.bind(this);
    }
    // Send a GET request to '/contractors' to get the contractors in the db, save to state
    componentDidMount() {
        axios.get("/contractors")
            .then(res => {
                this.setState({contractors: res.data});
            })
    }
    // Handle deletion of a contractor from the db, update the state to reflect the deletion
    deleteContractor(id) {
        axios.delete(`/contractors/${id}`)
            .then(() => {
                this.setState({
                    contractors: this.state.contractors.filter(c => c._id !== id)
                });
            });
    }

    render() {
        return (
            <div className="ContractorFavoritesList">
                <h1>Favorites page</h1>
                <div className="favorites-links">
                    <Link to="/favorites/designs" className="fav-link">Favorited Designs</Link>
                </div>
                {this.state.contractors.map(c => (
                    <ContractorFavoritesItem 
                        key={c._id}
                        id={c._id}
                        name={c.name}
                        phone={c.phone}
                        locationOne={c.locationOne} 
                        locationTwo={c.locationTwo}
                        rating={c.rating}
                        url={c.url}
                        delete={this.deleteContractor}
                    />
                ))}
            </div>
            
        );
    }
}


export default ContractorFavoritesList;