import React from 'react';
import './footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoIosSend } from "react-icons/io"; // Assuming this is used for the send button

const Footer = () => {
  return (
    <footer className="main-footer">
      
      {/* --- 1. Top Newsletter Strip --- */}
      <div className="newsletter-strip-wrapper">
        <div className="newsletter-container">
          <div className="newsletter-text-content">
            <h3 className="newsletter-title">
              SIGN UP FOR OUR NEWSLETTER TO GET WEEKLY UPDATES
            </h3>
            <p className="newsletter-subtitle">
              ON EXCLUSIVE OFFERS AND DISCOUNTS!
            </p>
          </div>
          
          <div className="newsletter-input-group">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="newsletter-input" 
            />
            <button className="newsletter-send-button">
              <IoIosSend />
            </button>
          </div>
        </div>
      </div>
      
      {/* --- 2. Main Footer Content --- */}
      <div className="footer-content-main">
        <div className="footer-columns-container">
          
          {/* Column 1: Logo & Info */}
          <div className="footer-col footer-col-info">
            <div className="footer-logo">
              {/* Assuming the "Cras" icon/logo is an image or SVG */}
              <img src="/logo-cras.png" alt="Cras Logo" className="logo-icon" /> 
              <span>Cras</span>
            </div>
            <p className="footer-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum is.
            </p>
            <div className="footer-phone-contact">
              <FaPhoneAlt className="contact-icon" />
              <span className="phone-number">(406) 555-0120</span>
            </div>
          </div>
          
          {/* Column 2: Quick Link 1 */}
          <div className="footer-col">
            <h4 className="footer-heading">QUICK LINK</h4>
            <ul className="footer-link-list">
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Column 3: Quick Link 2 */}
          <div className="footer-col">
            <h4 className="footer-heading">QUICK LINK</h4>
            <ul className="footer-link-list">
              <li><a href="/appointment">Appointment</a></li>
              <li><a href="/blog">Blog / News</a></li>
              <li><a href="/faq">FAQ Question</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">LOCATION & CONTACT</h4>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon red-icon" />
              <p>901 N Pitt St., Suite 170<br />Alexandria, NY, USA</p>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon red-icon" />
              <p>example@email.com</p>
            </div>

            <div className="contact-item">
              <FaClock className="contact-icon red-icon" />
              <p>Sun - Thur: Open 27/7</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* --- 3. Bottom Copyright Bar --- */}
      <div className="footer-bottom-bar">
        <div className="bottom-bar-content">
          <p className="copyright-text">
            Copyright 2025. All Right reserved
          </p>
          <div className="social-links">
            <a href="https://linkedin.com"><FaLinkedinIn /></a>
            <a href="https://instagram.com"><img src="/instagram-icon.png" alt="Instagram" /></a> {/* Placeholder for the custom 'i' or icon */}
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://twitter.com"><img src="/twitter-x.png" alt="Twitter/X" /></a> {/* Placeholder for the custom 'X' icon */}
          </div>
        </div>
        
        {/* Scroll to Top button (Optional, often done via a fixed element) */}
        <a href="#top" className="footer-scroll-top-arrow">↑</a>
      </div>
    </footer>
  );
};

export default Footer;