import React from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import Product from './components/Products';
import Home from "./pages";
import SigninPage from './pages/signin';
import Signup from './components/Signup'

function App()
{
  return (
    <Router>
           <Route path="/" component={Home} exact/>
           <Route path="/signin" component={SigninPage} exact />
           <Route path="/product" component={Product} exact />
           <Route path="/signup" component={Signup} exact />
    </Router>
  
  );
}

export default App;
