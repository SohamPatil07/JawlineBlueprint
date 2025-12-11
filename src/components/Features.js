import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      title: 'Professional Results',
      description: 'Achieve salon-quality results with our proven techniques and expert guidance.',
      icon: '✨'
    },
    {
      title: 'Natural Enhancement',
      description: 'Subtle, natural-looking improvements that enhance your unique facial structure.',
      icon: '🎯'
    },
    {
      title: 'Safe & Effective',
      description: 'Clinically tested methods that prioritize your safety and well-being.',
      icon: '🛡️'
    },
    {
      title: 'Lasting Confidence',
      description: 'Build confidence that lasts with transformative results you can see.',
      icon: '💎'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Why Choose DapperMix?</h2>
          <p className="features-subtitle">
            We combine cutting-edge techniques with personalized care to deliver exceptional results
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
