import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
      <div>
        <nav className='navbar'>
        <h2 id="site-title">akddev.co</h2>
          <ul id='nav-buttons'>
            <li id='line-item-1'><a href="#">Home</a></li>
            <li id='line-item-2'><a href="#">About</a></li>
            <li id='line-item-3'><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div id='navbar-line'></div>
      </div>
    );
  }

  export default Nav




  // const Nav = () => {
  //   return (
  //     <div>
  //       <nav className='navbar'>
  //       <h2 id="site-title">akddev.co</h2>
  //        {/* <div id='nav-button-container'> */}
  //         <ul id='nav-buttons'>
  //           <li id='line-item-1'><a href="#">Home</a></li>
  //           <li id='line-item-2'><a href="#">About</a></li>
  //           <li id='line-item-3'><a href="#">Contact</a></li>
  //           <li id='line-item-4'><a href="#">SEB 10/15</a></li>
  //         </ul>
  //       {/* </div>    */}
  //       </nav>
  //       {/* Add more content here */}
  //     </div>
  //   );
  // }