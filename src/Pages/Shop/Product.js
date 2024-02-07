import React, { useContext } from 'react';
import { ShopContext } from '../../Context/Shop-Context';
import './Shop.css';

export const Product = (props) => {
    const { id, price,  productImage, productName } = props?.data;
    const { addToCart, cartItem } = useContext(ShopContext);

     const carItemtAmount = cartItem[id]
    return (
       
        <div >
            <div className='productbox'>
                <img src={productImage} alt={productName} className='productImage'  />
                <div className='description'>
                    <p><b>{productName}</b></p>
                    <p>${price}</p>
                    <button onClick = {() => addToCart(id)}>
                        Add to Cart {carItemtAmount  > 0 && <> ({carItemtAmount}) </>  }  
                         </button>
                </div>
            </div>
        </div>
       
    );
}
