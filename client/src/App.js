import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar';
import Routes from "./utils/Routes";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        
        <Routes />
      </div>
    );
  }
}

export default App;
