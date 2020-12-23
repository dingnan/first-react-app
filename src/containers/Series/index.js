import React, { Component } from "react";
import "whatwg-fetch";

class Series extends Component {
  state = {
    series: [],
  };

  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then((response) => response.json())
      .then((json) => this.setState({ series: json }));
  }
  render() {
    console.log("render", this.state);
    return <div>Series container</div>;
  }
}

export default Series;
