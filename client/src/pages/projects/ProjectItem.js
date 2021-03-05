import React, { Component } from "react";
import ProjectEditForm from "./ProjectEditForm";

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, modal: false };
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    // Toggle modal state to show/hide modal
    toggleModal() {
        this.setState({ modal: !this.state.modal });
    }
    // Delete project based on project id
    handleDelete() {
        this.props.delete(this.props.id)
    }
    // Toggle isEditing state to show/hide edit form
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }
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
                        <button className="delete-proj-btn" onClick={this.toggleModal}><i className="fas fa-trash"></i></button>
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
            <>
            {result}
            {this.state.modal
                ? <div className="project-modal">
                    <h2>Are you sure you want to delete the project "{this.props.title}"?</h2>
                    <div>
                        <button className="delete-btn-proj" onClick={this.handleDelete}>Delete</button>
                        <button className="cancel-btn-proj" onClick={this.toggleModal}>Cancel</button>
                    </div>
                </div>
                : null
            }
            </>
        );
    }
}


export default ProjectItem;