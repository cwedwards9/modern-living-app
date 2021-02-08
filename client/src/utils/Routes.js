import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Landing from "../pages/Landing";
import Inspiration from "../pages/Inspiration";
import Starter from "../pages/Starter";
import ContractorSearch from "../pages/contractor/ContractorSearch";
import Projects from "../pages/projects/Projects";
import ContractorFavoritesList from "../pages/favorites/ContractorFavoritesList";
import DesignFavoritesList from "../pages/favorites/DesignFavoritesList";
import NewProjectForm from "../pages/projects/NewProjectForm";
import Contact from "../pages/Contact";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render= { () => <Home /> } />
                <Route exact path="/register" render={(routeProps)=> <Register routeProps={routeProps} />} />
                <Route exact path="/login" render={(routeProps)=> <Login routeProps={routeProps} />} />
                <Route path="/landing" render= {() => <Landing />}  />
                <Route exact path="/inspiration" render= { () => <Inspiration /> } />
                <Route exact path="/starter" render= { () => <Starter /> } />
                <Route exact path="/contractor" render= { () => <ContractorSearch /> } />
                <Route exact path="/projects" render= { () => <Projects /> } />
                <Route exact path="/favorites/contractors" render= { () => <ContractorFavoritesList /> } />
                <Route exact path="/favorites/designs" render= { () => <DesignFavoritesList /> } />
                <Route exact path="/newproject" render= { () => <NewProjectForm /> } />
                <Route exact path="/contact" render= { () => <Contact /> } />
            </Switch>
        );
    }
}

export default Routes;