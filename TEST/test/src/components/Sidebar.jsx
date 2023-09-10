import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';


import {SidebarContext} from '../contexts/SidebarContext';
import { CartContext} from '../contexts/CartContext';

const Sidebar = () => {
  const {isOpen,handleClose}=useContext(SidebarContext);
  const {cart,clearCart,total,itemAmount} =useContext(CartContext);
  return (
  <div className={` ${isOpen? 'right-0' : '-right-full'} w-full shadow-2xl fixed top-0 h-full
  md:w-[35vw] bg-white xl:max-w-[30vw] transition-all duration-300
  z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6
    border-b'>
      <div className='uppercase text-sm
      font-semibold'>Shopping Bag({itemAmount})</div>
      <div className=' cursor-pointer w-8 h-8 flex 
      justify-center items-center ' onClick={handleClose}>
        <div className=' font-semibold text-blue-500  text-l'>close</div>
      </div>
    </div>

    <div className='flex flex-col overflow-y-auto 
    overflow-x-hidden gap-y-2 h-[365px] lg:h-[450px] border-b'>
      
      {cart.map((item)=> {
      return <CartItem item={item} key={item.id} />
      })}
      </div>
      <div className=' flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full items-center justify-between'>

          <div> 
            <span>Total:</span>$ ${parseFloat(total).toFixed(2)}
          </div>
            <div onClick={clearCart} className=' text-blue-500 font-semibold cursor-pointer'>Clear all</div>
        </div>
        <Link
          to="/"
          className=' bg-gray-200 flex p-3 justify-center
           items-center text-primary w-full font-medium'
           >
            View Cart
           </Link>
           <Link
          to="/"
          className=' bg-gray-900 flex p-3 justify-center
           items-center text-white w-full font-medium'
           >
            Checkout
           </Link>
      </div>
  </div>
  );
};

export default Sidebar;
