import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center px-8 py-3 md:px-16">
        <Link to="/" className="font-['Dancing_Script'] text-5xl font-normal text-[var(--theme-accent)] no-underline leading-none">
          akddev.co
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop links */}
          <ul className="hidden md:flex flex-row gap-8 list-none m-0 p-0 font-['Merriweather'] text-sm font-normal">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
          </ul>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden bg-transparent border-none cursor-pointer p-1 flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[var(--theme-accent)] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--theme-accent)] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--theme-accent)] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-5 list-none m-0 py-5 px-0 border-t border-[#e9edc9] dark:border-[#333333] go:border-[#2A4A5E] bg-[#faf8f5] dark:bg-[#111111] go:bg-[#0F1F2E] font-['Merriweather'] text-sm">
          <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink></li>
        </ul>
      )}

      <div className="h-[2px] bg-gradient-to-r from-[var(--theme-accent)] via-[#ccd5ae] go:via-[#007D9C] to-transparent mx-8 md:mx-16" />
    </header>
  );
};

const ThemeToggle = () => {
  const { theme, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className="text-base bg-transparent border-none cursor-pointer p-1 transition-transform duration-200 hover:scale-110 leading-none"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
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
        after:bg-[var(--theme-accent)] after:transition-all after:duration-300
        ${isActive
          ? 'text-[var(--theme-accent)] font-semibold after:w-full'
          : 'text-[#444444] dark:text-[#cccccc] after:w-0 hover:text-[var(--theme-accent)] hover:after:w-full'
        }`}
    >
      {children}
    </Link>
  );
};

export default Nav;
