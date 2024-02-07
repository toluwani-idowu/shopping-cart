
import React from 'react';
import './Navbar.css';
import cartIcon from '../../assets/cart Icon.png'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="navBar">
        <Link to='./' className="shop">Shop</Link>
        <Link to={'./cart'}  > <img src = {cartIcon} alt= {cartIcon}   width="34" height="34" className="cartIcon"/>  </Link>
    </div>
  );
}

export default App;

