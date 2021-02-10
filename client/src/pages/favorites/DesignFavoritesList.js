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
        axios.get("/api/designs")
            .then(res => {
                this.setState({ designs: res.data });
            })
    }
    // Handle deletion of a design from the db, update the state to reflect the deletion
    deleteDesign(id) {
        axios.delete(`/api/designs/${id}`)
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
                <div className='favorites-header'>
                    <div className="favorites-header-border">
                        <div className='favorites-header-container'>
                            <h1 >Favorite Desgins |</h1>
                            <Link to="/favorites/contractors" className="fav-link">See Favorited Contractors</Link>
                        </div>
                    </div>
                </div>

                <div className="DesignFavoritesList">
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