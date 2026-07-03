import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/navbar.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="nav-logo-zone">
          <Link to="/" className="nav-brand" onClick={() => setIsOpen(false)}>
            FASHIONIZE<span className="logo-dot">.</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/platform" className="nav-item" onClick={() => setIsOpen(false)}>
            Platform
          </Link>
          <Link to="/usecase" className="nav-item" onClick={() => setIsOpen(false)}>
            Use Cases
          </Link>
          <Link to="/company" className="nav-item" onClick={() => setIsOpen(false)}>
            Company
          </Link>
          <Link to="/resources" className="nav-item" onClick={() => setIsOpen(false)}>
            Resources
          </Link>
          <Link to="/contact" className="nav-item nav-contact-btn" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;