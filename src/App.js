import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.js/index.js";
import {Cart} from "./Pages/Cart/Cart.js";
import {Shop} from './Pages/Shop/Shop.js'
import { ShopContextProvider } from "./Context/Shop-Context.js";

function App() {
  return (
    <div className="App">
       <ShopContextProvider>
      <Router>
      <Navbar />
      <h1 className="body">House of wanny</h1>

        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart"  element={<Cart/>}/>
        </Routes>
      </Router> 
      </ShopContextProvider>
    </div>
    
  );
}

export default App;
