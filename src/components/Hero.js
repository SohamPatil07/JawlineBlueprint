import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              Define Your
              <span className="highlight"> Perfect Jawline</span>
            </h2>
            <p className="hero-description">
              Discover the proven 5-step system to sculpt a masculine, aesthetic jawline naturally — backed by science, daily habits, and targeted exercises.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">Get the Ebook</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src="/jawline.png" 
                alt="Sharp Jawline Profile" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
