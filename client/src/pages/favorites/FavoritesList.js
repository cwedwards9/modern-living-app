import React, { Component } from "react";
import FavoritesItem from "./FavoritesItem";
import "./Favorites.css";
import axios from "axios";

class FavoritesList extends Component {
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
            <div className="FavoritesList">
                <h1>Favorites page</h1>
                {this.state.contractors.map(c => (
                    <FavoritesItem 
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


export default FavoritesList;