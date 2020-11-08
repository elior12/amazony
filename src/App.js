import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Navbar from './components/NavBar';
import Product from './components/Product';
import Products from './components/Products';
import Cart from './components/Cart';
import { Route, Switch } from 'react-router-dom';




class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
        <Route  exact path ="/products" component={Products}/>
        <Route  exact path ="/cart" component={Cart}/>
        <Route  exact path ="/product" component={Product}/>
        </Switch>
        
      </React.Fragment>
   
     )
  }
}

  


export default App;
