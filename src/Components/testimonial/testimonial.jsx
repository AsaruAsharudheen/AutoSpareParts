import React from 'react';
import './testimonial.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Assuming you use react-icons

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header-container">
        <div className="testimonial-title-group">
          {/* Main Title */}
          <h2 className="testimonial-main-title">
            SEE WHAT OUR SATISFIED
            <br />
            CUSTOMER SAYS
          </h2>
          {/* Ghosted Background Text */}
          <span className="testimonial-ghost-text">TESTIMONIAL</span>
        </div>

        {/* Navigation Arrows */}
        <div className="testimonial-nav-arrows">
          <button className="nav-arrow prev-arrow">
            <FaArrowLeft /> PREV
          </button>
          <button className="nav-arrow next-arrow">
            NEXT <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Main Testimonial Card */}
      <div className="testimonial-card">
        
        {/* Left Side: Quote and Text */}
        <div className="testimonial-content-box">
          
          {/* Customer Info */}
          <div className="customer-info">
            <h3 className="customer-name">Roberts Bush</h3>
            <p className="customer-location">From Canada</p>
          </div>

          {/* Quote */}
          <div className="quote-text-container">
            <span className="quote-marks">“</span>
            <p className="quote-text">
              “There are many variations of passages of Lorem Ipsum available, but the majority have 
              suffered alteration in some form injected humour, or randomised”
            </p>
          </div>
        </div>

        {/* Right Side: Customer Image with Dynamic Shape */}
        <div className="customer-image-wrapper">
          <img 
            src="/testimaonial.png" 
            alt="Smiling customer giving thumbs up" 
            className="customer-image" 
          />
          {/* The red diagonal shape is achieved with CSS pseudo-elements */}
        </div>
      </div>
      
    
    </section>
  );
};

export default Testimonial;