import Footer from '../../Components/Footer/footer';
import Navbar from '../../Components/Navbar/navbar';
import './service-page.css';
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
  {
    title: 'Engine Diagnostics',
    img: '/service-1.jpg',
    icon: '💡',
    desc: 'Advanced scanning tools to diagnose engine and sensor issues.',
  },
  {
    title: 'Oil & Filter Change',
    img: '/service-2.jpg',
    icon: '🛢️',
    desc: 'Quality lubricant oils and filters for long engine life.',
  },
  {
    title: 'Wheel Alignment',
    img: '/service-3.jpg',
    icon: '🛞',
    desc: 'Precision alignment services for smooth and safe driving.',
  },
];


const ServicePage = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="service-page-hero"
        style={{ backgroundImage: "url('/conatct-hero.jpg')" }}
      >
        <div className="service-page-hero-content">
          <h1>Our Services</h1>
          <p>We provide premium auto spare parts with trusted quality.</p>
        </div>
      </div>

      <div className="service-page-wrapper" id="service">
        {/* TOP LINE */}
        <p className="service-page-topline">
          <span></span> OUR SERVICES <span></span>
        </p>

        {/* HEADING */}
        <h2 className="service-page-heading">
          Trusted Car Repair by the <br /> Professionals
        </h2>

        {/* SUBTEXT */}
        <p className="service-page-subtext">
          We provide expert car care solutions with advanced tools and trusted
          technicians.
        </p>

        {/* GRID */}
        <div className="service-page-grid">
          {servicesData.map((item, i) => (
            <Link
              to={`/service-details/${i}`}
              key={i}
              className="service-page-link"
            >
              <div className="service-page-card">
                <img
                  src={item.img}
                  className="service-page-img"
                  alt={item.title}
                />

                {/* Hover Section */}
                <div className="service-page-hover">
                  <div className="service-page-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                {/* Bottom Bar */}
                <div className="service-page-title-bar">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
