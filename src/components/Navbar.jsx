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
   <nav className='flex shadow-2xl rounded-2xl px-5 h-18 font- justify-between items-center '>
     <h1 className=' font-bold text-2xl text-gray-600 text-shadow-lg'>Aqcora</h1>
   <div className=' hidden md:flex items-center gap-8 '>
    {
    navLinks.map((item) =>(
      <div key={item.id} className='flex text-xl font-medium text-gray-500  items-center gap-3 hover:text-gray-400 hover:text-[22px] text-shadow-lg  '>
       {item.navlink}
      </div>
    ))
   }
   </div>
   <div onClick={()=> setOpen(!open)} className='md:hidden'>
  {open ?  <MdCancel size={24}/> : <GiHamburgerMenu size={24} />}
   </div>
   </nav>
  {
  open && (
    <div className='bg-red-300 absolute'>
      <h1>jdihdihikd</h1>
    </div>
  )}
    </header>
  )
}

export default Navbar