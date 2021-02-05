import React, { Component } from "react";

class ContractorFavoritesItem extends Component {
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
            <div className="ContractorFavoritesItem">
                <div className="favorites-heading">
                    <h2>{name}</h2>
                    <button onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
                </div>
                <p>{phone}</p>
                <p>{locationOne}, {locationTwo}</p>
                <p>{rating} / 5</p>
                <a href={url}>See Reviews</a>
            </div>
        );
    }
}


export default ContractorFavoritesItem;