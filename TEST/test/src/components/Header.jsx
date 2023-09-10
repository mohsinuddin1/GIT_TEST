import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive,setIsActive]=useState(false);
  const {isOpen,setIsOpen}=useContext(SidebarContext);
  const {itemAmount}=useContext(CartContext);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>60?setIsActive(true):setIsActive(false);
    });
  });

  return (
    <header className={`${isActive?' bg-white  py-4 shadow-md':'bg-none py-6'}
     fixed  w-full z-10 py-4 px-5 justify-betweentransition-all}`}>
  <div className='container mx-auto flex items-center
     justify-between h-full '>
  
    <Link to='..\'> 
    <div className=' text-lg font-bold font-serif'>
    CANDY CLOTHING
    </div>
    </Link>
    
    
  <div className='  flex font-bold cursor-pointer 
    relative max-w-[50px] text-lg' onClick={()=>{
    setIsOpen(!isOpen);
  
  }}>Cart
  <div className=' bg-red-500 absolute -right-2  
  w-[18px] h-[18px] flex justify-center items-center text-white 
  rounded-full -bottom-2 p-2'>{itemAmount}</div>
  </div>
  </div>
  </header>
  );
};

export default Header;
