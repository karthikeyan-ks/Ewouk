import './Navbar.css';
import { useEffect, useState } from 'react';
import { FaHome, FaInfoCircle, FaUsers, FaHandshake, FaProductHunt } from 'react-icons/fa'; // Import icons from React Icons

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const tabIndex = localStorage.getItem("navbar") || "0"
  useEffect(() => {
    if (tabIndex === "0") {
      setActiveLink('home')
    }else if(tabIndex === "1") {
      setActiveLink('about')
    }else if(tabIndex === "2") {
      setActiveLink('team')
    }else {
      setActiveLink('sponsors')
    }
  },[])
  
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a
            href="/"
            className={activeLink === 'home' ? 'active' : ''}
            onClick={() => {
              setActiveLink('home')
              localStorage.setItem('navbar',"0")
            }}
          >
            <FaHome className="nav-icon" /> HOME
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => {
              setActiveLink('About')
              localStorage.setItem('navbar',"1")
            }}
          >
            <FaInfoCircle className="nav-icon" /> ABOUT US
          </a>
        </li>
        <li>
          <a
            href="/team"
            className={activeLink === 'team' ? 'active' : ''}
            onClick={() => {
              setActiveLink('team')
              localStorage.setItem('navbar',"2")
            }}
          >
            <FaUsers className="nav-icon" /> TEAM
          </a>
        </li>
        <li>
          <a
            href="/sponsers"
            className={activeLink === 'sponsors' ? 'active' : ''}
            onClick={() => {
              setActiveLink('sponsors')
              localStorage.setItem('navbar',"3")
            }}
          >
            <FaHandshake className="nav-icon" /> SPONSORS
          </a>
        </li>
        <li>
          <a
            href="/sponsers"
            className={activeLink === 'project' ? 'active' : ''}
            onClick={() => {
              setActiveLink('project')
              localStorage.setItem('navbar',"4")
            }}
          >
            <FaProductHunt className="nav-icon" /> PROJECT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
