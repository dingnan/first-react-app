import React, { Component } from "react";
import "./App.css";
import Main from "../Main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Link className="link" to="/">
              Home
            </Link>
          </p>
          <p>TV Series List</p>
          <p>
            <Link className="link padding" to="/counter">
              Counter
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </p>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
