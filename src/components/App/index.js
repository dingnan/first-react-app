import React, { Component } from "react";
import "./App.css";
import Intro from "../Intro";
import Series from "../../containers/Series";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>TV Series List</p>
        </header>
        <Intro message="Here you can find all of your favorite TV series" />
        <Series />
      </div>
    );
  }
}

export default App;
