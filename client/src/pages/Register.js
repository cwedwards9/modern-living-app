import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "",  f_name: "", l_name: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();

        axios.post("/register", this.state)
            .then(() => {
                this.setState({ email: "",  f_name: "", l_name: "" });
            })
    }
    render() {
        return (
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        id="email"
                        name="email"
                        value={this.state.email}
                        type="text"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        id="password"
                        name="password"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleChange}
                    />

                    <label htmlFor="f-name">First Name:</label>
                    <input 
                        id="f-name"
                        name="f_name"
                        value={this.state.f_name}
                        type="text"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="l-name">Last Name:</label>
                    <input 
                        id="l_name"
                        name="l_name"
                        value={this.state.l_name}
                        type="text"
                        onChange={this.handleChange}
                    />

                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}


export default Register;