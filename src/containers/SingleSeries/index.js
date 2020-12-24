import React, { Component } from "react";
import Show from "../../components/Show";

class SingleSeries extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then((response) => response.json())
      .then((json) => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    return <Show detail={show} />;
  }
}

export default SingleSeries;
