import React from 'react';
import './clients.css';

const statsData = [
  { count: '10+', label: 'YEARS OF SERVICE' },
  { count: '256+', label: 'HAPPY CUSTOMERS' },
  { count: '112+', label: 'CUSTOMER SATISFACTION' },
];

const clientLogos = [
  { src: '/trusted-client_1.png', alt: 'Lorem Ipsum' },
  { src: '/trusted-client_2.png', alt: 'Car Insurance' },
  { src: '/trusted-client_3.png', alt: 'Car Service' },
  { src: '/trusted-client_4.png', alt: 'Lorem Ipsum' },
  { src: '/trusted-client_5.png', alt: 'Racing Car' },
  { src: '/trusted-client_7.png', alt: 'Lorem Ipsum' },
  { src: '/trusted-client_2.png', alt: 'Car Electric' },
];

const StatsClients = () => {
  return (
    <section className="stats-clients-section">
      <div className="stats-container">
        {/* --- Top Row: Statistics --- */}
        <div className="stats-row">
          {statsData.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h3 className="stat-count">{stat.count}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="client-container">
        {/* --- Middle Separator: Trusted Client Text --- */}
        <h4 className="client-header">Trusted Client</h4>

        {/* --- Bottom Row: Logos (For Scrolling) --- */}
        {/* NOTE: The padding on the client-container should be handled by an inner wrapper 
           or you should adjust the styles to account for the overflow: hidden 
           on the .stats-clients-section parent. */}
        <div className="scrolling-logo-track">
            <div className="client-logos-row">
              {/* RENDER LOGOS TWICE FOR SEAMLESS SCROLLING */}
              
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div className="client-logo-item" key={`set1-${index}`}>
                  <img src={logo.src} alt={logo.alt} className="client-logo-img" />
                  <p className="logo-text">{logo.alt}</p>
                </div>
              ))}
              
              {/* Second set of logos (Duplication for the loop) */}
              {clientLogos.map((logo, index) => (
                <div className="client-logo-item" key={`set2-${index}`}>
                  <img src={logo.src} alt={logo.alt} className="client-logo-img" />
                  <p className="logo-text">{logo.alt}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default StatsClients;