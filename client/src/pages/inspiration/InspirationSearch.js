import React, { Component } from "react";
import InspirationItem from "./InspirationItem";
import "./Inspiration.css";
import axios from "axios";
import errorHandler from "../../utils/ErrorHandler";
import NavBar from '../../components/NavigationBar';


class Inspiration extends Component {
    constructor(props) {
        super(props);
        this.state = { designs: [], searchTerm: "", isSaved: false, message: "" };
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
    handleSubmit(evt) {
        evt.preventDefault();

        axios.get("/api/unsplash", {
            params: {
                query: this.state.searchTerm
            }
        })
        .then(res => {
            this.setState({ designs: res.data.results });
        })
        .catch(err => {
            let errMessage = errorHandler(err);
            this.setState({ message: errMessage });
        });
    }
    saveDesign(desc, url) {
        axios.post("/api/designs", { description: desc, url: url });
    }

    render() {
        return (
            <main className="Inspiration">
                <NavBar />
                <section className="InspirationSearch">
                    <div className="inspiration-header">
                        <h1>SOME<span style = {{display: "block"}}>INSPIRATION</span></h1>
                    </div>

                    <div className="InspirationForm">
                        <p>We want to assist you by finding the best designs for your next project.</p>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                name="searchTerm"
                                value={this.state.searchTerm}
                                type="text"
                                onChange={this.handleChange}
                                required
                            />
                            <button>SEARCH</button>
                        </form>
                    </div>
                </section>

                {/* Results */}
                <section className="inspiration-results">
                    {this.state.message
                        ? <div className="user-log-msg">
                            <p>{this.state.message}</p>
                            <button onClick={() => this.setState({ message: "" })} >X</button>
                        </div>
                        : null
                    }
                    
                    {this.state.designs.map(d => (
                        <InspirationItem
                            key={d.id}
                            url={d.urls.full}
                            desc={d.alt_description}
                            saveDesign={this.saveDesign}
                        />
                    ))}
                </section>
            </main>
        );
    }
}


export default Inspiration;