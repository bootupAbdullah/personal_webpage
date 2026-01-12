import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul id='nav-buttons'>
          <li id='line-item-1'><Link to="/">Home</Link></li>
          <li id='line-item-3'><Link to="/contact">Contact</Link></li>
          <li id='line-item-4'><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <div id='navbar-line'></div>
    </div>
  );
}

export default Nav;
