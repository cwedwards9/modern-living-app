import React, { Component } from "react";
import NavBar from '../../components/NavigationBar';
import "./NewProjectForm.css";
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

        axios.post("/api/projects", this.state)
            .then(() => {
                this.setState( { title: "", category: "", notes: "", estimated_cost: "", budget: "" } )
            });
    }

    render() {
        return (
            <div className="NewProjectPage">
                <NavBar />
                <div className="NewProject">
                    <div className="NewProjectForm">
                        <form onSubmit={this.handleSubmit}>
                            <h1>New Project</h1>
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
                                <option value="Media Room">Media Room</option>
                                <option value="Bedroom">Bedroom</option>
                                <option value="Basement">Basement</option>
                            </select>

                            <label htmlFor="notes">Notes</label>
                            <textarea 
                                id="notes"
                                name="notes"
                                value={this.state.notes}
                                onChange={this.handleChange}
                                required
                                rows={5}
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

                            <button>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default NewProjectForm;