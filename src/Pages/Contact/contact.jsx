import Footer from '../../Components/Footer/footer';
import Navbar from '../../Components/Navbar/navbar';
import './contact.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="contact-hero"
        style={{ backgroundImage: "url('/conatct-hero.jpg')" }}
      >
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We’re here to help you with all your auto spare parts needs.</p>
        </div>
      </div>

      {/* CONTACT MAIN CONTAINER */}
      <div className="contact-container">
        {/* LEFT FORM SECTION */}

        {/* RIGHT INFO BOX */}
        <div className="contact-info-box">
          <h2>Get in Touch</h2>

          <div className="info-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>support@autospareparts.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>AutoSpareParts Street, Kochi, Kerala</span>
          </div>

          <div className="info-item">
            <FaClock />
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>

          <div className="info-bottom-text">
            We value your time. Reach out anytime and our support team will
            assist you.
          </div>
        </div>
        <div className="contact-form-box">
          <h2>Send Us a Message</h2>
          <p>
            Have any questions? Fill out the form below and we'll get back to
            you shortly.
          </p>

          <form className="contact-form">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Write your message"></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* MAP SECTION */}
      <div className="map-section">

        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.097441938753!2d76.267304!3d9.931232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d4c9e8893c5%3A0xd1a0bbf6b59f8c7d!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
