import React, {createContext, useState} from "react";
import {PRODUCTS} from '../constant';


export const ShopContext = createContext(null) ;

const getCartItem = () => {
    let cart = {}
    for (let i =1; i < PRODUCTS.length + 1 ; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getCartItem());

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let details = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItem[item] * details.price
            }
        }
        return totalAmount
    }
    const addToCart = (itemId) => {
            setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };
    const removeFromCart = (itemId) => {
            setCartItem((prev) => ({...prev, [itemId]: prev[itemId] -1}));
    };
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: newAmount }));
    }
    const contextValue ={cartItem, addToCart, removeFromCart, updateCartItemCount, getTotalAmount}

   
    return <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
};