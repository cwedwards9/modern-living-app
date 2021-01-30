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
                <div className="Notes">
                    <h1>{title}</h1>
                    <form onSubmit={this.handleUpdate} className="Notes-edit-form">
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
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p>{cost}</p>
                    <p>{budget}</p>
                    <p>{notes}</p>
                    <div>
                        <button onClick={this.handleDelete}>Delete</button>
                        <button onClick={this.toggleForm}>Edit</button>
                    </div>
                </div>
            );
        }
        return (
            result
        );
    }
}


export default ProjectItem;