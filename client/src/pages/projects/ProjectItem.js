import React, { Component } from "react";
import ProjectEditForm from "./ProjectEditForm";

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false };
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    // On click of the delete button, call the delete method and pass in the project's id
    handleDelete() {
        this.props.delete(this.props.id)
    }
    // On click of the Edit button, toggle the state to display the edit form
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }
    // Conditionally render a Project or the Project edit form based on the isEditing state
    render() {
        const { id, title, category, cost, budget, notes, update } = this.props;

        let result;
        if(this.state.isEditing){
            result = (
                <ProjectEditForm
                    id={id}
                    title={title}
                    category={category}
                    cost={cost}
                    budget={budget}
                    notes={notes}
                    update={update}
                    toggleForm={this.toggleForm}
                />
            );
        } else {
            result = (
                <div className="ProjectItem">
                    <div className="project-heading">
                        <h1 className="project-title">{title}</h1>
                        <button className="delete-proj-btn" onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
                    </div>
                    <p className="project-category">{category}</p>
                    <div className="costs">
                        <p>Cost: ${cost}</p>
                        <p>Budget: ${budget}</p>
                    </div>
                    <button className="edit-btn" onClick={this.toggleForm}>Edit <i className="fas fa-edit"></i></button>
                    <p className="project-notes">{notes}</p>
                </div>
            );
        }
        return (
            result
        );
    }
}


export default ProjectItem;