import React, { Component } from 'react';
import Footer from "./components/Footer";
import Routes from "./utils/Routes";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />

        <Footer />
      </div>
    );
  }
}

export default App;
