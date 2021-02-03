import React, { Component } from "react";
import "./Register.css";
// import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "",  password: "" };
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

        // axios.post("/login", this.state)
        //     .then(() => {
        //         this.setState({ email: "",  password: "" });
        //     })
    }
    render() {
        return (
            <div className="Login-Page">
                <div className="Login">
                    <h1>Log In</h1>
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

                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="user-access-links">
                    <a href="/">Go Back</a> ·
                    <a href="/register"> New User?</a>
                </div>
            </div> 
        );
    }
}


export default Login;