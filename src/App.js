import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";
import CategoryPosts from "./Pages/CategoryPosts/CategoryPosts";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/categoryposts/:id" component={ CategoryPosts }/>
    </Switch>
  );
}

export default App;
