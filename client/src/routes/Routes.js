import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Create from "../pages/Create";
import Read from "../pages/Read";
import MovieInfo from "../pages/MovieInfo";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Settings from "../pages/Settings";
import Single from "../pages/Single";
import { LoginContext } from "../context/LoginContext";

const Routes = () => {
  const { user } = useContext(LoginContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/create">{user ? <Create /> : <Login />}</Route>
        <Route path="/post" exact component={Read} />
        <Route path="/post/:postId" component={Single} />
        <Route path="/movie/:id" component={MovieInfo} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
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
