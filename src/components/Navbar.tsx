import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a 
            href="#home" 
            className={activeLink === 'home' ? 'active' : ''} 
            onClick={() => setActiveLink('home')}
          >
            HOME
          </a>
        </li>
        <li>
  <a 
    href="#about" 
    className={activeLink === 'about' ? 'active' : ''} 
    onClick={() => setActiveLink('about')}
  >
    ABOUT US
  </a>
</li>

        <li>
          <a 
            href="#services" 
            className={activeLink === 'services' ? 'active' : ''} 
            onClick={() => setActiveLink('services')}
          >
            TEAM
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeLink === 'contact' ? 'active' : ''} 
            onClick={() => setActiveLink('contact')}
          >
            SPONSORS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
