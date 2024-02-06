import React from "react";
import "./Shop.css";
import { PRODUCTS } from "../../constant";
import { Product } from "./Product";

export const Shop = () => {
  return (
    <div className="shopPage">
      <div className="shopTitle"> Welcome </div>
      <div className='productContainer' >
        {PRODUCTS.map((product) => (
           <Product data={product} />
        ))}
      </div>
    </div>
  );
};
