import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from "./components/pages/login/Login";
import Store from "./components/pages/stores/Store";

function App() {
  return (
    <>
      <Router>
        <Navbar/> 
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/entrar' exact component={Login} />
          <Route path='/lojas' exact component={Store} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
