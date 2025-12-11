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
              Experience the confidence that comes with a sculpted, defined jawline. 
              Our professional solutions help you achieve the look you've always wanted.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">Start Your Journey</button>
              <button className="secondary-button">Learn More</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>10K+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>
              <div className="stat">
                <h3>5★</h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop&q=80" 
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
