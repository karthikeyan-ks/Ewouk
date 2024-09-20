
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#services">TEAM</a></li>
        <li><a href="#contact">SPONSORS</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
