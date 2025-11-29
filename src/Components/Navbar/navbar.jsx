import React, { useEffect, useState } from 'react';
import './navbar.css';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close mobile menu
  };

  return (
    <>
      {/* Navbar */}
      <div className={`navbar-top-wrapper ${sticky ? 'sticky-nav' : ''}`}>
        <div className="navbar-main">

          {/* Logo */}
          <div className="nav-logo" onClick={() => handleNavigate('/')}>
            <span className="logo-text">Cas</span>
          </div>

          {/* Desktop Links */}
          <div className="nav-links">
            <a onClick={() => handleNavigate('/')}>HOME</a>
            <a onClick={() => handleNavigate('/about-page')}>ABOUT</a>
            <a onClick={() => handleNavigate('/servicePage')}>SERVICE</a>
            <a onClick={() => handleNavigate('/gallery-page')}>CATEGORIES</a>
            <a onClick={() => handleNavigate('/contact')}>CONTACT</a>
          </div>

          {/* Desktop Phone */}
          <div className="nav-contact-call">
            <FaPhoneAlt className="phone-icon" />
            <span>1-800-915-6271</span>
          </div>

          {/* Mobile Hamburger */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>

        </div>
      </div>

      {/* Mobile Menu Modal */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-close" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </div>

          <div className="mobile-menu">
            <a onClick={() => handleNavigate('/')}>HOME</a>
            <a onClick={() => handleNavigate('/about-page')}>ABOUT</a>
            <a onClick={() => handleNavigate('/servicePage')}>SERVICE</a>
            <a onClick={() => handleNavigate('/gallery-page')}>CATEGORIES</a>
            <a onClick={() => handleNavigate('/contact')}>CONTACT</a>

            <div
              className="nav-contact-call"
              style={{ marginTop: '30px' }}
            >
              <FaPhoneAlt />
              <span>1-800-915-6271</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
