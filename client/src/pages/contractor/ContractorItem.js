import React, { Component } from "react";
import axios from "axios";

class ContractorItem extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", phone: "", street: "", state: "", rating: "", url: ""};
        this.handleSave = this.handleSave.bind(this);
    }
    handleSave() {
        const { name, phone, street, state, rating, url } = this.props;
        this.setState({
            name: name,
            phone: phone,
            street: street,
            state: state,
            rating: rating,
            url: url
        }, () => {
            axios.post("/contractors", this.state)
        });
    }

    render() {
        const { name, phone, street, state, rating, url } = this.props;
        return (
            <div className="ContractorItem" style={{marginBottom: "50px"}}>
                <button onClick={this.handleSave}>Save</button>
                <h1>{name}</h1>
                <p>{phone}</p>
                <p>{street} {state}</p>
                <p>{rating} / 5 Stars</p>
                <a href={url}>See Reviews</a>
            </div>
        );
    }
}


export default ContractorItem;