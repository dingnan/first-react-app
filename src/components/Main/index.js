import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SingleSeries from "../../containers/SingleSeries";

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/series/:id" component={SingleSeries} />
    <Route
      path="/contact"
      render={() => (
        <div>
          <h2>Contact Us</h2>
          <p>Address: 123 Main Street</p>
        </div>
      )}
    />
  </Switch>
);

export default Main;
