import React from "react";
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
