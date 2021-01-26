import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import YelpSearch from "./pages/YelpSearch";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" render= { () => <Home /> } />
          <Route exact path="/yelp" render= { () => <YelpSearch /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
