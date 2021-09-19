import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
import Read from "../pages/Read";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/create" exact component={Create} />
        <Route path="/read" exact component={Read} />
        <Route path="/movies/:id" exact component={MovieDetail} />
        <Route
          render={({ location }) => (
            <div>
              <h3>Not Found</h3>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
