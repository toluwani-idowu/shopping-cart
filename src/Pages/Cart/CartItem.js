import React, {useContext} from 'react';
import { ShopContext } from '../../Context/Shop-Context';
import './Cart.css';

export const CartItems = (props) => {
    const { id, price,  productImage, productName } = props?.data;
    const {cartItem, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    return (
       
        <div >
            <div className='cartItem'>
                <img src={productImage} alt={productName} className='cartProductImage' />
                <div className='description'>
                    <p><b>{productName}</b></p>
                    <p>${price}</p>
                </div>
                <div  className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItem[id]}  onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
       
    );
}
