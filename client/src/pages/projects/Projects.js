import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import NavBar from '../../components/NavigationBar';
import axios from "axios";
import "./Project.css";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
        this.deleteProject = this.deleteProject.bind(this);
        this.editProject = this.editProject.bind(this);
    }
    // On page load (after render() ), get the projects from the db and set it to state
    componentDidMount() {
        axios.get("/api/projects")
            .then(res => {
                this.setState({ projects: [res.data] });
            })
    }
    // Handle deletion of a project in the db and update state to reflect deletion
    deleteProject(id) {
        axios.delete(`/api/projects/${id}`)
            .then(() => {
                this.setState({ projects: this.state.projects.filter(p => p._id !== id) });
            })
    }
    // Handle update of a project in the db and update the state to reflect the change of a project
    editProject(id, updatedProj) {
        axios.put(`/api/projects/${id}`, updatedProj)
            .then(() => {
                const updatedProjects = this.state.projects.map(project => {
                    if(project._id === id){
                        return {...project, ...updatedProj}
                    }
                    return project;
                });
                this.setState({ projects: updatedProjects });
            })
    }
    render() {
        return (
            <div className="ProjectsPage">
                <NavBar />
                <div className="ProjectsList">
                {this.state.projects.map(p => (
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