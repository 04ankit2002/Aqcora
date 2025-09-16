import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

function Navbar() {
  const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#products" },
  { name: "Contact", href: "#contact" },
];
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center bg-white/70 backdrop-blur-md shadow-md rounded-2xl px-6 py-3">
        {/* Logo */}
        <h1 className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent cursor-pointer">
          Aqcora
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item,key) => (
            <a
              key={key}
              href={item.href}
              className="relative text-lg font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden text-gray-700"
        >
          {open ? <MdCancel size={28} /> : <GiHamburgerMenu size={28} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className=" absolute left-0 top-[70px] w-full bg-white/95 backdrop-blur-md shadow-md flex flex-col items-center py-6 gap-6 md:hidden animate-fade-in ">
          {navItems.map((item,key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-gray-600 hover:text-blue-600 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
