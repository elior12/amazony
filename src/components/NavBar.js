import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
               <Link to ="/products">products</Link>{'   '}

               <Link to ="/product">product page</Link>

               {'   '}
               <Link to ="/cart">cart page</Link>
            </div>
        )
    }
}