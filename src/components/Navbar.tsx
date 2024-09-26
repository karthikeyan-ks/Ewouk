import './Navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faHome} /> HOME
          </a>
        </li>
        <li>
          <a 
            href="/About" 
            className={activeLink === 'about' ? 'active' : ''} 
            onClick={() => setActiveLink('about')}
          >
            <FontAwesomeIcon icon={faInfoCircle} /> ABOUT US
          </a>
        </li>
        <li>
          <a 
            href="/team" 
            className={activeLink === 'services' ? 'active' : ''} 
            onClick={() => setActiveLink('services')}
          >
            <FontAwesomeIcon icon={faUsers} /> TEAM
          </a>
        </li>
        <li>
          <a 
            href="/sponsors" 
            className={activeLink === 'contact' ? 'active' : ''} 
            onClick={() => setActiveLink('contact')}
          >
            <FontAwesomeIcon icon={faHandshake} /> SPONSORS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
