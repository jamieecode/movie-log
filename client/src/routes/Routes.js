import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
import Read from "../pages/Read";
import MovieInfo from "../pages/MovieInfo";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/create" component={Create} />
        <Route path="/read" component={Read} />
        <Route path="/movie/:id" component={MovieInfo} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
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
