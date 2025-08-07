import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to="/" id="site-title">akddev.co</Link>
        <ul id='nav-buttons'>
          <li id='line-item-1'><Link to="/">Home</Link></li>
          <li id='line-item-2'><Link to="/about">About</Link></li>
          <li id='line-item-3'><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div id='navbar-line'></div>
    </div>
  );
}

export default Nav;
