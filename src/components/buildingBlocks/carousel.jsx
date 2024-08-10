import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ slides, autoPlayInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    setIsInteracted(true); // Mark interaction to pause auto-play temporarily
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    setIsInteracted(true); // Mark interaction to pause auto-play temporarily
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsInteracted(true); // Mark interaction to pause auto-play temporarily
  };

  useEffect(() => {
    const autoPlay = setTimeout(() => {
      if (!isInteracted) {
        nextSlide();
      } else {
        setIsInteracted(false); // Reset interaction state
      }
    }, autoPlayInterval);

    return () => clearTimeout(autoPlay); // Cleanup timeout on component unmount or interaction
  }, [currentSlide, isInteracted]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="carousel-slide"
            key={index}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>

      <button className="carousel-arrow left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
