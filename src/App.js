import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from "./components/pages/login/Login";
import Product from "./components/pages/products/Product";
import Store from "./components/pages/stores/Store";
import Map from "./components/pages/Map/Map";

function App() {
  return (
    <>
      <Router>
        <Navbar/> 
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/entrar' exact component={Login} />
          <Route path='/produtos' exact component={Product} />
          <Route path='/lojas' exact component={Store} />
          <Route path='/mapa' exact component={Map} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
