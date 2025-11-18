import './navbar.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      {/* Top Navbar Section */}
      <div className="navbar-top-wrapper">
        <div className="navbar-main">
          {/* Left: Logo/Title */}
          <div className="nav-logo">
            {/* The actual image in the screenshot looks like a logo and text.
                We'll use text here, styled to look like "Cas" */}
            <span className="logo-text">Cas</span>
          </div>

          {/* Center: Main Navigation Links */}
          <div className="nav-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#service">SERVICE</a>
            <a href="#blog">BLOG</a>
            <a href="#pages">PAGES</a>
            <a href="#contact">CONTACT</a>
          </div>

          {/* Right: Phone Number */}
          <div className="nav-contact-call">
            <FaPhoneAlt className="phone-icon" />
            <span>1-800-915-6271</span>
          </div>
        </div>
      </div>

      {/* Bottom Contact Bar (The one below the main nav, over the background image) */}
      {/* NOTE: The background image/color needs to be applied to the parent container 
          or body for the transparency to show the image behind it. */}
      <div className="navbar-bottom-contact-bar">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">example@email.com</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span className="contact-text">123 Maple Street, Toronto, ON, Canada</span>
        </div>
        <div className="contact-item">
          <FaClock className="contact-icon" />
          <span className="contact-text">Sun - Thu: Open 24/7</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;