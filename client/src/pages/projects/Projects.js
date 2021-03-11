import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import NavBar from '../../components/NavigationBar';
import axios from "axios";
import errorHandler from "../../utils/ErrorHandler";
import "./Project.css";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [], message: "" };
        this.deleteProject = this.deleteProject.bind(this);
        this.editProject = this.editProject.bind(this);
    }
    // Get projects from the db
    componentDidMount() {
        axios.get("/api/projects")
            .then(res => {
                this.setState({projects: res.data});
            })
            .catch(err => {
                let errMessage = errorHandler(err);
                this.setState({ message: errMessage });
            })
    }
    // Delete project in the db and update state
    deleteProject(id) {
        axios.delete(`/api/projects/${id}`)
            .then(() => {
                this.setState({ projects: this.state.projects.filter(p => p._id !== id) });
            })
            .catch(err => {
                let errMessage = errorHandler(err);
                this.setState({ message: errMessage });
            })
    }
    // Update project in the db and update state
    editProject(id, updatedProj) {
        axios.put(`/api/projects/${id}`, updatedProj)
            .then(() => {
                const updatedProjects = this.state.projects.map(project => {
                    if(project._id === id){
                        return {...project, ...updatedProj}
                    }
                    return project;
                });
                this.setState({ projects: updatedProjects, message: "" });
            })
            .catch(err => {
                let errMessage = errorHandler(err);
                this.setState({ message: errMessage });
            })
    }
    render() {
        return (
            <div className="ProjectsPage">
                <NavBar />
                <div className="ProjectsList">
                {this.state.message
                    ? <div className="user-log-msg">
                        <p>{this.state.message}</p>
                        <button onClick={() => this.setState({ message: "" })} >X</button>
                    </div>
                    : null
                }

                {this.state.projects && this.state.projects.map(p => (
                    <ProjectItem 
                        key={p._id}
                        id={p._id}
                        title={p.title}
                        category={p.category}
                        cost={p.estimated_cost}
                        budget={p.budget}
                        notes={p.notes}
                        delete={this.deleteProject}
                        update={this.editProject}
                    />
                ))}
                </div>
            </div>
            
        );
    }
}


export default Projects;