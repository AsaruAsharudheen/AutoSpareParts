import React from "react";
import "./footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <h2>Your premier destination for<br/> top-quality Japanese car spare parts.</h2>
          <p>
            For over two decades, Popular Auto Spare Parts have delivered exceptional 
            quality and reliability, earning trust globally for our extensive 
            range of spare parts and dedicated customer service.
          </p>
        </div>

        {/* MIDDLE QUICK LINKS */}
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><span></span> About Us</li>
            <li><span></span> Our Products</li>
            <li><span></span> Our Team</li>
            <li><span></span> Contact</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h3>Head Office</h3>

          <div className="footer-info">
            <FaMapMarkerAlt className="icon" />
            <p>
              Popular Auto Sparts Parts Trading L.L.C, Near Mark Inn Hotel,  
              Baniyas Square, Deira, Dubai United Arab Emirates
            </p>
          </div>

          <div className="footer-info">
            <FaEnvelope className="icon" />
            <p>info@populardxb.com</p>
          </div>

          <div className="footer-info">
            <FaPhoneAlt className="icon" />
            <p>+971 4 221 6100</p>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom-line"></div>

      {/* COPYRIGHT */}
      <p className="footer-copy">
        All Rights Reserved | Popular Auto Spare Parts 2025
      </p>
    </footer>
  );
};

export default Footer;
