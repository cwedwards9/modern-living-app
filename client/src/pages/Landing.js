import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../components/NavigationBar";
import './Landing.css'

const cardInfo = [
    { id: 1, title: "Inspiration", link: "/inspiration", iconClass: "far fa-lightbulb" }, { id: 2, title: "Starter Guides", link: "/starter", iconClass: "far fa-clipboard" }, 
    { id: 3, title: "Find Help", link: "/contractor", iconClass: "fas fa-hands-helping" }, { id: 4, title: "Favorites", link: "/favorites/contractors", iconClass: "far fa-heart" },
    { id: 5, title: "Projects", link: "/projects", iconClass: "fas fa-tasks" }, { id: 6, title: "New Project", link: "/newproject", iconClass: "fas fa-plus" }
];

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ""};
    }
    componentDidMount() {
        const user = JSON.parse(sessionStorage.getItem("user"));
        if(user) {
            this.setState({ name: user.fName });
        }
        else return;
    }
    render() {
        return (
            <main className="landing-page">
                <NavBar />

                <section className="landing-head">
                    <div className="landing-welcome">
                        <h1>Welcome, {this.state.name}</h1>
                    </div>
                </section>

                <section className="landing-cards">
                    {cardInfo.map(card => (
                        <div className="land-card-item" key={card.id}>
                            <a href={card.link} className="landing-link">
                                <i className={card.iconClass} ></i>
                                <h2>{card.title.toUpperCase()}</h2>
                            </a>
                        </div>
                    ))}
                </section>
            </main>
        );
    }
}


export default Landing;