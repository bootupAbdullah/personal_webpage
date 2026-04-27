import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center px-8 py-3 md:px-16">
        <Link to="/" className="font-['Dancing_Script'] text-5xl font-normal text-[#d4a373] no-underline leading-none">
          akddev.co
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex flex-row gap-8 list-none m-0 p-0 font-['Merriweather'] text-sm font-normal">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-1 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#d4a373] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#d4a373] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#d4a373] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-5 list-none m-0 py-5 px-0 border-t border-[#e9edc9] bg-[#faf8f5] font-['Merriweather'] text-sm">
          <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink></li>
        </ul>
      )}

      <div className="h-[2px] bg-gradient-to-r from-[#d4a373] via-[#ccd5ae] to-transparent mx-8 md:mx-16" />
    </header>
  );
};

const NavLink = ({ to, children, onClick }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`no-underline relative pb-1 transition-colors duration-200
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
        after:bg-[#d4a373] after:transition-all after:duration-300
        ${isActive
          ? 'text-[#d4a373] font-semibold after:w-full'
          : 'text-[#444444] after:w-0 hover:text-[#d4a373] hover:after:w-full'
        }`}
    >
      {children}
    </Link>
  );
};

export default Nav;
