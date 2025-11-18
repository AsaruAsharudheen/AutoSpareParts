import React from 'react';
import './service.css';

const servicesData = [
  {
    id: 1,
    title: 'PERFORMANCE UPGRADES AND CUSTOMIZATION',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
    imagePath: '/service_1.webp' // Placeholder path for the top image
  },
  {
    id: 2,
    title: 'PERFORMANCE UPGRADES AND CUSTOMIZATION',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
    imagePath: '/service_2.webp' // Placeholder path for the middle image
  },
  {
    id: 3,
    title: 'PERFORMANCE UPGRADES AND CUSTOMIZATION',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
    imagePath: '/service_3.webp' // Placeholder path for the bottom image
  }
];

const DedicatedServices = () => {
  return (
    <section className="dedicated-services-section">
      <div className="services-container">
        {/* --- Left Column: Introduction --- */}
        <div className="services-intro">
          <h2 className="intro-title-line1">DEDICATED</h2>
          <h2 className="intro-title-line2">SERVICES</h2>
          
          <p className="intro-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's stan. Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum.
          </p>
          
          <a href="#all-services" className="view-all-button">VIEW ALL SERVICES</a>
        </div>

        {/* --- Right Column: Service List --- */}
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div className="service-item" key={service.id}>
              {/* Image Column */}
              <div className="service-image-box">
                <img src={service.imagePath} alt={`Service ${service.id}`} className="service-image" />
              </div>

              {/* Text Content Column */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={`#service-${service.id}`} className="view-more-link">VIEW MORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll-to-top button (if desired) */}

    </section>
  );
};

export default DedicatedServices;