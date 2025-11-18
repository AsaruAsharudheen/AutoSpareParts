import StatsClients from '../Clients/clients';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';
import SelectCar from '../SelectCar/selectcar';
import DedicatedServices from '../Services/service';
import Testimonial from '../testimonial/testimonial';
import './hero.css';
import { FaWifi, FaCarCrash, FaTruck } from 'react-icons/fa';
const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero-main">
        <div className="left-hero-box">
          <SelectCar />
        </div>
        <div className="right-hero-img">
          <img src="/hero_slider_bg_1.png" alt="Hero" />
        </div>
      </div>

      <section className="services-section">
        <div className="container">
          {' '}
          {/* Optional: for max-width centering */}
          <div className="service-header">
            <div className="step-indicator">
              <span className="step-number">01</span>
              <hr className="step-line" />
            </div>
            <div className="step-indicator">
              <span className="step-number">02</span>
              <hr className="step-line" />
            </div>
            <div className="step-indicator">
              <span className="step-number">03</span>
              <hr className="step-line" />
            </div>
            {/* You can add more steps or adjust this header as needed */}
          </div>
          <div className="service-cards-grid">
            {/* Service Card 1 */}
            <div className="service-card">
              <div className="card-icon">
                <FaWifi /> {/* Choose an appropriate icon */}
              </div>
              <h3 className="card-title">PERFORMANCE CHECK</h3>
              <p className="card-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's stan.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="service-card">
              <div className="card-icon">
                <FaCarCrash /> {/* Choose an appropriate icon */}
              </div>
              <h3 className="card-title">AUTO REPAIR</h3>
              <p className="card-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's stan.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="service-card">
              <div className="card-icon">
                <FaTruck /> {/* Choose an appropriate icon */}
              </div>
              <h3 className="card-title">FLEET SERVICES</h3>
              <p className="card-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's stan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="choose-us-section">
        <div className="choose-us-container">
          {/* --- Left Content Box --- */}
          <div className="choose-us-content">
            <h2 className="section-title">WHY CHOOSE US</h2>

            {/* Main feature description */}
            <p className="section-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>

            {/* List of features/benefits */}
            <ul className="feature-list">
              <li>CERTIFIED TECHNICIANS</li>
              <li>COMPREHENSIVE REPAIR SERVICES</li>
              <li>900 FIVE STAR REVIEWS</li>
              <li>WARRANTY ON REPAIRS</li>
            </ul>

            {/* Action Button */}
            <button className="choose-us-button">VIEW MORE</button>
          </div>

          {/* --- Right Image Box --- */}
          <div className="choose-us-image-box">
            {/* Main Image */}
            <img
              src="/choose-us.png"
              alt="Mechanic working on car engine"
              className="main-mechanic-img"
            />

            {/* Circle Logo Overlay */}
            <div className="circle-overlay-wrapper">
              <img
                src="/Circle.png"
                alt="Car Repair & Auto Services Circle Logo"
                className="circle-logo-img"
              />
              {/* The text "CAR REPAIR & AUTO SERVICES" is part of the image, 
               but we wrap it just in case */}
              <span className="circle-text"></span>
            </div>
          </div>
        </div>
      </section>
      <DedicatedServices />
      <StatsClients />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Hero;
