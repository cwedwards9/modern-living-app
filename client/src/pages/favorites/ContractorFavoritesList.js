import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContractorFavoritesItem from "./ContractorFavoritesItem";
import NavBar from '../../components/NavigationBar';
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
        axios.get("/api/contractors")
            .then(res => {
                this.setState({contractors: res.data});
            })
    }
    // Handle deletion of a contractor from the db, update the state to reflect the deletion
    deleteContractor(id) {
        axios.delete(`/api/contractors/${id}`)
            .then(() => {
                this.setState({
                    contractors: this.state.contractors.filter(c => c._id !== id)
                });
            });
    }

    render() {
        return (
            <main className="ContractorFavoritesPage">
                <NavBar />
                <header className='favorites-header'>
                    <div className='favorites-header-container'>
                        <h1 >Favorite Contractors |</h1>
                        <Link to="/favorites/designs" className="fav-link">See Favorited Designs</Link>
                    </div>
                </header>

                <section className="ContractorFavoritesList">
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
                </section>
            </main>
        );
    }
}


export default ContractorFavoritesList;