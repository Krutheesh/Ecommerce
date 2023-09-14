import React from 'react'
import { useState } from 'react';
import  {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
function Nav() {
  const items = useSelector(state => state.ecom.cartItems)
  console.log(items.length)

  const [isOpen,setIsopen] = useState(false)
  return (
    <div className='md:flex fixed z-40 w-full justify-between bg-[#f2e6ff]  font-semibold items-center px-[0.5rem] '>
      <div className='text-[2.5rem] flex justify-between items-center'>
        <Link to='/'><span className='text-[#9933ff] '>K</span>STORE</Link>
        {
        isOpen?<div className='text-[2rem] md:hidden' onClick={() => {setIsopen(!isOpen)}}>
        <RxCross2/>
      </div>:<div className='text-[2rem] md:hidden ' onClick={() => {setIsopen(!isOpen)}}>
        <GiHamburgerMenu/>
        
      </div>
      }
      </div>
      
      
      
      <ul className={`md:flex-row md:flex text-[1.5rem] md:text-[1.2rem] md:text-xl md:pr-[2rem] flex flex-col items-center md:justify-between h-[100vh] md:h-full text-gray-600 font-normal  md:space-x-[2rem] md:space-y-0 space-y-4  mt-[2rem] md:mt-0 ${isOpen?"block":"hidden"}`} onClick={() => setIsopen(!isOpen)}>
        <li className='hover:text-black cursor-pointer'>
          <Link to='/'>Home</Link>
          </li>
        <li className='hover:text-black cursor-pointer'>
          <Link to='/about'>About Us </Link> 
          </li>
        <li className='hover:text-black cursor-pointer'>
          <Link to='/product'>Products</Link>
        </li>
        <li className='hover:text-black cursor-pointer'>
          <Link to='/contact'>Contact Us</Link>
          </li>
        

          
        <li className='hover:text-black cursor-pointer text-[1.7rem] relative'>
        <Link to="/cart">
        <span className='w-5 h-5 flex justify-center items-center  rounded-xl absolute bg-red-500 font-normal   text-white text-sm translate-x-5 -translate-y-1'>
            {items.length}
          </span>
          
             <FaShoppingCart/>
            
             </Link>
            
           
        </li>

      </ul>
      
      
   
    </div>
  )
}

export default Nav
