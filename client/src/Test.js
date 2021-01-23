import React, { Component } from 'react';
import axios from "axios";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { message: ""};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        axios.get("/message")
            .then((res) => {
                this.setState({message: res.data.message});
                console.log(res.data.message);
            });
    }
    render() {
        return (
        <div className="App">
            <h1>This is a test</h1>
            <button onClick={this.handleClick}>Click</button>
            <p>{this.state.message}</p>
        </div>
        );
    }
}

export default Test;