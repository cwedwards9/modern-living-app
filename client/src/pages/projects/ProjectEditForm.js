import React, { Component } from "react";

class ProjectEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title, 
            category: this.props.category, 
            notes: this.props.notes,
            estimated_cost: this.props.cost,
            budget: this.props.budget
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
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
        const { title, category, notes, estimated_cost, budget } = this.state;
        this.props.update(this.props.id, 
            {title: title, category: category, notes: notes, estimated_cost: estimated_cost, budget: budget });

        this.props.toggleForm();
    }
    render() {
        return (
            <div className="Project-edit-form">
                <h1>Edit Project</h1>
                <form onSubmit={this.handleUpdate}>
                <label htmlFor="title">Title</label>
                    <input 
                        id="title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        required
                    />

                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" onChange={this.handleChange} required>
                        <option value="">--Please choose the project type--</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Bathroom">Bathroom</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Basement">Basement</option>
                    </select>

                    <label htmlFor="notes">Notes</label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={this.state.notes}
                        onChange={this.handleChange}
                        required
                    ></textarea>

                    <label htmlFor="cost">Cost</label>
                    <input
                        id="cost"
                        type="number"
                        name="estimated_cost"
                        value={this.state.estimated_cost}
                        onChange={this.handleChange}
                        required
                    />

                    <label htmlFor="">Budget</label>
                    <input 
                        id="budget"
                        type="number"
                        name="budget"
                        value={this.state.budget}
                        onChange={this.handleChange}
                        required
                    />
                    <button>Update</button>
                </form>
            </div>
        );       
    }
}


export default ProjectEditForm;