import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Chapter from "./containers/Chapter";
import Events from "./containers/Events";
import Contact from "./containers/Contact";
import NotFound from "./containers/NotFound";

export default () =>
    <Switch>
        <Route path="/shpe" exact component={Home} />
        <Route path="/chapter" exact component={Chapter} />
        <Route path="/events" exact component={Events} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
    </Switch>;