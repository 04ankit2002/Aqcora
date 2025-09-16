import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

function Navbar() {
  const navLinks = [
    { id: 1, navlink: 'Home' },
    { id: 2, navlink: 'About' },
    { id: 3, navlink: 'Product' },
    { id: 4, navlink: 'Contact' }
  ];
  const [open,setOpen] = useState(false);
  
  return (
    <header className='py-5'>
   <nav className='flex shadow-xl rounded-2xl px-5 h-18 f justify-between items-center '>
     <h1 className=' font-bold text-3xl text-gray-600 text-shadow-lg cursor-pointer'>Aqcora</h1>
   <div className=' hidden md:flex items-center gap-8 '>
    {
    navLinks.map((item) =>(
      <div key={item.id} className=' cursor-pointer flex text-xl font-medium text-gray-500  items-center gap-3 hover:text-gray-400 hover:scale-110 text-shadow-md  transition-all duration-300 ease-in-out  '>
       {item.navlink}
      </div>
    ))
   }
   </div>
   <div onClick={()=> setOpen(!open)} className=' cursor-pointer md:hidden'>
  {open ?  <MdCancel size={24}/> : <GiHamburgerMenu size={24} />}
   </div>
   </nav>
  {
  open && (
    <div className='cursor-pointer absolute flex flex-col items-center w-full gap-5 shadow-xl top-25 '>
      {
        navLinks.map((item) => (
          <p key={item.id} className='text-xl font-medium text-gray-500  items-center gap-3 hover:text-gray-400 hover:scale-110 text-shadow-md  transition-all duration-300 ease-in-out'>{item.navlink}</p>
        ))
      }
    </div>
  )}
    </header>
  )
}

export default Navbar