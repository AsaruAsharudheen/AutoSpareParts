import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import './serviceDetailsPage.css';

const servicesData = [
  {
    title: 'Mechanic Masters',
    img: '/service-1.jpg',
    desc: 'Customer satisfaction is crucial for business as it leads to customer loyalty.',
    longDesc:
      'Our professional mechanics deliver high-quality work using modern tools and advanced diagnostic systems. With years of experience, we ensure your car gets the care it deserves.',
    extraImg: '/service-1.jpg',
    extraDesc:
      'We focus on precision, safety, and long-term durability. Every repair follows strict quality checks to ensure your vehicle performs at its best.',
  },
  {
    title: 'Speedy Auto Repair',
    img: '/service-2.jpg',
    desc: 'Fast and reliable automotive repair services with expert technicians.',
    longDesc:
      'We provide quick turnaround repair services without compromising quality. Our team uses advanced scanning tools to diagnose issues instantly.',
    extraImg: '/service-2.jpg',
    extraDesc:
      'Speed and accuracy make us different. Your car is repaired by certified experts ensuring long-lasting performance.',
  },
  {
    title: 'Precision Auto Works',
    img: '/service-3.jpg',
    desc: 'High precision repair services with modern diagnostic systems.',
    longDesc:
      'Using industry-grade equipment, we offer top-level precision repair services to keep your car running smoothly.',
    extraImg: '/service-3.jpg',
    extraDesc:
      'Precision matters. Every component, every bolt, every detail is handled with perfection.',
  },
  {
    title: 'Engine Diagnostics',
    img: '/service-1.jpg',
    desc: 'Advanced scanning tools to diagnose engine and sensor issues.',
    longDesc:
      'We use cutting-edge OBD scanners to detect engine faults within seconds. Get accurate diagnostics.',
    extraImg: '/service-1.jpg',
    extraDesc:
      'Our engine inspection includes sensor checks, fuel system testing, and ECU analysis.',
  },
  {
    title: 'Oil & Filter Change',
    img: '/service-2.jpg',
    desc: 'Quality lubricant oils and filters for long engine life.',
    longDesc:
      'We use premium oils to ensure maximum engine protection. Your car will run smoother and last longer.',
    extraImg: '/service-2.jpg',
    extraDesc:
      'Oil change includes a free 20-point vehicle inspection to ensure everything is safe and running well.',
  },
  {
    title: 'Wheel Alignment',
    img: '/service-3.jpg',
    desc: 'Precision alignment services for smooth and safe driving.',
    longDesc:
      'Precision wheel alignment ensures perfect balance and stability on every drive. Using advanced digital alignment machines, we accurately correct camber, caster, and toe angles to match manufacturer specifications. Poor alignment can cause uneven tire wear, reduced grip, and uncomfortable steering, which is why our expert technicians focus on delivering flawless accuracy. With our precision alignment service, you’ll experience smoother steering, improved road grip, better fuel efficiency, and enhanced overall safety on the road.',
    extraImg: '/service-3.jpg',
    extraDesc:
      'You will experience smoother steering, better grip, and improved comfort while driving with our precision alignment service. By correcting every angle with high-accuracy digital machines, your vehicle maintains perfect balance on the road. Proper alignment prevents unnecessary tire wear, ensuring longer tire life and safer driving. It also enhances the connection between the vehicle and the road surface, giving you better control during turns and braking. A well-aligned car requires less effort to steer, reducing driver fatigue on long journeys. You’ll notice increased stability even at higher speeds, making highway driving more confident and secure. The improved balance also boosts fuel efficiency by reducing friction and resistance. Your suspension system performs better, minimizing vibrations and noise inside the cabin. With precise alignment, the car responds instantly to your steering inputs, providing a smooth and refined driving feel. The enhanced traction helps your vehicle stay firmly planted during wet or slippery conditions. It also reduces strain on crucial components such as ball joints and tie rods. Drivers often report an immediate improvement in comfort after alignment correction. Every journey becomes more enjoyable with a car that moves effortlessly and predictably. Most importantly, proper alignment ensures long-term safety and optimal performance for your vehicle.',
  },
];

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = servicesData[id];

  return (
    <>
      <Navbar />

      {/* HERO IMAGE */}
      <div
        className="service-page-hero"
        style={{ backgroundImage: "url('/conatct-hero.jpg')" }}
      >
        <div className="service-page-hero-content">
          <h1>Service-Details</h1>
          <p>We provide premium auto spare parts with trusted quality.</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="service-details-container">
        <h1>{service.title}</h1>
        <p className="service-details-desc">{service.longDesc}</p>
        <div className="service-detail-page-image">
          <img
            src={service.extraImg}
            alt="service extra"
            className="service-details-img"
          />
          <img
            src={service.extraImg}
            alt="service extra"
            className="service-details-img"
          />
        </div>
        <p className="service-details-desc">{service.extraDesc}</p>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
