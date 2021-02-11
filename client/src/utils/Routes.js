import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoutes";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Landing from "../pages/Landing";
import Inspiration from "../pages/inspiration/InspirationSearch";
import Starter from "../pages/Starter";
import ContractorSearch from "../pages/contractor/ContractorSearch";
import Projects from "../pages/projects/Projects";
import ContractorFavoritesList from "../pages/favorites/ContractorFavoritesList";
import DesignFavoritesList from "../pages/favorites/DesignFavoritesList";
import NewProjectForm from "../pages/projects/NewProjectForm";
import Contact from "../pages/Contact";


class Routes extends Component {
    render() {
        // Check user session to see if user is logged in (session created on login/register)
        const user = sessionStorage.getItem("user");
        return (
            // Protected Routes are accessible if a 'user' is in the session storage
            <Switch>
                <Route exact path="/" render= { () => <Home /> } />
                <Route exact path="/register" render={(routeProps)=> <Register routeProps={routeProps} />} />
                <Route exact path="/login" render={(routeProps)=> <Login routeProps={routeProps} />} />
                <Route exact path="/contact" render= { () => <Contact /> } />
                <Route exact path="/landing" render= {() => <Landing />}  />
                <ProtectedRoute exact path="/inspiration" component={Inspiration} isAuth={user} />
                <ProtectedRoute exact path="/starter" component= {Starter} isAuth={user} />
                <ProtectedRoute exact path="/contractor" component= {ContractorSearch} isAuth={user} />
                <ProtectedRoute exact path="/projects" component= {Projects} isAuth={user} />
                <ProtectedRoute exact path="/favorites/contractors" component= {ContractorFavoritesList} isAuth={user} />
                <ProtectedRoute exact path="/favorites/designs" component= { DesignFavoritesList} isAuth={user} />
                <ProtectedRoute exact path="/newproject" component= {NewProjectForm} isAuth={user} />
                <Redirect to="/" />
            </Switch>
        );
    }
}


export default Routes;