import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <NavLink exact className="link" activeClassName="active-link" to="/">Home</NavLink>
                <NavLink exact className="link" activeClassName="active-link" to="/yelp">Yelp</NavLink>
            </nav>
        );
    }
}


export default Navbar;