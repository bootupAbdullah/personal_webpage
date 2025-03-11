import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
      <div>
        <nav className='navbar'>
        <h2 id="site-title">akddev.co</h2>
          <ul id='nav-buttons'>
            <li id='line-item-1'><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">SEB 10/15</a></li>
          </ul>
        </nav>
        {/* Add more content here */}
      </div>
    );
  }

  export default Nav