import React, { Component } from "react";
import NavBar from '../../components/NavigationBar';
import "./NewProjectForm.css";
import axios from "axios";
import errorHandler from "../../utils/ErrorHandler";

class NewProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", category: "", notes: "", estimated_cost: "", budget: "", message: "" };
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

        const { title, category, notes, estimated_cost, budget } = this.state;

        axios.post("/api/projects", { title, category, notes, estimated_cost, budget })
            .then(() => {
                this.setState( { title: "", category: "", notes: "", estimated_cost: "", budget: "", message: "" } );
            }) 
            .catch(err => {
                let errMessage = errorHandler(err);
                this.setState({ message: errMessage });
            })
    }

    render() {
        return (
            <div className="NewProjectPage">
                <NavBar />
                <div className="NewProject">
                {this.state.message
                    ? <div className="user-log-msg">
                        <p>{this.state.message}</p>
                        <button onClick={() => this.setState({ message: "" })} >X</button>
                    </div>
                    : null
                }
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
                                
                                name="estimated_cost"
                                value={this.state.estimated_cost}
                                onChange={this.handleChange}
                                required
                            />

                            <label htmlFor="">Budget</label>
                            <input 
                                id="budget"
                                
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