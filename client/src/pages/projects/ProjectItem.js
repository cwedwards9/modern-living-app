import React, { Component } from "react";

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, notes: "" };
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    // On page load (after render() ), set the notes state in this component to be equal to the notes props from Projects 
    componentDidMount() {
        this.setState({ notes: this.props.notes });
    }
    // On click of the delete button, call the delete method and pass in the project's id
    handleDelete() {
        this.props.delete(this.props.id)
    }
    // On click of the Edit button, toggle the state to display the edit form
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }
    // Handling changes to the input
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    // On edit form submit, call the update method, passing in the project id and the updated input
    handleUpdate(evt) {
        evt.preventDefault();

        this.props.update(this.props.id, this.state.notes);
        this.setState({isEditing: false});
    }

    // Conditionally render a Project or the Project edit form based on the isEditing state
    render() {
        const { title, category, cost, budget, notes } = this.props;

        let result;
        if(this.state.isEditing){
            result = (
                <div className="Project-edit-form">
                    <h1>{title}</h1>
                    <form onSubmit={this.handleUpdate}>
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={this.state.notes}
                            onChange={this.handleChange}
                        ></textarea>
                        <button>Update</button>
                    </form>
                </div>
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