import React, { Component } from "react";
import "./Register.css";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "",  password: "", message: "" };
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
        const { email, password } = this.state;

        axios.post("/login", { email: email, password: password })
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data));
                this.props.routeProps.history.push('/landing');
            })
            .catch(error => {
                this.setState({ email: "",  password: "", message: error.response.data });
            })
    }
    render() {
        return (
            <div className="Login-Page">
                {this.state.message
                    ? <div className="user-log-msg">
                        <p>{this.state.message}</p>
                    </div>
                    : null
                }
                <div className="Login">
                    <h1>Log In</h1>
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