import React, { useState } from 'react';
import './header.css';
import {Link} from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
    <header className="header">
      <div className="logo">TattooGoth</div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a ><Link to="/">Home</Link></a>

        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span>Artist</span>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
             <a><Link to="/michael">michael</Link></a>
              <a><Link to="/jesse">jesse</Link></a>
               <a><Link to="/aura">aura</Link></a>
          </div>
        </div>

        <a><Link to="/about">About</Link></a>
        <a><Link to="/contact">Contact</Link></a>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
    </>
  );
};

export default Header;
