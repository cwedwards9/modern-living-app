import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav style={{display: "flex", justifyContent: "space-around"}}>
                <NavLink exact className="link" activeClassName="active-link" to="/">Home</NavLink>
                <NavLink exact className="link" activeClassName="active-link" to="/landing">Landing</NavLink>
            </nav>
        );
    }
}


export default Navbar;