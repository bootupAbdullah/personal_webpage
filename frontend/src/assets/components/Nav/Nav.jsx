import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ isDarkMode, toggleTheme }) => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-title-container'>
        <Link to="/" id="site-title">akddev.co</Link>
        </div>
        <div className='nav-buttons=container'>
        <ul id='nav-buttons'>
          <li id='line-item-1'><Link to="/">Home</Link></li>
          <li id='line-item-2'><Link to="/about">About</Link></li>
          <li id='line-item-3'><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
        
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </nav>
      <div id='navbar-line'></div>
    </div>
  );
}

export default Nav;