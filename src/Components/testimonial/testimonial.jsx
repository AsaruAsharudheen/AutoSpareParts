import "./testimonial.css";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../api/api"; // adjust if needed

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [slide, setSlide] = useState(0);

  const slidesPerView = window.innerWidth <= 768 ? 1 : 3;

  /* =============================
     FETCH TESTIMONIALS
  ============================== */
  useEffect(() => {
    api.get("testimonials/get.php")
      .then((res) => {
        const active = Array.isArray(res.data)
          ? res.data.filter(item => item.status == 1)
          : [];
        setReviews(active);
      })
      .catch(err => console.error("Testimonial API Error:", err));
  }, []);

  const totalSlides = Math.ceil(reviews.length / slidesPerView);

  /* =============================
     AUTO SLIDER
  ============================== */
  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setSlide(prev => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  if (reviews.length === 0) return null;

  return (
    <section className="testimonial">
      <p className="service-topline">
        <span></span> TESTIMONIAL <span></span>
      </p>

      <h2 className="testimonial-title">What Our Customers Say</h2>
      <p className="testimonial-desc">
        Real feedback from our happy customers all over India.
      </p>

      <div className="testimonial-slider">
        <div
          className="testimonial-track"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div className="testimonial-page" key={i}>
              {reviews
                .slice(i * slidesPerView, i * slidesPerView + slidesPerView)
                .map(item => (
                  <div className="testimonial-card" key={item.id}>
                    
                    {/* ✅ IMAGE FIX */}
                    <img
                      src={
                        item.image
                          ? `http://localhost${item.image}`
                          : "/client.svg"
                      }
                      alt={item.name}
                    />

                    <h3>{item.name}</h3>
                    <span>{item.location}</span>
                    <p>{item.review}</p>

                    <div className="stars">
                      {[...Array(Number(item.rating || 5))].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="testimonial-dots">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={slide === i ? "dot active" : "dot"}
            onClick={() => setSlide(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
