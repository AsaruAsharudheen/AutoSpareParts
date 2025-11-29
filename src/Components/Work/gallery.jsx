import React from "react";
import "./gallery.css";

const galleryData = [
  { img: "/gallery-1.jpg" },
  { img: "/gallery-2.jpg" },
  { img: "/gallery-3.jpg" },
  { img: "/gallery-4.jpg" },
  { img: "/gallery-5.jpg" },
  { img: "/gallery-6.jpg" },
];

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      
      {/* TOP LINE + TITLE */}
      <p className="gallery-topline">
        <span></span> OUR WORK <span></span>
      </p>

      <h2 className="gallery-heading">Our Featured Gallery</h2>

      <p className="gallery-subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </p>

      {/* GALLERY GRID */}
      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.img} alt="" className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
