import React, { Component } from "react";
import FavoritesItem from "./FavoritesItem";
import axios from "axios";

class FavoritesList extends Component {
    constructor(props) {
        super(props);
        this.state = { contractors: [] };
        this.deleteContractor = this.deleteContractor.bind(this);
    }
    async componentDidMount() {
        await axios.get("/contractors")
            .then(res => {
                this.setState({contractors: res.data});
            })
    }
    deleteContractor(id) {
        axios.delete(`/contractors/${id}`)
            .then((res) => {
                console.log(res);
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
                        street={c.street} 
                        state={c.state}
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