import React from 'react';
import './hero.css';
import Navbar from '../Navbar/navbar';
import SelectCar from '../SelectCar/selectcar';

const Hero = () => {
  return (
    <>
      <Navbar />

      <div className="hero-container">
        <div className="hero-overlay"></div>

        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-top-text">
            <span className="line"></span>
            GROWTH ACCELERATOR
          </p>

          <h1 className="hero-title">
            Crafting Automotive <span>Excellence</span> One <br />
            Repair At Time
          </h1>

          <p className="hero-subtext">
            Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus.
            Etiam molestie justo neque, in convallis massa tempus in.
          </p>

          <div className="hero-buttons">
            <button className="learn-more-btn">LEARN MORE</button>

            <div className="call-box">
              <div className="call-icon"><i class="fa-solid fa-phone"></i></div>
              <div className="call-info">
                <p className="call-text">Requesting A Call:</p>
                <p className="call-number">(629) 555-0129</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side background image */}
        <div className="hero-image"></div>

        {/* SelectCar OUTSIDE image */}
        <div className="selectcar-box">
          <SelectCar />
        </div>

      </div>
    </>
  );
};

export default Hero;
