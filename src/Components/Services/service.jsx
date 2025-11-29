import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: 'Mechanic Masters',
    img: '/service-1.jpg',
    icon: '🚗',
    desc: 'Customer satisfaction is crucial for business as it leads to customer loyalty.',
  },
  {
    title: 'Speedy Auto Repair',
    img: '/service-2.jpg',
    icon: '🔧',
    desc: 'Fast and reliable automotive repair services with expert technicians.',
  },
  {
    title: 'Precision Auto Works',
    img: '/service-3.jpg',
    icon: '🛠️',
    desc: 'High precision repair services with modern diagnostic systems.',
  },
];

const Services = () => {
  return (
    <div className="services-wrapper" id="service">
      <p className="service-topline">
        <span></span> OUR SERVICES <span></span>
      </p>

      <h2 className="service-heading">
        Trusted Car Repair the
        <br /> Professionals
      </h2>
      <p className="gallery-subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <div className="services-grid">
        {servicesData.map((item, i) => (
          <Link
            to={`/service-details/${i}`}
            key={i}
            className="service-page-link"
          >
            <div className="service-card" key={i}>
              <img src={item.img} className="service-img" alt={item.title} />

              {/* Hover Content */}
              <div className="service-hover">
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              {/* Bottom Title (when not hovered) */}
              <div className="service-title-bar">
                <h3>{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
