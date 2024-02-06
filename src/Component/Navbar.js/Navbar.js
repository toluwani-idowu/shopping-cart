
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="navBar">
        <Link to='./' className="shop">Shop</Link>
        <Link to={'./cart'} className="shop"> cart </Link>
    </div>
  );
}

export default App;

