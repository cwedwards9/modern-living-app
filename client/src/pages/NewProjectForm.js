import React, { Component } from "react";
import axios from "axios";

class NewProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", category: "", notes: "", estimated_cost: "", budget: "" };
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

        axios.post("/projects", this.state);
    }

    render() {
        return (
            <div className="NewProjectForm">
                <h1>Start a New Project</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" onChange={this.handleChange}>
                        <option value="default">--Please choose the project type--</option>
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
                    ></textarea>

                    <label htmlFor="cost">Cost</label>
                    <input
                        id="cost"
                        type="number"
                        name="estimated_cost"
                        value={this.state.estimated_cost}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="">Budget</label>
                    <input 
                        id="budget"
                        type="number"
                        name="budget"
                        value={this.state.budget}
                        onChange={this.handleChange}
                    />

                    <button>Create</button>
                </form>
            </div>
        );
    }
}


export default NewProjectForm;