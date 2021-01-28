import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Landing page</h1>
                <section>
                    <Link to="/inspiration">inspiration</Link>
                </section>
                <section>
                    <Link to="/starter">starter guides</Link>
                </section>
                <section>
                    <Link to="/yelp">Find Help</Link>
                </section>
                <section>
                    <Link to="/projects">projects</Link>
                </section>
                <section>
                    <Link to="/favorites">favorites</Link>
                </section> 
            </div>
        );
    }
}


export default Landing;