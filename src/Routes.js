import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./Component/Dashboard/Dashboard";
import AddForm from "./Component/Form/AddForm";
import UpdateForm from "./Component/Form/UpdateForm";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {/* <Route path="/" component={Login} exact /> */}
          <Route path="/" component={Dashboard} exact />
          {/* <Route path="/home" component={Dashboard} /> */}
          <Route path="/add" component={AddForm} />
          <Route path="/edit/:id" component={UpdateForm} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
