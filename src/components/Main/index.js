import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";
import Counter from "../../components/Counter";

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/series/:id" component={SingleSeries} />
    <Route
      path="/contact"
      render={() => (
        <div>
          <h2>Contact Us</h2>
          <p>Address: 123 Main Street, New York</p>
        </div>
      )}
    />
    <Route path="/counter" component={Counter} />
  </Switch>
);

export default Main;
