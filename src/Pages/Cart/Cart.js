
import React, { useContext } from 'react';
import { PRODUCTS } from '../../constant';
import { ShopContext } from '../../Context/Shop-Context';
import { CartItems } from './CartItem';
import { useNavigate } from 'react-router-dom';
import './Cart.css';


export const  Cart = () => {
  const { cartItem, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
        <div >
          <h2> Your Cart Item</h2>
         </div>
         <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItem[product.id] !== 0) {
              return <CartItems  data={ product }/>
            } else {
              return null;
            }
          })}
         </div>
         {totalAmount > 0 ?(
         <div className="checkout">
          <p>SubTotal: $ {totalAmount} </p>
            <button onClick={() => navigate('/')}> Continue Shopping </button>
            <button> Checkout </button>  
         </div> ) : (
          <h3> Your Cart is Empty</h3>
         ) }
    </div>
    
  );
}


