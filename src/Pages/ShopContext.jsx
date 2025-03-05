import React, { createContext, useState } from 'react'
import  productdata  from '../productdata';
export const ShopContext = createContext(null);

const getDefaulCart= ()=>{
  let cart = {};
  for (let index = 0; index < productdata.length +1; index++) {
    cart[index]=0;
  }
  return cart;
}

const ShopContextProvider = (props)=>{
  const [CartItems ,setCartItems] =useState(getDefaulCart());
  const contextValue = {productdata,CartItems};

  const addToCart =()=>{

  }

  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider