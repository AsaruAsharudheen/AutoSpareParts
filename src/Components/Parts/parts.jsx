import "./parts.css";

const Parts = () => {
  const parts = [
    { img: "engine-1.jpg", title: "Engine Parts" },
    { img: "/brake.jpg", title: "Brake System" },
    { img: "clutch.jpg", title: "Clutch Plate" },
    { img: "/f2894ba56accf8c5f6da59b2a0062721.jpg", title: "AC Compressor" },
    { img: "/frontbumber.jpg", title: "Front Bumper" },
    { img: "/airfilter.jpg", title: "Air Filter" },
    { img: "/shockabsarber.jpg", title: "Shock Absorber" },
    { img: "/gearbox.jpg", title: "Gearbox" },
  ];

  return (
    <div className="parts-section">
           <p className="service-topline">
        <span></span> CATEGORIES <span></span>
      </p>
      <h2 className="parts-title">Explore Our Categories</h2>
    <p className="gallery-subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </p>
      <div className="parts-grid">
        {parts.map((item, index) => (
          <div className="parts-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="parts-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
