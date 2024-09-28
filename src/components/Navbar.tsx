import './Navbar.css';
import { useState } from 'react';
import { FaHome, FaInfoCircle, FaUsers, FaHandshake } from 'react-icons/fa'; // Import icons from React Icons

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a 
            href="/" 
            className={activeLink === 'home' ? 'active' : ''} 
            onClick={() => setActiveLink('home')}
          >
            <FaHome className="nav-icon" /> HOME
          </a>
        </li>
        <li>
          <a 
            href="/about" 
            className={activeLink === 'about' ? 'active' : ''} 
            onClick={() => setActiveLink('about')}
          >
            <FaInfoCircle className="nav-icon" /> ABOUT US
          </a>
        </li>
        <li>
          <a 
            href="/team" 
            className={activeLink === 'team' ? 'active' : ''} 
            onClick={() => setActiveLink('team')}
          >
            <FaUsers className="nav-icon" /> TEAM
          </a>
        </li>
        <li>
          <a 
            href="/sponsors" 
            className={activeLink === 'sponsors' ? 'active' : ''} 
            onClick={() => setActiveLink('sponsors')}
          >
            <FaHandshake className="nav-icon" /> SPONSORS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
