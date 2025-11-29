import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import './about-page.css';
import { FaTools, FaShippingFast, FaThumbsUp, FaHeadset } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="about-page-hero"
        style={{ backgroundImage: "url('/conatct-hero.jpg')" }}
      >
        <div className="about-page-hero-content">
          <h1>About Us</h1>
          <p>Your trusted partner for premium auto spare parts.</p>
        </div>
      </div>

      <div className="about-page-features">
        <div className="about-page-feature-item">
          <FaTools className="about-icon" />
          <h3>Premium Quality Parts</h3>
          <p>Only trusted and genuine auto spare parts for all car models.</p>
        </div>

        <div className="about-page-feature-item">
          <FaShippingFast className="about-icon" />
          <h3>Fast Delivery</h3>
          <p>Quick and safe delivery across India with real-time tracking.</p>
        </div>

        <div className="about-page-feature-item">
          <FaThumbsUp className="about-icon" />
          <h3>Trusted Service</h3>
          <p>Thousands of customers rely on our quality and commitment.</p>
        </div>

        <div className="about-page-feature-item">
          <FaHeadset className="about-icon" />
          <h3>24/7 Support</h3>
          <p>Our support team is always available to assist you.</p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about-page-container">
        <div className="about-page-content">
          <h2>Who We Are</h2>
          <p>
            We are one of India's leading auto spare parts suppliers delivering
            high-quality car parts with trusted service and reliability. With
            years of experience, we ensure customers receive the best automotive
            components at unbeatable prices.
          </p>

          <p>
            Our mission is to provide every customer with genuine parts, fast
            delivery, and excellent customer support. Whether you need engine
            components, brake systems, filters, or AC units— we’ve got you
            covered.
          </p>
        </div>

        <div className="about-page-image">
          <img src="/gallery-3.jpg" alt="About Auto Spare Parts" />
        </div>
      </div>

      {/* FEATURES SECTION */}

      {/* MISSION & VISION */}
      <div className="about-page-mission">
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To deliver reliable, genuine, and affordable car spare parts to
            every customer with best-in-class service and fast delivery.
          </p>
        </div>

        <div className="mission-box">
          <h2>Our Vision</h2>
          <p>
            To become India’s most trusted and customer-friendly automobile
            spare parts supplier with 100% satisfaction.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
