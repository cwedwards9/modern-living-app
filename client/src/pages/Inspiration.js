import React, { Component } from "react";
import "./Inspiration.css";
import axios from "axios";

class Inspiration extends Component {
    constructor(props) {
        super(props);
        this.state = { designs: [], searchTerm: "", isSaved: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveDesign = this.saveDesign.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    // Get the data from the Unsplash API and set the response as state
    async handleSubmit(evt) {
        evt.preventDefault();

        await axios.get("/unsplash", {
            params: {
                query: this.state.searchTerm
            }
        })
        .then(res => {
            console.log(res.data.results);
            this.setState({ designs: res.data.results });
        })
    }
    saveDesign(desc, url) {
        axios.post("/designs", { description: desc, url: url });
    }

    render() {
        return (
            <div className="Inspiration">
                <div className="InspirationSearch">
                    <h1>Find your <span>Inspiration</span></h1>
                    <p>We want to assist you by finding the best designs for your next project.</p>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            name="searchTerm"
                            value={this.state.searchTerm}
                            type="text"
                            onChange={this.handleChange}
                        />
                        <button>Search</button>
                    </form>
                </div>
                
                <div className="DesignList">
                    {this.state.designs.map(d => (
                        <div className="DesignItem" key={d.id}>
                            <img src={d.urls.full} alt={d.alt_description} style={{width: "300px"}}/>
                            <button onClick={() => {this.saveDesign(d.alt_description, d.urls.full)} }>Save</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default Inspiration;