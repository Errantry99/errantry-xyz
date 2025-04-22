import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('#')) {
      // For hash links, scroll to the element
      const elementId = path.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For regular paths, use React Router navigation
      navigate(path);
    }
  };

  return (
    <header className="app-header" role="banner">
      <nav className="nav-container" role="navigation" aria-label="Main navigation">
        <div className="logo">
          <Link to="/" aria-label="Home">Errantry.xyz</Link>
        </div>
        
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="nav-links"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <span className="hamburger"></span>
        </button>

        <div 
          id="nav-links" 
          className={`nav-links ${isMenuOpen ? 'open' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <button onClick={() => handleNavigation('#about')}>About</button>
          <button onClick={() => handleNavigation('#projects')}>Projects</button>
          <button onClick={() => handleNavigation('#contact')}>Contact</button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 