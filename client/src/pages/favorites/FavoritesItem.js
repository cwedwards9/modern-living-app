import React, { Component } from "react";

class FavoritesItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    // Calls the delete method and passes in the contractor id
    handleDelete(evt) {
        evt.preventDefault();
        this.props.delete(this.props.id);
    }

    render() {
        const { name, phone, locationOne, locationTwo, rating, url } = this.props;
        return (
            <div className="FavoritesItem">
                <button onClick={this.handleDelete}>Remove</button>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{locationOne}, {locationTwo}</p>
                <p>{rating} / 5</p>
                <a href={url}>See Reviews</a>
            </div>
        );
    }
}


export default FavoritesItem;