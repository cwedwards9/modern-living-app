import React, { Component } from "react";

class FavoritesItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(evt) {
        evt.preventDefault();
        this.props.delete(this.props.id);
    }

    render() {
        const { name, phone, street, state, rating, url } = this.props;
        return (
            <div className="FavoritesItem">
                <form onSubmit={this.handleRemove}>
                    <button>Remove</button>
                </form>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{street} {state}</p>
                <p>{rating}</p>
                <p>{url}</p>
            </div>
        );
    }
}


export default FavoritesItem;