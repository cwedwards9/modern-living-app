import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from '../../components/NavigationBar';
import "./Favorites.css";
import axios from "axios";

class DesignFavoritesList extends Component {
    constructor(props) {
        super(props);
        this.state = { designs: [] };
        this.deleteDesign = this.deleteDesign.bind(this);
    }
    // Send a GET request to '/designs' to get the designs in the db, save to state
    componentDidMount() {
        axios.get("/designs")
            .then(res => {
                this.setState({ designs: res.data });
            })
    }
    // Handle deletion of a design from the db, update the state to reflect the deletion
    deleteDesign(id) {
        axios.delete(`/designs/${id}`)
            .then(() => {
                this.setState({
                    designs: this.state.designs.filter(c => c._id !== id)
                });
            });
    }

    render() {
        return (
            <div className="DesignFavoritesPage">
                <NavBar />
                <div className="DesignFavoritesList">
                    <h1>Design Favorites page</h1>
                    <div className="favorites-links">
                        <Link to="/favorites/contractors" className="fav-link">Favorited Contractors</Link>
                    </div>
                    <div className="DesignFavorites">
                        {this.state.designs.map(d => (
                            <div className="DesignFavoriteItem" key={d._id}>
                                <img src={d.url} alt={d.description} />
                                <button onClick={() => this.deleteDesign(d._id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}


export default DesignFavoritesList;