import React, { Component } from "react";
import axios from "axios";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }
    componentDidMount() {
        axios.get("/projects")
            .then(res => {
                this.setState({projects: res.data});
            })
    }
    render() {
        return (
            <div className="ProjectsList">
                {this.state.projects.map(p => (
                    <div key={p._id}>
                        <p>{p.title}</p>
                        <p>{p.category}</p>
                        <p>{p.estimated_cost}</p>
                        <p>{p.budget}</p>
                        <p>{p.notes}</p>
                    </div>
                ))}
            </div>
        );
    }
}


export default Projects;