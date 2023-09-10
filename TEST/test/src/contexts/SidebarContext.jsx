import React, { createContext, useContext, useState } from 'react';

import CartItem from '../components/CartItem';
import { CartContext } from './CartContext';

export const SidebarContext=createContext();
const SidebarProvider= ({children}) => {
  const[isOpen,setIsOpen]=useState(false);
  //console.log(useContext(CartContext));

  const handleClose=()=>{
    setIsOpen(false);
  };
 
  return (<SidebarContext.Provider
  value={{isOpen,setIsOpen,
  handleClose}}>
    {children}
    </SidebarContext.Provider>
  );

};

export default SidebarProvider;
