import React, { Component } from "react";
import "./App.css";
import Main from "../Main";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>TV Series List</p>
        </header>        
        <Main />
      </div>
    );
  }
}

export default App;
