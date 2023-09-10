import React, { createContext, useEffect, useState } from 'react';
import Product from '../components/Product';

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount,setItemAmount]=useState(0);
  const [total,setTotal]=useState(0);

  useEffect(()=>{
    const total=cart.reduce((accumulator,currentItem)=>{
      return accumulator+currentItem.price*currentItem.amount;

    },0);
    setTotal(total);
  })

useEffect(()=>{
  if(cart){
    const amount=cart.reduce((accumulator,currentItem)=>{
      return accumulator+currentItem.amount;
    },0);
    setItemAmount(amount);
  }
},[cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const CartItem = cart.find((item) => {
      return item.id === id;
    })
    if (CartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount + 1 };
        }
        else {
          return item;
        }
      });
      setCart(newCart)
    }
    else {
      setCart([...cart, newItem]);
    }
  };

  console.log(cart);

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  }
  const clearCart = () => {
    setCart([]);
  }

  const increaseAmount = (id) => {
    const product = cart.find((item) => {
      return id === item.id
    });
    addToCart(product, id);
  }
  const decreaseAmount = (id) => {
    const CartItem = cart.find((item) => {
      return id === item.id
    });
    if (CartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount - 1 };
        }
        else  
          return item;
      });
      setCart(newCart);
    }
        if (CartItem.amount < 2)
          removeFromCart(id);
  
  
}
  return (
    <CartContext.Provider value={{ cart, 
    addToCart, 
    removeFromCart, 
    clearCart, 
    increaseAmount,
    decreaseAmount,
    itemAmount,
    total
    }}>
      {children}</CartContext.Provider>
  );
};

export default CartProvider;
