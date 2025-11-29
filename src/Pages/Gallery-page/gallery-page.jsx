import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import './gallery-page.css';

const GalleryPage = () => {
  const partsImages = [
    { img: 'engine-1.jpg', title: 'Engine Parts' },
    { img: '/brake.jpg', title: 'Brake System' },
    { img: 'clutch.jpg', title: 'Clutch Plate' },
    { img: '/f2894ba56accf8c5f6da59b2a0062721.jpg', title: 'AC Compressor' },
    { img: '/frontbumber.jpg', title: 'Front Bumper' },
    { img: '/airfilter.jpg', title: 'Air Filter' },
    { img: '/shockabsarber.jpg', title: 'Shock Absorber' },
    { img: '/gearbox.jpg', title: 'Gearbox' },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="gallery-page-hero"
        style={{ backgroundImage: "url('/conatct-hero.jpg')" }}
      >
        <div className="gallery-page-hero-content">
          <h1>CATEGORIES</h1>
          <p>Explore our wide collection of high-quality auto spare parts.</p>
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="gallery-page-container">
        <h2 className="gallery-page-title">Our Spare Parts Collection</h2>

        <div className="gallery-page-grid">
          {partsImages.map((item, index) => (
            <div className="gallery-page-card" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-page-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GalleryPage;
