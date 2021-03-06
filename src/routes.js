import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/home";
import Aboutus from "./pages/home";

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/aboutus" exact={true} component={Aboutus} />
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
