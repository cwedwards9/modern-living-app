import React, { Component } from "react";
import "./Register.css";
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", f_name: "", l_name: "", message: "" };
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

        const { email, password, f_name, l_name } = this.state;

        axios.post("/register", { email: email, password: password, f_name: f_name, l_name: l_name })
            .then((response) => {
                console.log(response);
                this.props.routeProps.history.push('/landing');
            })
            .catch(error => {
                this.setState({ email: "", password: "", f_name: "", l_name: "", message: error.response.data });
            })
    }
    render() {
        return (
            <div className="Register-Page">
                {this.state.message
                    ? <div className="user-log-msg">
                        <p>{this.state.message}</p>
                    </div>
                    : null
                }
                
                <div className="Register">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input 
                            id="email"
                            name="email"
                            value={this.state.email}
                            type="email"
                            required="required"
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
                            id="l-name"
                            name="l_name"
                            value={this.state.l_name}
                            type="text"
                            onChange={this.handleChange}
                        />

                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="user-access-links">
                    <a href="/">Go Back</a> ·
                    <a href="/login"> Already have an account?</a>
                </div>
            </div>
            
        );
    }
}


export default Register;